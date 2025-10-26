import Link from "next/link";
import Image from "next/image";
import imageNavbar from "../images/navbar-logo.png";
import SocialMediaIcons from "./socialMediaIcons";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex h-[91px] w-full max-w-[1920] items-center justify-around gap-2 sm:px-6 lg:px-8">
        <nav className="hidden md:flex items-center justify-center gap-8">
          <Link href="/">
            <Image
              src={imageNavbar}
              alt="Secoder Logo"
              width={176}
              height={43}
            />
          </Link>
          <Link
            href="#tools"
            className="text-sm text-foreground/80 hover:text-primary transition-colors"
          >
            Nossas Ferramentas
          </Link>
          <Link
            href="#specialties"
            className="text-sm text-foreground/80 hover:text-primary transition-colors"
          >
            Nossas Especialidades
          </Link>
          <Link
            href="#faq"
            className="text-sm text-foreground/80 hover:text-primary transition-colors"
          >
            Perguntas Frequentes
          </Link>
        </nav>
        <SocialMediaIcons/>
      </div>
    </header>
  );
}
