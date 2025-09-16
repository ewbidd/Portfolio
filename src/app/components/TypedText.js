
"use client";
import { useEffect, useState } from "react";

const texts = ["Web Developer", "Tech Enthusiast", "Life Long Learner", "Junior Programmer"];

export default function TypedText() {
  const [displayText, setDisplayText] = useState("");
  const [count, setCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const currentText = texts[count];

    if (!isDeleting && index < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, index + 1));
        setIndex(index + 1);
      }, 70);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, index - 1));
        setIndex(index - 1);
      }, 30);
    } else if (!isDeleting && index === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && index === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCount((count + 1) % texts.length);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, count]);

  // Reset index when count berubah
  useEffect(() => {
    setIndex(0);
  }, [count]);

  return (
    <h1>
      Hello, I'm a <span className="neon-text">{displayText}</span>
    </h1>
  );
}
