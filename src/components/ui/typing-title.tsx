"use client";
import { useEffect } from "react";

export default function TypingTitle() {
  useEffect(() => {
    const baseText = "Secoder";
    let showCursor = true;

    const interval = setInterval(() => {
      document.title = showCursor ? `${baseText} |` : `${baseText}`;
      showCursor = !showCursor;
    }, 600); // tempo do piscar

    return () => clearInterval(interval);
  }, []);

  return null;
}
