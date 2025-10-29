import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Tools from "@/components/Tools";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import PhishingTest from "@/components/PhishingTest";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Specialties />
        <Tools />
        {/* <PhishingTest /> */}
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}
