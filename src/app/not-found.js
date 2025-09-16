"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.body.classList.add("notfound-page");
    return () => {
      document.body.classList.remove("notfound-page");
    };
  }, []);

  return (
    <div style={{ minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "9rem" }}>
      <div style={{ background: "rgba(24,24,24,0.7)", color: "#fff", padding: "2rem 2.5rem", borderRadius: 16, boxShadow: "0 8px 32px rgba(0,0,0,0.3)", textAlign: "center", maxWidth: 480 }}>
        <h2 style={{ marginBottom: "1.5rem" }}>hayo mau kemana</h2>
        <Link href="/">
          <button style={{ padding: "0.75rem 2rem", fontSize: "1.1rem", borderRadius: 8, background: "#0070f3", color: "#fff", border: "none", cursor: "pointer" }}>
            jalan pulang
          </button>
        </Link>
      </div>
    </div>
  );
}