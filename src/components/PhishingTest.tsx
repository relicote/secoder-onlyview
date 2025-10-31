"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import simboloAzul from "../images/secoder-azul.svg";
import simboloFundo from "../images/simbolo-fundo.svg";
import dragClick from "../images/drag.svg";

export default function PhishingTest() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 md:gap-8 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.25),transparent_60%)]">
        <div className="flex justify-center">
          <span className="inline-block px-2.5 py-1.5 mb-2 border border-[#191c24] bg-[#0e1016] rounded-full text-xs sm:text-sm text-[#D3E0FF] font-normal tracking-wide text-center">
            Secoder Especialistas em Pentest
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 font-normal text-center font-headline bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#7491db]/80 text-transparent bg-clip-text text-balance px-4">
          Garanta que seu time saiba se prevenir de ataques de engenharia
          social.
        </h2>

        <div className="w-full max-w-[1216px] mx-auto relative z-[2]">
          <Card className="relative bg-[#08090C] border border-[#191c24] rounded-2xl md:rounded-[40px] p-6 md:p-8 shadow-[inset_0px_4px_32px_rgba(255,255,255,0.04)] flex items-center justify-center min-h-[270px]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="flex items-center justify-center bg-gradient-to-br from-[#242631] to-[#04050B] w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[164px] md:h-[164px] rounded-full border border-[rgba(255,255,255,0.06)] shadow-[inset_0px_4px_32px_rgba(255,255,255,0.04)]">
                  <Image
                    src={simboloAzul || "/placeholder.svg"}
                    alt="Símbolo Azul"
                    width={82}
                    height={82}
                    className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[82px] md:h-[82px] object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center sm:ml-0 md:ml-6 text-center sm:text-left">
                  <span className="inline-flex items-center justify-center mb-2 bg-[#1A5CFF] border border-[#1A5CFF] text-white rounded-full text-sm md:text-[15px] font-medium leading-[1] tracking-tight px-[4px] py-[1px] h-[22px] w-fit mx-auto sm:mx-0">
                    <Image
                      src={simboloFundo || "/placeholder.svg"}
                      alt="Símbolo Secoder"
                      width={14}
                      height={14}
                      className="h-[14px] w-[14px] object-contain mr-[3px]"
                    />
                    Online
                  </span>

                  <h3 className="text-4xl sm:text-5xl md:text-[56px] leading-[100%] font-normal font-headline text-[#D3E0FF] tracking-[-0.06em]">
                    Teste
                    <br className="hidden sm:block" /> de phishing
                  </h3>
                  <Image
                    src={dragClick || "/placeholder.svg"}
                    alt="Ícone de clique"
                    width={82}
                    height={82}
                    className="hidden md:block absolute left-[64px] bottom-[-16px] lg:left-[176px] lg:bottom-[40px] w-[64px] h-[64px] lg:w-[82px] lg:h-[82px] z-[40] object-contain"
                  />
                </div>
              </div>

              <p className="text-[#747B8C] text-base sm:text-lg md:text-[18px] leading-[150%] max-w-full md:max-w-[576px] text-center md:text-left">
                Teste avançado de phishing para identificar todas as
                vulnerabilidades no projeto e mitigar qualquer risco associado.
                O objetivo é detectar e eliminar quaisquer falhas humanas que
                possam ser exploradas por agentes maliciosos. Vamos garantir que
                todas as medidas de segurança sejam implementadas de forma
                eficaz para proteger seu sistema e dados contra ataques
                cibernéticos.
              </p>
            </div>
          </Card>
        </div>

        <div className="w-full max-w-[1216px] mx-auto relative z-[3] bg-[radial-gradient(circle_at_bottom_center,rgba(37,99,235,0.25),transparent_70%)] mx-auto justify-center"></div>

        <div className="relative w-full max-w-[1216px] mx-auto bg-[#08090C] border-[rgba(255,255,255,0.08)] border-[1.5px] rounded-2xl md:rounded-[24px] overflow-hidden">
          {/* Vetor 1 */}
          <Image
            src={simboloFundo}
            alt="Decorativo"
            width={300}
            height={300}
            className="hidden md:block absolute left-[75.3%] right-[3.82%] top-[-30.11%] bottom-[39.47%] rotate-[-100deg] opacity-5"
          />

          {/* Vetor 2 */}
          <Image
            src={simboloFundo}
            alt="Decorativo"
            width={300}
            height={300}
            className="hidden md:block absolute left-[80.26%] right-[-5.15%] top-[39.5%] bottom-[-37.35%] rotate-[-115deg] opacity-5"
          />
          <div className="relative flex items-center justify-center gap-4 md:gap-8 lg:gap-12 py-12 md:py-16 px-4">
            <div className="relative flex-1 max-w-full md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1150px] h-[120px] md:h-[140px] lg:h-[164px] rounded-full bg-gradient-to-r from-[#020308] via-[#0D225D] to-[#1A5CFF] flex items-center justify-center px-6">
              {/* Texto centralizado */}
              <span className="text-[#D3E0FF] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-[100%] text-center">
                Saiba mais
              </span>

              <div className="hidden md:flex items-center justify-center absolute right-4 lg:right-[-2px] w-[120px] h-[120px] lg:w-[164px] lg:h-[164px] rounded-full border border-[rgba(255,255,255,0.06)] bg-gradient-to-br from-[#242631] to-[#04050B] shadow-[inset_0_4px_32px_rgba(255,255,255,0.04)]">
                <Image
                  src={simboloAzul || "/placeholder.svg"}
                  alt="Símbolo Azul"
                  width={82}
                  height={82}
                  className="w-[60px] h-[60px] lg:w-[82px] lg:h-[82px] object-contain"
                />
              </div>

              <Image
                src={dragClick || "/placeholder.svg"}
                alt="Ícone de clique"
                width={82}
                height={82}
                className="hidden md:block absolute right-0 bottom-[-10px] lg:bottom-[-42px] lg:right-[40px] w-[64px] h-[64px] lg:w-[82px] lg:h-[82px] z-[40] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
