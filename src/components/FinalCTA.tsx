"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import simboloFundo from "../images/simbolo-fundo.svg"
import secoderSentado from "../images/secoder-sentado.png"

export default function FinalCTA() {
  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative box-border w-full max-w-[1216px] mx-auto min-h-[300px] md:h-[387px] bg-gradient-to-r from-[#3F76FD] via-[#1A5CFF] to-[#719AFF] border-[3px] border-white/5 rounded-[24px] md:rounded-[48px] overflow-hidden flex flex-col items-start justify-center px-6 sm:px-10 md:px-20 py-8 md:py-0">
          <div className="flex flex-col items-start gap-4 md:gap-6 max-w-full md:max-w-[528px]">
            <div className="flex flex-col items-start gap-2 md:gap-3">
              <h2 className="text-[#F7F9FF] font-geist font-medium text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-[100%] tracking-[-0.07em] text-left">
                Venha conversar com nossa equipe!
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[150%] text-white/70 font-geist font-normal text-left">
                Metodologia proprietária para pentest de urgência que combina técnicas avançadas de automação.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 mt-2 md:mt-4 w-full sm:w-auto">
              <Button
                size="lg"
                asChild
                className="relative w-full sm:w-[249px] h-[48px] bg-gradient-to-b from-[rgba(16,16,16,0.04)] to-[rgba(23,23,23,0.12)] shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-[16px] rounded-full overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <Link
                  href="#contact"
                  className="flex items-center justify-center gap-3 text-[#F1F1EF] font-inter text-[14px] sm:text-[16px]"
                >
                  Fale com um especialista
                  <svg
                    className="w-4 h-4 text-[#F1F1EF]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto border border-white/30 text-white hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105 rounded-full bg-transparent"
              >
                <Link href="#faq">Tem dúvida?</Link>
              </Button>
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none hidden md:block">
            <Image
              src={simboloFundo || "/placeholder.svg"}
              alt="Símbolo Secoder"
              className="absolute left-[71.3%] right-[3.82%] top-[44.71%] bottom-[-24%] w-auto h-auto opacity-10"
              priority
            />
            <Image
              src={simboloFundo || "/placeholder.svg"}
              alt="Símbolo Secoder"
              className="absolute left-[47.7%] right-[27.42%] top-[-31%] bottom-[51.71%] w-auto h-auto opacity-10"
              priority
            />
            <Image
              src={simboloFundo || "/placeholder.svg"}
              alt="Símbolo Secoder"
              className="absolute left-[106.52%] right-[-31.4%] top-[49.12%] bottom-[-28.41%] w-auto h-auto opacity-10 -rotate-[105deg]"
              priority
            />
            <Image
              src={simboloFundo || "/placeholder.svg"}
              alt="Símbolo Secoder"
              className="absolute left-[82.92%] right-[-7.8%] top-[-26.59%] bottom-[47.3%] w-auto h-auto opacity-10 -rotate-[105deg]"
              priority
            />
            <Image
              src={simboloFundo || "/placeholder.svg"}
              alt="Símbolo Secoder"
              className="absolute left-[90.4%] right-[-15.28%] top-[40.31%] bottom-[-19.6%] w-auto h-auto opacity-10 rotate-180"
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute right-0 md:right-[60px] z-[50] pointer-events-none select-none hidden lg:block bottom-[333]">
        <Image
          src={secoderSentado || "/placeholder.svg"}
          alt="Mascote Secoder"
          className="w-[340px] md:w-[470px] lg:w-[780px] h-auto object-contain translate-y-[510px] translate-x-[-185px]"
          priority
        />
      </div>
    </section>
  )
}
