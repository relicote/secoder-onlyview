"use client"

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import simboloAzul from "../images/secoder-azul.svg"

const faqItems = [
  {
    question: "O que é um Pentest ou Teste de Intrusão?",
    answer:
      "O Pentest (Penetration Testing ou Teste de Intrusão) é a maneira mais eficaz para identificar e corrigir todas as vulnerabilidades do seu negócio...",
  },
  {
    question: "O que ocorre após um Pentest com a Secoder?",
    answer:
      "Após o término do Pentest, nossos Hackers Éticos irão entregar um relatório de vulnerabilidades contendo todas as vulnerabilidades encontradas...",
  },
  {
    question: "O que acontece se um Pentest não for feito?",
    answer:
      "Não realizar um teste de intrusão com profissionais de confiança significa deixar que criminosos descubram e explorem suas falhas de segurança...",
  },
  {
    question: "Quanto custa realizar um Pentest?",
    answer:
      "O preço de um Pentest está diretamente ligado ao escopo e o tempo que nossa equipe precisará investir para entregar os melhores resultados...",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="flex justify-center px-4">
        <span className="inline-block px-2.5 py-1.5 mb-6 border border-[#161a24] bg-[#161a24] rounded-full text-sm text-[#D3E0FF] font-normal tracking-wide text-center">
          FAQ
        </span>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-normal text-center font-headline bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#2D5ACA]/80 text-transparent bg-clip-text">
          Perguntas Frequentes
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-[#141417] bg-[#141417] px-6 py-4 transition-colors duration-300 hover:border-[rgba(255,255,255,0.15)]"
            >
              <div className="flex items-center justify-between">
                <AccordionTrigger className="flex-1 text-left text-sm md:text-base text-gray-200 font-medium hover:no-underline focus:outline-none">
                  {item.question}
                </AccordionTrigger>

                <div className="ml-4 flex items-center justify-center bg-[#090a0d] border border-[#090a0d] rounded-lg p-2">
                  <Image
                    src={simboloAzul || "/placeholder.svg"}
                    alt="Símbolo Azul"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              </div>
              <AccordionContent className="text-muted-foreground text-sm mt-3 text-gray-400 leading-relaxed pl-1 pr-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
