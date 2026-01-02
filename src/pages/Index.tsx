import HeroSection from "@/components/sections/HeroSection";
import QRSection from "@/components/sections/QRSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import WhySarthixSection from "@/components/sections/WhySarthixSection";
import DriversSection from "@/components/sections/DriversSection";
import TrustSection from "@/components/sections/TrustSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-sarthix-dark overflow-x-hidden">
      <HeroSection />
      <QRSection />
      <HowItWorksSection />
      <WhySarthixSection />
      <DriversSection />
      <TrustSection />
      <Footer />
    </main>
  );
};

export default Index;
