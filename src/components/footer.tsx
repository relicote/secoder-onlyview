import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";
import logoFooter from "../images/logo-vertical-footer.png";
import Image from "next/image";
import logoAzul from "../images/secoder-azul.svg";
import SocialMediaIcons from "./socialMediaIcons";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[radial-gradient(circle_at_bottom_center,rgba(37,99,235,0.25),transparent_70%)] max-w-[1221px] mx-auto justify-center"
    >
      <div className=" relative flex flex-row gap-4">
        <Image
          src={logoFooter}
          alt="Secoder Mascot"
          className="max-w-[112px] max-h-[144px] pb-2"
        />

        <div className="flex flex-col justify-end pb-4 gap-2 text-sm text-muted-foreground">
          <span>contato@secoder.com.br</span>
        </div>

        <div className="flex flex-col justify-end pb-4 gap-2 text-sm text-muted-foreground">
          <span>+55 (63) 9 9106-5586</span>
        </div>

        <div className="flex flex-col justify-end pb-4 gap-2 text-sm text-muted-foreground">
          <span>+55 (85) 9 9281-3401</span>
        </div>
        
          
        <div className="absolute bottom-0 left-0 w-full flex justify-end pb-4">
          <span className="text-[#D3DFFF] text-opacity-20 pr-4"> | </span>
          <SocialMediaIcons/>
        </div>
      </div>

      <div className="w-full mx-auto pt-2 border-t border-border/50 flex flex-col  justify-between items-center gap-4" />

      <Card
        className="flex 
              flex-col 
              sm:flex-row 
              items-center 
              gap-4 
              p-6 
              max-h-[132px]
              w-full
              bg-card
              rounded-[30px]
              overflow-hidden
              justify-between
              transition-transform
              duration-300
              mx-auto"
      >
        <h2 className="text-[#D3DFFF] text-[48px] ">Newsletter</h2>
        <form>
        <Card
          className="flex
                items-center 
                w-auto 
                w-auto lg:w-[539px] 
                h-auto lg:h-[79px]
                mt-4 sm:mt-0 
                rounded-[20px] 
                bg-[#141417]
                "
        >
            <input
              type="email"
              placeholder="Digite seu melhor e-mail"
              className="px-4 rounded-l-lg bg-input text-white placeholder-gray-400 focus:outline-none  bg-transparent focus:caret-[#095EE6] "
            />
            <Button
              size="lg"
              className="transition-transform ml-auto duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20  rounded-full bg-gray-900"
              type="submit"
            >
              Enviar →
            </Button>
        </Card>
          </form>
      </Card>
      <div className="container w-full text-center inset-0  ">
        <div className="container text-center">
          <Link
            href="/"
            className="text-18xl sm:text-4xl md:text-8xl lg:text-18xl font-extrabold
              bg-gradient-to-b from-gray-900/30 to-gray-600/50 bg-clip-text text-transparent "
          >
            Secoder
          </Link>
        </div>

        <div className="w-full mx-auto pt-2 border-t border-border/50 flex flex-col  justify-between items-center gap-4" />

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 items-center  ">
          <div className="flex items-center text-[18px] text-[#D3DFFF] text-opacity-50 ">
            <Link href="#" className=" hover:text-primary transition-colors ">
              Secoder Tecnologia e Segurança Digital Ltda.
            </Link>
          </div>
          <div className="flex items-center text-[16px] text-[#D3DFFF] text-opacity-40 ">
            <Link href="#" className="hover:text-primary transition-colors p-2">
              Política de Privacidade
            </Link>
            <span className="text-[#D3DFFF] text-opacity-20"> | </span>
            <Link
              href="#"
              className=" hover:text-primary p-2 transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
          <div className="flex ml-auto items-center text-[16px] text-[#D3DFFF] text-opacity-40 ">
            <Image
              src={logoAzul}
              alt="Secoder Mascot"
              className="max-w-[48px] max-h-[48px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
