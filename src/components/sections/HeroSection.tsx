import { Facebook, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container relative z-10 px-6 py-24 text-center">
        <div className="animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-medical-white/90 font-medium">Emergency Healthcare Service</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-medical-white mb-6 leading-tight">
            SarthiX
            <span className="block text-gradient">Nearest Ambulance</span>
          </h1>
          
          {/* Nepali Tagline */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-medical-white/80 font-display mb-8">
            छिटो • सस्तो • सजिलो
          </p>
          
          <p className="text-lg md:text-xl text-medical-white/60 max-w-2xl mx-auto mb-12">
            Community-powered ambulance service connecting patients with nearby ambulances returning to their area. Faster, affordable, and dignified emergency transport.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.facebook.com/share/g/16rqMqLes6/"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass hover:bg-primary/30 px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover-lift glow-red"
            >
              <Users className="w-6 h-6 text-primary" />
              <span className="text-medical-white font-semibold text-lg">Join Facebook Group</span>
            </a>
            
            <a
              href="https://www.facebook.com/profile.php?id=61584035744102&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass hover:bg-blue-500/30 px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover-lift"
            >
              <Facebook className="w-6 h-6 text-blue-400" />
              <span className="text-medical-white font-semibold text-lg">Follow Facebook Page</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sarthix-dark to-transparent" />
    </section>
  );
};

export default HeroSection;
