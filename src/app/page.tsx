import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Tools from "@/components/Tools";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PhishingTest from "@/components/PhishingTest";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
      <Navbar />
        <Hero />
        <Specialties />
        <Tools />
        <PhishingTest/>
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}
