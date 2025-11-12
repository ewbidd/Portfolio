"use client";

import { useEffect } from "react";

export default function LigmaPage() {
	useEffect(() => {
		// Add a class to body to let global CSS hide site chrome for this page
		document.body.classList.add("ligma-mode");
		return () => document.body.classList.remove("ligma-mode");
	}, []);

	return (
		<main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#ffffff", fontFamily: "Arial, sans-serif" }}>
			<h1 style={{ textAlign: "center", color: "#000000", fontSize: "3rem", margin: 0, fontFamily: "Arial, sans-serif" }}>ligma balls</h1>
		</main>
	);
}

