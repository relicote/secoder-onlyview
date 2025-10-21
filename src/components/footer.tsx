import Link from "next/link";
import {
  Mail,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Footer() { return (
      <footer id="contact" className="bg-gray-900/50 border-t border-border/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-2xl font-black tracking-wider text-primary font-headline"
          >
            SECODER
          </Link>
          <p className="text-sm text-muted-foreground">
            Soluções de cibersegurança para um mundo digital mais seguro.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 text-primary" />
            <span>contato@secoder.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <span>+55 (11) 98765-4321</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-foreground">Links Rápidos</h3>
          <Link
            href="#tools"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Nossas Ferramentas
          </Link>
          <Link
            href="#specialties"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Nossas Especialidades
          </Link>
          <Link
            href="#faq"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Perguntas Frequentes
          </Link>
        </div>

        <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
          <h3 className="font-semibold text-foreground">
            Assine nossa Newsletter
          </h3>
          <p className="text-sm text-muted-foreground">
            Receba as últimas notícias e insights sobre cibersegurança.
          </p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              className="bg-background"
            />
            <Button type="submit" className="whitespace-nowrap">
              Enviar
            </Button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Secoder. Todos os direitos
          reservados.
        </p>
        <div className="flex gap-4 text-sm">
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Política de Privacidade
          </Link>
          <span className="text-muted-foreground">|</span>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Termos de Uso
          </Link>
        </div>
      </div>
    </div>
  </footer>
)} 

