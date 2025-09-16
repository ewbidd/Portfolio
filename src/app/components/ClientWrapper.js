"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function WelcomeScreen({ fadeOut }) {
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-purple-700 text-white transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo / gambar */}
      <Image
        src="/asset/kopi.png"
        alt="Logo"
        width={100}
        height={100}
        className="animate-bounce"
      />

      {/* Teks */}
      <h1 className="mt-6 text-3xl font-bold">Welcome to My Portfolio 🚀</h1>
      <p className="mt-2 text-lg text-gray-200">
        Building dreams, one line of code at a time ✨
      </p>
    </div>
  );
}

export default function ClientWrapper({ children }) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // mulai fade-out sebelum splash hilang
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000); // mulai fade setelah 2 detik
    const timer = setTimeout(() => setShowWelcome(false), 2500); // hilang total setelah 2.5 detik

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return <>{showWelcome ? <WelcomeScreen fadeOut={fadeOut} /> : children}</>;
}
