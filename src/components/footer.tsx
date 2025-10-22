import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer id="contact" className="bg-background ">
      <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8  text-center inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(37,99,235,0.25),transparent_60%)] ">

        <div className="pt-2 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4"/>
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-4 border rounded-xl">
            <form className="flex gap-2">
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#08090C] p-6 rounded-lg w-full  mx-auto">
                <h2 className="text-[#D3DFFF] text-2xl font-semibold">Newsletter</h2>
                <div className="flex flex-1  w-full sm:w-auto mt-4 sm:mt-0 justify-end">
                  <input 
                    type="email" 
                    placeholder="Digite seu melhor e-mail" 
                    className="flex-2 px-4 py-2 rounded-l-lg border border-gray-700 bg-input text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  />
                  <button 
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium rounded-r-lg hover:opacity-90 transition"
                  >
                    Enviar →
                  </button>
                </div>
              </div>
            </form>
          </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 text-center">
         <Link
              href="/"
              className="text-20xl sm:text-4xl md:text-8xl lg:text-20xl font-extrabold
           bg-gradient-to-b from-gray-900/50 to-gray-300/50 bg-clip-text text-transparent"
            >
              Secoder
          </Link>
        </div>
         <div className="pt-2 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4"/>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
         
          <div className="flex flex-col gap-4">
           

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <span>contato@secoder.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span>+55 (11) 98765-4321</span>
            </div>
          </div>

          <div className="flex flex-col text-sm gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground flex-row">
              <p className="text-sm text-muted-foreground ">
                Secoder Tecnologia e Segurança Digital Ltda.
              </p>
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

        
      </div>
    </footer>
  );
}
