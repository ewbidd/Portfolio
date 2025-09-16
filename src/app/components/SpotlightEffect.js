"use client";
import { useEffect } from "react";

export default function SpotlightEffect() {
  useEffect(() => {
    const handleMove = (e) => {
      const card = e.target.closest(".spotlight-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    };

    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return null; // tidak render apapun
}
