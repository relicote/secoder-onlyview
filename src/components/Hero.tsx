"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { MoveRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useState, useRef } from "react"
import secoderHeader from "@/images/secoder-header.png"
import simboloFundo from "@/images/simbolo-fundo.svg"

export default function Hero() {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 })
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return

    const rect = sectionRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setGradientPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setGradientPosition({ x: 50, y: 50 })
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-32 pb-20 lg:pt-32 lg:pb-32 overflow-hidden max-w-[1920px]
      bg-[radial-gradient(circle_at_top_left,rgba(11,34,92,0.20),transparent_30%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_30%)]
    "
      style={
        {
          "--x": `${gradientPosition.x}%`,
          "--y": `${gradientPosition.y}%`,
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0
            bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
                linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
            bg-[size:30px_30px]
            [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
            [-webkit-mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        ></div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[4] hidden lg:block"
        style={{
          background: `radial-gradient(circle 300px at var(--x) var(--y), rgba(255, 255, 255, 0.03) 0%, transparent 70%)`,
          transition: "background 0.05s ease-out",
        }}
      />

      <div className="pointer-events-none absolute right-[23%] bottom-[25%] z-[5] opacity-0 scale-[2.5] mix-blend-lighten hidden lg:block">
        <Image
          src={simboloFundo || "/placeholder.svg"}
          alt="Símbolo Secoder"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="pointer-events-none absolute right-[-12%] bottom-[75%] z-[5] opacity-0 scale-[2.5] rotate-[55deg] mix-blend-lighten hidden lg:block">
        <Image
          src={simboloFundo || "/placeholder.svg"}
          alt="Símbolo Secoder"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[5] hidden lg:block"
        style={{
          maskImage: `radial-gradient(circle 300px at var(--x) var(--y), rgba(0, 0, 0, 0.8) 0%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(circle 300px at var(--x) var(--y), rgba(0, 0, 0, 0.8) 0%, transparent 70%)`,
        }}
      >
        <div className="absolute right-[23%] bottom-[25%] scale-[2.5] mix-blend-lighten">
          <Image
            src={simboloFundo || "/placeholder.svg"}
            alt="Símbolo Secoder"
            width={400}
            height={400}
            className="object-contain opacity-5"
          />
        </div>

        <div className="absolute right-[-12%] bottom-[75%] scale-[2.5] rotate-[55deg] mix-blend-lighten">
          <Image
            src={simboloFundo || "/placeholder.svg"}
            alt="Símbolo Secoder"
            width={400}
            height={400}
            className="object-contain opacity-5"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center md:text-left md:ml-0 lg:ml-16">
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 rounded-full bg-[#191c24] ring-1 ring-[#191c24] backdrop-blur px-2.5 py-1.5 text-[#d4e1ff] font-normal"
            >
              <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-normal bg-[#195bff] text-white ring-1 ring-[#195bff]">
                <Image
                  src="/placeholder.svg"
                  alt="Símbolo Secoder"
                  width={14}
                  height={14}
                  className="h-3.5 w-3.5 object-contain"
                />
                Novo
              </span>
              <span className="text-xs sm:text-sm text-[#D3E0FF] font-normal tracking-wide">
                Secoder Especialistas em Pentest
              </span>
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mt-2 font-headline font-medium tracking-tight animate-fade-in-down text-foreground">
              Em tempo real,
              <br />
              rápida detecção,
              <span className="relative inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-b from-[#a7b9e8] from-5% to-[#7c98de] to-100% bg-clip-text text-transparent">
                elimine riscos
              </span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-muted-foreground animate-fade-in-up font-body font-normal">
              Monitore em tempo real, detecte ameaças com rapidez e elimine riscos antes que se tornem problemas.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 animate-fade-in-up">
              <a
                href="#contact"
                className="relative transition-all duration-300 rounded-full shadow-[inset_0px_1px_0px_rgba(255,255,255,0.09)] px-8 h-12 overflow-visible group bg-[#202124] hover:bg-[radial-gradient(circle_at_bottom_center,rgba(37,99,235,0.25)_0%,#202124_50%)] flex items-center justify-center gap-2 text-white font-medium w-full sm:w-auto"
              >
                <span className="absolute inset-[-1px] rounded-full overflow-hidden pointer-events-none">
                  <motion.span
                    className="absolute inset-0 rounded-full border border-transparent [background:linear-gradient(#202124,#202124)_padding-box,conic-gradient(from_var(--angle),transparent_0%,transparent_85%,rgba(59,130,246,0.8)_90%,rgba(96,165,250,1)_95%,rgba(59,130,246,0.8)_100%,transparent_105%)_border-box]"
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

                <span className="relative z-10 flex items-center gap-2">
                  Fale com um especialista
                  <MoveRight className="w-5 h-5" />
                </span>
              </a>
              <p className="transition-all duration-300 hover:scale-105">
                <Link href="#faq">Tem dúvida?</Link>
              </p>
            </div>
          </div>

          <div className="relative hidden md:flex justify-center md:justify-start md:translate-x-0 lg:translate-x-[80px] mt-8 md:mt-0">
            <Image
              src={secoderHeader || "/placeholder.svg"}
              alt="Secoder Mascot"
              className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-auto object-contain"
              priority
            />
            <div className="pointer-events-none absolute right-0 bottom-[-32px] z-[40] w-[125%] h-[200px] sm:h-[250px] lg:h-[300px] bg-[radial-gradient(120%_65%_at_75%_100%,hsl(var(--background))_0%,hsl(var(--background)/0.92)_35%,hsl(var(--background)/0.8)_55%,transparent_75%)]" />
          </div>
        </div>
      </div>

      <div className="hidden sm:block pointer-events-none absolute inset-x-0 bottom-0 h-48 z-[30] bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  )
}
