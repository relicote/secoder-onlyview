import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MoveRight,
  Bell,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import imageHeader from "../images/logo-header.png";
import imageNavbar from "../images/navbar-logo.png";
import simboloFundo from "../images/simbolo-fundo.svg";

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50">
    <div className="container mx-auto flex h-[91px] w-full max-w-[1920] items-center justify-around gap-2 sm:px-6 lg:px-8">
      <nav className="hidden md:flex items-center justify-center gap-8">
        <Link href="/">
          <Image src={imageNavbar} alt="Secoder Logo" width={176} height={43} />
        </Link>
        <Link
          href="#tools"
          className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
        >
          Nossas Ferramentas
        </Link>
        <Link
          href="#specialties"
          className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
        >
          Nossas Especialidades
        </Link>
        <Link
          href="#faq"
          className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
        >
          Perguntas Frequentes
        </Link>
      </nav>
      <div className="flex items-center justify-end gap-4">
        <Link href="#" aria-label="Facebook">
          <Facebook className="h-5 w-5 text-foreground/80 hover:text-primary transition-colors" />
        </Link>
        <Link href="#" aria-label="Instagram">
          <Instagram className="h-5 w-5 text-foreground/80 hover:text-primary transition-colors" />
        </Link>
        <Link href="#" aria-label="YouTube">
          <Youtube className="h-5 w-5 text-foreground/80 hover:text-primary transition-colors" />
        </Link>
        <Link href="#" aria-label="Twitter">
          <Twitter className="h-5 w-5 text-foreground/80 hover:text-primary transition-colors" />
        </Link>
      </div>
    </div>
  </header>
);

const Footer = () => (
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
);

const OctopusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2.5-4.5h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8c1.1 0 2 .9 2 2s-.9 2-2 2zm-9-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 9.5 7.5 9.5 6 8.83 6 8.5zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z" />
    <path d="M16.44 14.35C15.55 15.3 14.7 16 12 16c-2.7 0-3.55-.7-4.44-1.65-.3-.32-.7-.57-1.06-.85-1.39-1.1-2.5-3.27-2.5-5.5 0-2.8 2.2-5 5-5s5 2.2 5 5c0 .34-.04.68-.11 1H17.5c1.1 0 2 .9 2 2 0 1.22-.89 2.23-2.06 2.35zM12 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    <path d="M6.5 18c.83 0 1.5.67 1.5 1.5S7.33 21 6.5 21 5 20.33 5 19.5 5.67 18 6.5 18zm11 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5 1.5z" />
  </svg>
);

