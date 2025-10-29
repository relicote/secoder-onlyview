"use client"

import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const tools = [
  {
    title: "Secoder Audit",
    description:
      "Nosso mais completo pentest, totalmente personalizado para a maior acuracidade em busca das falhas mais ocultas e críticas.",
    imageId: "tool-1",
  },
  {
    title: "Secoder Vigilant",
    description:
      "Tenha a disposição todo o time de cibersegurança da Secoder para proteger o seu negócio 365 dias ao ano.",
    imageId: "tool-2",
  },
  {
    title: "Secoder Critic",
    description:
      "Métodologia proprietária para pentest de urgência que combina técnicas avançadas de automação, inteligência artificial e análise manual.",
    imageId: "tool-3",
  },
  {
    title: "Secoder Alert",
    description: "Proteção preventiva ou sob demanda contra ataques DDoS.",
    imageId: "tool-4",
  },
]

export default function Tools() {
  return (
    <section id="tools" className="py-20 bg-background">
      <div className="mb-[50px] px-4">
        <div className="flex justify-center">
          <span className="inline-block px-2.5 py-1.5 mb-6 border border-[#191c24] bg-[#0e1016] rounded-full text-sm text-[#D3E0FF] font-normal tracking-wide text-center">
            Secoder Especialistas em Pentest
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-normal text-center font-headline bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#2D5ACA]/80 text-transparent bg-clip-text px-4">
          Nossas Ferramentas
        </h2>
      </div>

      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 place-items-center max-w-[1216px] px-4 sm:px-6">
        {tools.map((tool, index) => {
          const image = PlaceHolderImages.find((img) => img.id === tool.imageId)
          return (
            <Card
              key={index}
              className="relative w-full max-w-[592px] h-auto min-h-[380px] md:min-h-[422px] rounded-[24px] border-[1.5px] border-white/10 bg-card overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_35px_-5px_#3b82f6]/40"
            >
              <CardHeader className="p-6 md:p-8 pb-4">
                <CardTitle className="text-[#D3E0FF] text-xl md:text-2xl font-normal mb-2">{tool.title}</CardTitle>
                <CardDescription className="text-[#747B8C] text-sm md:text-base mt-3 leading-relaxed">
                  {tool.description}
                </CardDescription>
              </CardHeader>

              {image && (
                <div className="relative mx-auto mb-6 md:mb-[38px] w-full max-w-[512px] h-[180px] md:h-[217px] px-6 md:px-10">
                  <div className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10" />
                  <Image
                    src={image.imageUrl || "/placeholder.svg"}
                    alt={image.description}
                    fill
                    className="object-cover rounded-[24px] opacity-95"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              )}
            </Card>
          )
        })}
      </div>
    </section>
  )
}
