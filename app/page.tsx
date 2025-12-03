import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import CoreFeatures from "@/components/CoreFeatures";
import Technology from "@/components/Technology";
import FileScanner from "@/components/FileScanner";
import EndpointAgent from "@/components/EndpointAgent";
import Dashboard from "@/components/Dashboard";
import Ecosystem from "@/components/Ecosystem";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <CoreFeatures />
      <Technology />
      <FileScanner />
      <EndpointAgent />
      <Dashboard />
      <Ecosystem />
      <Pricing />
      <Footer />
    </main>
  );
}
