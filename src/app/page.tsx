import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProblemStatements from "@/components/ProblemStatements";
import Schedule from "@/components/Schedule";
import Prizes from "@/components/Prizes";
import Sponsors from "@/components/Sponsors";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ThreeScene from "@/components/ThreeScene";

export default function Home() {
  return (
    <main className="relative bg-background-dark min-h-screen">
      <ThreeScene />
      <Navbar />
      <Hero />
      <About />
      <ProblemStatements />
      <Schedule />
      <Prizes />
      <Sponsors />
      <RegistrationForm />
      <FAQ />
      <Footer />
    </main>
  );
}
