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
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import imageHeader from "../images/logo-header.png";
import simboloFundo from "../images/simbolo-fundo.svg";
import simboloAzul from "../images/secoder-azul.svg";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
      question: "O que é um Pentest ou Teste de Intrusão?",
      answer:
        "O Pentest (Penetration Testing ou Teste de Intrusão) é a maneira mais eficaz para identificar e corrigir todas as vulnerabilidades do seu negócio. Trata-se de uma metodologia de segurança ofensiva, onde colocamos à prova a real eficácia dos seus sistemas de segurança pela perspectiva de um hacker profissional, que utilizará ferramentas e conhecimentos específicas para invadir e escalar privilégios dentro da sua rede, infraestrutura e aplicação.",
    },
    {
      question: "O que ocorre após um Pentest com a Secoder?",
      answer:
        "Após o término do Pentest, nossos Hackers Éticos irão entregar um relatório de vulnerabilidades contendo todas as vulnerabilidades encontradas, com a explicação de cada uma delas e qual caminho foi percorrido até encontrar e explorar aquela vulnerabilidade. O relatório inclui também o nível de criticidade de cada vulnerabilidade e uma recomendação de como corrigir cada uma delas.",
    },
    {
      question: "O que acontece se um Pentest não for feito?",
      answer:
        "Não realizar um teste de intrusão com profissionais de confiança significa deixar que criminosos descubram e explorem suas falhas de segurança, e o custo médio dessa péssima decisão no Brasil é de R$6.45 milhões de reais (Cost of Data Breach Report 2022 - IBM), incluindo multas governamentais e negócios perdidos - além dos gastos com equipes de cibersegurança pós-incidente e valores frequentemente exigidos por criminosos que infectam as máquinas com ransomware.",
    },
    {
      question: "Quanto custa realizar um Pentest?",
      answer:
        "O preço de um Pentest está diretamente ligado ao escopo e o tempo que nossa equipe precisará investir para entregar os melhores resultados possíveis, por conta disso é importante que você entre em contato conosco para que um especialista faça uma análise do seu negócio e do tipo de teste que melhor se encaixa no seu momento atual, para então montar um orçamento específico que atenderá sua demanda. O Pentest é o investimento mais importante que uma empresa pode fazer por sua cibersegurança, chegando a custar menos que 0.006% de um custo médio por uma violação de dados orquestrada por um cibercriminoso.",
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
            ></div>
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

          <div
            className="pointer-events-none absolute right-[-12%] bottom-[75%] z-[5] 
                            opacity-5 scale-[2.5] rotate-[55deg]
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
                  <span className="text-sm text-[#D3E0FF] font-normal tracking-wide">
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
                  src={imageHeader}
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

        {/* Clients Section */}
        <section id="specialties" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <span className="mb-4 text-sm text-[#FFFFFF]  opacity-55 font-normal tracking-wide">
              Secoder Especialistas em Pentest
            </span>
            <div className="mt-8 flex justify-center items-center flex-wrap gap-8 md:gap-12">
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
        <section id="tools" className="py-20 bg-background">
          <div className="mb-[50px]">
            <div className="flex justify-center">
              <span className="inline-block px-2.5 py-1.5 mb-6 border border-[#191c24] bg-[#0e1016] rounded-full text-sm text-[#D3E0FF] font-normal tracking-wide text-center">
                Secoder Especialistas em Pentest
              </span>
            </div>
            <h2
              className="text-3xl md:text-6xl font-normal text-center font-headline
             bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#2D5ACA]/80
             text-transparent bg-clip-text"
            >
              Nossas Ferramentas
            </h2>
          </div>

          <div
            className="mx-auto grid sm:grid-cols-2 gap-8 place-items-center"
            style={{ maxWidth: "1216px" }}
          >
            {tools.map((tool, index) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === tool.imageId
              );
              return (
                <Card
                  key={index}
                  className="relative w-[592px] h-[422px] rounded-[24px] border-[1.5px] border-white/10 
                     bg-card
                      overflow-hidden flex flex-col 
                     justify-between transition-transform duration-300 hover:-translate-y-2 
                     hover:shadow-[0_0_35px_-5px_#3b82f6]/40"
                >
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-[#D3E0FF] text-2xl font-normal mb-2">
                      {tool.title}
                    </CardTitle>
                    <CardDescription className="text-[#747B8C] text-base mt-3 leading-relaxed">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>

                  {image && (
                    <div
                      className="relative mx-auto mb-[38px]"
                      style={{ width: "512px", height: "217px" }}
                    >
                      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10" />
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover rounded-[24px] opacity-95"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </section>

        {/* Phishing Test Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">
            <div className="flex justify-center">
              <span className="inline-block px-2.5 py-1.5 mb-2 border border-[#191c24] bg-[#0e1016] rounded-full text-sm text-[#D3E0FF] font-normal tracking-wide text-center">
                Secoder Especialistas em Pentest
              </span>
            </div>

            <h2
              className="text-4xl md:text-6xl mb-2 font-normal text-center font-headline
     bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#7491db]/80
     text-transparent bg-clip-text"
            >
              Garanta que seu time saiba se prevenir <br /> de ataques de
              engenharia social.
            </h2>

            {/* Card principal */}
            <div className="w-full max-w-[1216px] mx-auto relative z-[2]">
              <Card
                className="relative bg-[#08090C] border border-[#191c24] rounded-[40px] p-8 shadow-[inset_0px_4px_32px_rgba(255,255,255,0.04)] flex items-center justify-center"
                style={{ height: "270px" }}
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
                  {/* Ícone circular + textos */}
                  <div className="flex items-center justify-center gap-6">
                    <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-[#242631] to-[#04050B] w-[164px] h-[164px] rounded-full border border-[rgba(255,255,255,0.06)] shadow-[inset_0px_4px_32px_rgba(255,255,255,0.04)]">
                      <Image
                        src={simboloAzul}
                        alt="Símbolo Azul"
                        width={82}
                        height={82}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex flex-col justify-center ml-6">
                      <span
                        className="inline-flex items-center justify-center mb-2 
             bg-[#1A5CFF] border border-[#1A5CFF] text-white 
             rounded-full text-[15px] font-medium 
             leading-[1] tracking-tight 
             px-[4px] py-[1px] h-[22px] w-fit"
                      >
                        <Image
                          src={simboloFundo}
                          alt="Símbolo Secoder"
                          width={14}
                          height={14}
                          className="h-[14px] w-[14px] object-contain mr-[3px]"
                        />
                        Online
                      </span>

                      <h3 className="text-[56px] leading-[100%] font-normal font-headline text-[#D3E0FF] tracking-[-0.06em] text-left">
                        Teste <br /> de phishing
                      </h3>
                    </div>
                  </div>

                  {/* Descrição */}
                  <p className="text-[#747B8C] text-[18px] leading-[150%] max-w-[576px] text-left">
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
            </div>

             
    <div className="relative w-[1216px] h-[270px] bg-[#08090C] border-[rgba(255,255,255,0.08)] border-[1.5px] rounded-[24px] box-border mt-4 overflow-hidden">

      {/* Vetores de fundo */}
      <div className="absolute left-[71.3%] right-[3.82%] top-[-51.11%] bottom-[37.47%] bg-[rgba(255,255,255,0.08)] rotate-[-105deg]" />
      <div className="absolute left-[80.26%] right-[-5.15%] top-[23.7%] bottom-[-37.35%] bg-[rgba(255,255,255,0.08)] rotate-[-105deg]" />

      {/* Botão Esquerdo */}
      <div className="absolute left-[calc(50%-82px-482px)] top-[calc(50%-82px)] w-[164px] h-[164px] rounded-full border border-[rgba(255,255,255,0.06)] bg-gradient-to-br from-[#242631] to-[#04050B] shadow-[inset_0_4px_32px_rgba(255,255,255,0.04)] flex items-center justify-center">
        <div className="w-[82px] h-[79.8px] bg-[#1A5CFF]" />
      </div>

      {/* Botão Direita */}
      <div className="absolute left-[calc(50%-82px+487px)] z-10 top-[calc(50%-82px)] w-[164px] h-[164px] rounded-full border border-[rgba(255,255,255,0.06)] bg-gradient-to-br from-[#242631] to-[#04050B] shadow-[inset_0_4px_32px_rgba(255,255,255,0.04)] flex items-center justify-center">
        <Image
                        src={simboloAzul}
                        alt="Símbolo Azul"
                        width={82}
                        height={82}
                        className="object-contain"
                      />
      </div>

      {/* Faixa “Saiba Mais” */}
      <div className="absolute left-[44px] top-[52px] w-[1111px] h-[164px] rounded-full bg-gradient-to-r from-[#020308] via-[#0D225D] to-[#1A5CFF] flex items-center justify-center">
        <span className="text-[#D3E0FF] font-normal text-[56px] tracking-tight leading-[100%]">
          Saiba mais
        </span>
      </div>

      {/* Ícone */}
      <div className="absolute left-[1054px] top-[177px] w-[73px] h-[73px]">
        <div className="relative w-[39px] h-[35.21px] bg-white border-[2.28px] border-black mx-auto drop-shadow-[0_3.04px_2.43px_rgba(0,0,0,0.5)]">
          <div className="absolute w-[2.34px] h-[12.77px] bg-black left-[calc(50%+9.77px)] top-[calc(50%+2.85px)]" />
          <div className="absolute w-[2.34px] h-[12.77px] bg-black left-[calc(50%+3.71px)] top-[calc(50%+2.85px)]" />
          <div className="absolute w-[2.34px] h-[12.77px] bg-black left-[calc(50%-2.37px)] top-[calc(50%+2.85px)]" />
        </div>
      </div>
    </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-background">
                      <div className="flex justify-center">
              <span className="inline-block px-2.5 py-1.5 mb-6 border border-[#161a24] bg-[#161a24] rounded-full text-sm text-[#D3E0FF] font-normal tracking-wide text-center">
                FAQ
              </span>
            </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl md:text-6xl font-normal text-center font-headline
             bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#2D5ACA]/80
             text-transparent bg-clip-text"
            >
              Perguntas Frequentes
            </h2>
<Accordion
  type="single"
  collapsible
  className="w-full max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-x-8 gap-y-4"
>
  {faqItems.map((item, index) => (
    <AccordionItem
      key={index}
      value={`item-${index}`}
      className="rounded-xl border border-[#141417] bg-[#141417] px-6 py-4 transition-colors duration-300 hover:border-[rgba(255,255,255,0.15)]"
    >
      {/* Cabeçalho: texto + ícone fixo */}
      <div className="flex items-center justify-between">
        <AccordionTrigger className="flex-1 text-left text-sm md:text-base text-gray-200 font-medium hover:no-underline focus:outline-none">
          {item.question}
        </AccordionTrigger>

        <div className="ml-4 flex items-center justify-center bg-[#090a0d] border border-[#090a0d] rounded-lg p-2">
          <Image
                        src={simboloAzul}
                        alt="Símbolo Azul"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
        </div>
      </div>

      {/* Conteúdo expandido */}
      <AccordionContent className="text-muted-foreground text-sm mt-3 text-gray-400 leading-relaxed pl-1 pr-2">
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
