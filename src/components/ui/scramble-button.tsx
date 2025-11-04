"use client";
import { useEffect, useRef } from "react";
import { MoveRight } from "lucide-react";
import { TextScramble } from "@/utils/TextScramble";

export default function ScrambleButton() {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const fx = new TextScramble(textRef.current);
    const text = "Fale com um especialista";

    const handleHover = () => fx.setText(text);
    textRef.current.addEventListener("mouseenter", handleHover);

    return () => {
      textRef.current?.removeEventListener("mouseenter", handleHover);
    };
  }, []);

  return (
    <button className="relative z-10 flex items-center gap-2 text-[#a7b9e8] hover:text-[#d0dcff] transition-colors duration-300">
      <span ref={textRef}>Fale com um especialista</span>
      <MoveRight className="w-5 h-5" />
    </button>
  );
}
