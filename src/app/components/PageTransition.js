"use client";


import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [overlayStage, setOverlayStage] = useState("idle"); // idle | covering | uncovering
  const nextChildren = useRef(children);

  // Trigger overlay covering saat children berubah
  useEffect(() => {
    if (children !== displayChildren) {
      setOverlayStage("covering");
      nextChildren.current = children;
    }
    // eslint-disable-next-line
  }, [children]);

  // Handler saat overlay selesai covering
  const handleCoverComplete = () => {
    setDisplayChildren(nextChildren.current);
    setOverlayStage("uncovering");
  };

  // Handler saat overlay selesai uncovering
  const handleUncoverComplete = () => {
    setOverlayStage("idle");
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.01 }}
        transition={{ duration: 0.6, ease: "circInOut" }}
      >
        {displayChildren}
      </motion.div>

      {/* Overlay: covering (masuk), uncovering (keluar) */}
      {(overlayStage === "covering" || overlayStage === "uncovering") && (
        <motion.div
          key={pathname + "-overlay"}
          className="fixed top-0 left-0 w-full h-full z-50"
          style={{
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
          initial={{ y: "100%", opacity: 0.7 }}
          animate={overlayStage === "covering"
            ? { y: "0%", opacity: 1 }
            : { y: "-100%", opacity: 0 }
          }
          transition={{ duration: 0.7, ease: "circInOut" }}
          onAnimationComplete={() => {
            if (overlayStage === "covering") handleCoverComplete();
            if (overlayStage === "uncovering") handleUncoverComplete();
          }}
        />
      )}
    </div>
  );
}