export default function Home() {
  const tools = [
    {
      title: "Monitoramento em Tempo Real",
      description:
        "Nossa plataforma monitora continuamente seus sistemas para detectar e alertar sobre ameaças em tempo real, 24/7.",
      imageId: "tool-1",
    },
    {
      title: "Scanner de Vulnerabilidades",
      description:
        "Identifique e corrija falhas de segurança em suas aplicações e infraestrutura antes que sejam exploradas por invasores.",
      imageId: "tool-2",
    },
    {
      title: "Simulador de Phishing",
      description:
        "Treine sua equipe para reconhecer e reagir a ataques de phishing com simulações realistas e campanhas educativas.",
      imageId: "tool-3",
    },
    {
      title: "Base de Conhecimento",
      description:
        "Acesse um portal completo com as melhores práticas, guias de segurança e insights para fortalecer suas defesas.",
      imageId: "tool-4",
    },
  ];

  const specialties = [
    { imageId: "specialty-1" },
    { imageId: "specialty-2" },
    { imageId: "specialty-3" },
    { imageId: "specialty-4" },
    { imageId: "specialty-5" },
  ];

  const faqItems = [
    {
      question: "O que é um Pentest (Teste de Invasão)?",
      answer:
        "Um Pentest é um ataque cibernético simulado e autorizado em um sistema de computador, realizado para avaliar a segurança do sistema. O teste identifica pontos fracos (vulnerabilidades), bem como pontos fortes, permitindo que uma avaliação de segurança completa seja concluída.",
    },
    {
      question: "Como funciona a simulação de phishing da Secoder?",
      answer:
        "Nossa plataforma cria e envia e-mails de phishing realistas e inofensivos para seus funcionários. Analisamos as taxas de cliques e relatamos os resultados, fornecendo treinamento direcionado para ajudar a educar sua equipe e reduzir os riscos de ataques de engenharia social.",
    },
    {
      question: "O monitoramento de ameaças é realmente em tempo real?",
      answer:
        "Sim. Nossas ferramentas de monitoramento analisam o tráfego de rede e os logs do sistema continuamente, 24/7. Usamos algoritmos avançados e IA para detectar atividades suspeitas e anomalias assim que ocorrem, permitindo uma resposta imediata a possíveis ameaças.",
    },
    {
      question:
        "Quais são os principais riscos de segurança que as empresas enfrentam hoje?",
      answer:
        "Atualmente, os principais riscos incluem ataques de ransomware, phishing e engenharia social, vulnerabilidades em softwares desatualizados, e ameaças internas. A Secoder oferece soluções abrangentes para mitigar todos esses riscos e proteger seus ativos digitais.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-48 pb-20 lg:pt-32 lg:pb-32 overflow-hidden max-w-[1920px]">
          {/* Fundo */}
          <div className="absolute inset-0 -z-10">
                  <div
                          className="absolute inset-0
                    bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
                        linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
                    bg-[size:30px_30px]
                    [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
                    [-webkit-mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
                        >
                  </div>
          </div>

              <div
                  className="pointer-events-none absolute right-[23%] bottom-[25%] z-[5] 
                            opacity-5 scale-[2.5]
                            mix-blend-lighten"
                >
                  <Image
                    src={simboloFundo} 
                    alt="Símbolo Secoder"
                    width={400}
                    height={400}
                    className="object-contain"
                  />
          </div>

          {/* Conteúdo */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Texto à esquerda */}
              <div className="text-center md:text-left md:ml-16">
<Badge
  variant="outline"
  className="
    inline-flex items-center gap-2 rounded-full
    bg-[#191c24] ring-1 ring-[#191c24]
    backdrop-blur px-2.5 py-1.5
    text-[#d4e1ff] font-normal
  "
>
  {/* Pill 'Novo' à esquerda */}
  <span
    className="
      inline-flex items-center gap-1
      rounded-full px-2 py-0.5
      text-[11px] font-normal
      bg-[#195bff] text-white ring-1 ring-[#195bff]
    "
  >
    <Image
      src={simboloFundo}
      alt="Símbolo Secoder"
      width={14}
      height={14}
      className="h-3.5 w-3.5 object-contain"
    />
    Novo
  </span>

  {/* Texto do badge */}
  <span className="text-sm text-[#d4e1ff] font-normal tracking-wide">
    Secoder Especialistas em Pentest
  </span>
</Badge>





                <h1 className="text-4xl md:text-7xl mt-2 font-headline font-medium tracking-tight animate-fade-in-down text-foreground">
                  Em tempo real,
                  <br />
                  rápida detecção,
                  <span className="block bg-gradient-to-b from-[#a7b9e8] from-5% to-[#7c98de] to-100% bg-clip-text text-transparent">
                    elimine riscos
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg text-muted-foreground animate-fade-in-up font-body font-normal">
                  Monitore em tempo real, detecte ameaças com rapidez e elimine
                  riscos antes que se tornem problemas.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 animate-fade-in-up">
                  <Button
                    size="lg"
                    asChild
                    className="transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 font-normal rounded-full bg-gray-900"
                  >
                    <Link href="#contact">
                      Fale com um especialista
                      <MoveRight />
                    </Link>
                  </Button>
                  <p className="transition-all duration-300 hover:scale-105">
                    <Link href="#faq">Tem dúvida?</Link>
                  </p>
                </div>
              </div>

              {/* Imagem à direita */}
              <div className="relative flex justify-center md:justify-start md:translate-x-[80px]">
                <Image
                  src={image
                      }
                  alt="Secoder Mascot"
                  className="w-[500px] h-auto object-contain "
                  priority
                />

                <div
                  className="pointer-events-none absolute right-0 bottom-[-32px] z-[40]
               w-[125%] h-[300px]
               bg-[radial-gradient(120%_65%_at_75%_100%,hsl(var(--background))_0%,hsl(var(--background)/0.92)_35%,hsl(var(--background)/0.8)_55%,transparent_75%)]"
                />
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-48 z-[30]
                bg-gradient-to-t from-background via-background/80 to-transparent"
          />
        </section>

        {/* Specialties Section */}
        <section id="specialties" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <Badge
              variant="outline"
              className="mb-4 border-primary/20 bg-primary/10 text-primary"
            >
              <ShieldCheck className="mr-2 h-4 w-4" />
              Secoder Especialistas em Pentest
            </Badge>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Nossa equipe é certificada pelas mais renomadas instituições de
              segurança do mundo.
            </p>
            <div className="mt-12 flex justify-center items-center flex-wrap gap-8 md:gap-12">
              {specialties.map((specialty, index) => {
                const image = PlaceHolderImages.find(
                  (img) => img.id === specialty.imageId
                );
                return (
                  image && (
                    <Image
                      key={index}
                      src={image.imageUrl}
                      alt={image.description}
                      width={150}
                      height={75}
                      className="h-20 w-auto object-contain text-primary filter grayscale brightness-150 contrast-150 transition-all duration-300 hover:grayscale-0 hover:brightness-100 hover:contrast-100 hover:scale-110"
                      data-ai-hint={image.imageHint}
                    />
                  )
                );
              })}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground font-headline">
              Nossas Ferramentas
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {tools.map((tool, index) => {
                const image = PlaceHolderImages.find(
                  (img) => img.id === tool.imageId
                );
                return (
                  <Card
                    key={index}
                    className="bg-card border-border/50 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
                  >
                    <CardHeader>
                      <CardTitle className="text-primary text-xl font-bold">
                        {tool.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>{tool.description}</CardDescription>
                    </CardContent>
                    {image && (
                      <div className="relative w-full h-64 mt-4">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Phishing Test Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">
            <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto text-foreground font-headline text-center">
              Garanta que seu time saiba se prevenir de ataques de engenharia
              social.
            </h2>
            <div className="w-full max-w-4xl">
              <Card className="bg-card border-border/50 p-8 rounded-2xl">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="flex items-center gap-6 md:col-span-2">
                    <div className="hidden md:flex bg-background p-4 rounded-full border border-border">
                      <OctopusIcon className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <Badge
                        variant="default"
                        className="mb-2 bg-primary/10 text-primary border border-primary/20"
                      >
                        <Bell className="mr-1 h-3 w-3" />
                        Online
                      </Badge>
                      <h3 className="text-2xl font-bold font-headline text-foreground">
                        Teste de phishing
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm md:col-span-3">
                    Teste avançado de phishing para identificar todas as
                    vulnerabilidades no projeto e mitigar qualquer risco
                    associado. O objetivo é detectar e eliminar quaisquer falhas
                    humanas que possam ser exploradas por agentes maliciosos.
                    Vamos garantir que todas as medidas de segurança sejam
                    implementadas de forma eficaz para proteger seu sistema e
                    dados contra ataques cibernéticos.
                  </p>
                </div>
              </Card>
              <div className="mt-4 flex justify-center">
                <Button
                  size="lg"
                  className="group rounded-md bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold px-8 py-6 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 w-full"
                >
                  <span className="flex-grow text-center">Saiba mais</span>
                  <span className="ml-4 bg-background/20 rounded-full p-2 group-hover:bg-background/30 transition-colors">
                    <OctopusIcon className="h-6 w-6 text-primary-foreground" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground font-headline">
              Perguntas Frequentes
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-x-8 gap-y-4"
            >
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border-border/50 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="bg-background p-3 rounded-full border border-border">
                        <HelpCircle className="h-6 w-6 text-primary" />
                      </div>
                      <span className="flex-1">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-16 pr-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
              Pronto para fortalecer sua segurança?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Nossa equipe de especialistas está pronta para ajudar você a
              proteger seu negócio.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                size="lg"
                asChild
                className="transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <Link href="#contact">Fale com um especialista</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <Link href="#faq">Tem dúvida?</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
