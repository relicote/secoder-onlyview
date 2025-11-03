"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const specialties = [
  { imageId: "specialty-1" },
  { imageId: "specialty-2" },
  { imageId: "specialty-3" },
  { imageId: "specialty-4" },
  { imageId: "specialty-5" },
]

export default function Specialties() {
  return (
    <section id="specialties" className=" 
    bg-background
    pb-6 py-4 <!-- 📱 Base (mobile): margem superior menor -->
    md:py-20                   <!-- 🖥️ Desktop (≥768px): espaçamento amplo -->
    lg:py-20                     <!-- 🖥️+ (≥1024px): ainda mais folgado -->
    ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <span className="mb-4 pb-4 text-xs sm:text-sm text-[#FFFFFF] opacity-55 font-normal tracking-wide">
          Secoder Especialistas em Pentest
        </span>
        <div
          className="
            mt-6                           <!-- 📱 Base (mobile): margem superior menor -->
            flex flex-wrap items-center justify-center
            gap-4                          <!-- 📱 Espaçamento compacto entre itens -->
            sm:gap-4                    <!-- 💻 Tablet (≥640px): mais respiro -->
            md:gap-8                     <!-- 🖥️ Desktop (≥768px): espaçamento amplo -->
            lg:gap-16                      <!-- 🖥️+ (≥1024px): ainda mais folgado -->
          "
        >
          {specialties.map((specialty, index) => {
            const image = PlaceHolderImages.find((img) => img.id === specialty.imageId)
            return (
              image && (
                <Image
                  key={index}
                  src={image.imageUrl || "/placeholder.svg"}
                  alt={image.description}
                  width={150}
                  height={75}
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain text-primary filter grayscale brightness-150 contrast-150 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:contrast-100 hover:scale-110"
                  data-ai-hint={image.imageHint}
                />
              )
            )
          })}
        </div>
      </div>
    </section>
  )
}
