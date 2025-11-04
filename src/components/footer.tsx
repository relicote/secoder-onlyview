"use client";

import Link from "next/link";
import { Card } from "./ui/card";
import logoFooter from "../images/logo-vertical-footer.png";
import Image from "next/image";
import logoAzul from "../images/secoder-azul.svg";
import SocialMediaIcons from "./socialMediaIcons";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

class TextScramble {
  private el: HTMLElement;
  private chars = "!<>-_\\/[]{}—=+*^?#";
  private queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
  private frame = 0;
  private frameRequest = 0;
  private resolve: (() => void) | null = null;

  constructor(el: HTMLElement) {
    this.el = el;
    this.update = this.update.bind(this);
  }

  public setText(newText: string): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));

    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 20); 
      const end = start + Math.floor(Math.random() * 20);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();

    return promise;
  }

  private update(): void {
    let output = "";
    let complete = 0;

    for (let i = 0; i < this.queue.length; i++) {
      const { from, to, start, end } = this.queue[i];
      let { char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.3) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="text-sky-300">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve?.();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

   private randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}


export default function Footer() {

const textRef = useRef<HTMLSpanElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;
    const fx = new TextScramble(textRef.current);
    const text = "Enviar";

    const handleHover = async () => {
      if (isAnimating) return;
      setIsAnimating(true);
      await fx.setText(text);
      setIsAnimating(false);
    };

    const button = textRef.current.closest("button");
    button?.addEventListener("mouseenter", handleHover);
    return () => button?.removeEventListener("mouseenter", handleHover);
  }, [isAnimating]);


  return (
    <footer
      id="contact"
      className="bg-[radial-gradient(circle_at_bottom_center,rgba(37,99,235,0.25),transparent_70%)] max-w-[1221px] mx-auto justify-center mt-8 px-4 sm:px-6"
    >
      <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-4">
        <Image
          src={logoFooter || "/placeholder.svg"}
          alt="Secoder Mascot"
          className="max-w-[80px] md:hidden lg:block sm:max-w-[100px] md:max-w-[112px] max-h-[104px] sm:max-h-[124px] md:max-h-[144px] pb-2 mx-auto sm:mx-0"
        />

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-4 text-center  flex-1">
          <div className="flex flex-col justify-end pb-2 sm:pb-4 gap-2 text-xs sm:text-sm text-muted-foreground">
            <span>contato@secoder.com.br</span>
          </div>

          <div className="flex flex-col justify-end pb-2 sm:pb-4 gap-2 text-xs sm:text-sm text-muted-foreground">
            <span>+55 (63) 9 9106-5586</span>
          </div>

          <div className="flex flex-col justify-end pb-2 sm:pb-4 gap-2 text-xs sm:text-sm text-muted-foreground">
            <span>+55 (85) 9 9281-3401</span>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end pb-4 sm:absolute sm:bottom-0 sm:right-0">
          <span className="text-[#D3DFFF] text-opacity-20 pr-4 hidden sm:inline">
            {" "}
            |{" "}
          </span>
          <SocialMediaIcons />
        </div>
      </div>

      <div className="w-full mx-auto pt-2 border-t border-border/50 flex flex-col justify-between items-center gap-4" />
      <Card
        className="flex 
              flex-col md:flex-row
              items-center 
              gap-4 md:gap-6
              p-4 sm:p-6 
              min-h-[180px] md:min-h-[132px]
              w-full
              bg-[#08090C]
              border border-white/8
              rounded-[20px] md:rounded-[32px]
              overflow-hidden
              justify-between
              transition-transform
              duration-300
              mx-auto"
      >
        <h2 className="text-[#D3E0FF] text-[24px] sm:text-[24px] md:text-[32px] lg:text-[48px] font-normal leading-[100%] tracking-tight sm:text-[24px]">
          Newsletter
        </h2>
        <form className="w-full md:flex-1 md:max-w-[539px]">
          <div
            className="flex
                flex-col sm:flex-row
                items-stretch sm:items-center 
                w-full
                gap-3 sm:gap-0
                p-3 sm:p-4
                rounded-[20px] md:rounded-[24px]
                bg-white/[0.03]
                border border-white/8"
          >
            <input
              type="email"
              placeholder="Digite seu melhor e-mail"
              className="px-4 py-3 sm:py-2 rounded-lg sm:rounded-none bg-transparent text-white placeholder-[#747B8C] focus:outline-none focus:caret-[#095EE6] flex-1 text-base md:text-lg"
            />

 <button
      type="submit"
      className="relative transition-all duration-300 rounded-full shadow-[inset_0px_1px_0px_rgba(255,255,255,0.09)]
                 px-8 h-12 overflow-visible group bg-[#202124] flex items-center gap-2
                 text-white font-medium hover:scale-105"
    >
      <span className="absolute inset-[-1px] rounded-full overflow-hidden pointer-events-none">
        <motion.span
          className="absolute inset-0 rounded-full border border-transparent
                     [background:linear-gradient(#202124,#202124)_padding-box,
                     conic-gradient(from_var(--angle),transparent_0%,transparent_85%,
                     rgba(59,130,246,0.8)_90%,rgba(96,165,250,1)_95%,
                     rgba(59,130,246,0.8)_100%,transparent_105%)_border-box]"
          style={
            {
              "--angle": "0deg",
            } as React.CSSProperties
          }
          animate={
            {
              "--angle": "360deg",
            } as any
          }
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </span>

      {/* Conteúdo do botão */}
      <span ref={textRef} className="relative z-10 select-none">
        Enviar
      </span>
      <ArrowRight className="relative z-10 w-5 h-5" />
    </button>
          </div>
        </form>
      </Card>

      <div className="container w-full text-center inset-0">
        <div className="container text-center py-6">
          <Link
            href="/"
            className="text-6xl sm:text-8xl md:text-12xl lg:text-18xl font-extrabold
              bg-gradient-to-b from-gray-900/30 to-gray-600/50 bg-clip-text text-transparent"
          >
            Secoder
          </Link>
        </div>

        <div className="w-full mx-auto pt-2 border-t border-border/50 flex flex-col justify-between items-center gap-4" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-6">
          <div className="flex items-center justify-center md:justify-start text-[14px] sm:text-[16px] md:text-[18px] text-[#D3DFFF] text-opacity-50">
            <Link href="#" className="hover:text-primary transition-colors">
              Secoder Tecnologia e Segurança Digital Ltda.
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center text-[14px] sm:text-[16px] text-[#D3DFFF] text-opacity-40 gap-2 sm:gap-0">
            <Link href="#" className="hover:text-primary transition-colors p-2">
              Política de Privacidade
            </Link>
            <span className="text-[#D3DFFF] text-opacity-20 hidden sm:inline">
              {" "}
              |{" "}
            </span>
            <Link href="#" className="hover:text-primary p-2 transition-colors">
              Termos de Uso
            </Link>
          </div>
          <div className="flex justify-center md:justify-end items-center text-[16px] text-[#D3DFFF] text-opacity-40">
            <Image
              src={logoAzul || "/placeholder.svg"}
              alt="Secoder Mascot"
              className="max-w-[40px] sm:max-w-[48px] max-h-[40px] sm:max-h-[48px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
