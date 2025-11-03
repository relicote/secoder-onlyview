"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import imageNavbar from "../images/navbar-logo.png"
import SocialMediaIcons from "./socialMediaIcons"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex h-[91px] w-full max-w-[1920px] items-center justify-between px-4 sm:px-4 md:px-8">
        <Link href="/" className="md:hidden">
          <Image src={imageNavbar || "/placeholder.svg"} alt="Secoder Logo" width={140} height={34} />
        </Link>

        <nav className="hidden md:flex items-center justify-center lg:gap-6 md:gap-8 md:m-0">
          <Link href="/">
            <Image src={imageNavbar || "/placeholder.svg"} alt="Secoder Logo" width={176} height={43}
             className="h-auto sm:w-[140px] md:w-[156px] lg:w-[176px]"/>
          </Link>
          <Link href="#tools" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            Nossas Ferramentas
          </Link>
          <Link href="#specialties" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            Nossas Especialidades
          </Link>
          <Link href="#faq" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            Perguntas Frequentes
          </Link>
        </nav>

        <div className="hidden  md:hidden lg:block">
          <SocialMediaIcons />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="lg:hidden p-2">
            <Menu className="h-6 w-6 text-foreground/80" />
            <span className="sr-only">Toggle menu</span>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-6 mt-8">
              <Link
                href="#tools"
                className="text-lg text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                Nossas Ferramentas
              </Link>
              <Link
                href="#specialties"
                className="text-lg text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                Nossas Especialidades
              </Link>
              <Link
                href="#faq"
                className="text-lg text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                Perguntas Frequentes
              </Link>
              <div className="pt-6 border-t border-border/50">
                <SocialMediaIcons />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
