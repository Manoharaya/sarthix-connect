import { Facebook, Users, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 bg-sarthix-dark border-t border-medical-white/10">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-bold text-medical-white mb-2">
              SarthiX
            </h3>
            <p className="text-primary font-medium mb-4">Nearest Ambulance</p>
            <p className="text-medical-white/60">
              Community-Driven Emergency Connectivity
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://www.facebook.com/share/g/16rqMqLes6/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-primary/20 transition-all duration-300"
            >
              <Users className="w-5 h-5 text-primary" />
              <span className="text-medical-white font-medium">Facebook Group</span>
            </a>
            
            <a
              href="https://www.facebook.com/profile.php?id=61584035744102&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-blue-500/20 transition-all duration-300"
            >
              <Facebook className="w-5 h-5 text-blue-400" />
              <span className="text-medical-white font-medium">Facebook Page</span>
            </a>
          </div>
          
          {/* Bottom */}
          <div className="border-t border-medical-white/10 pt-8 text-center">
            <p className="text-medical-white/40 text-sm flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-primary" /> for Nepal
            </p>
            <p className="text-medical-white/30 text-xs mt-2">
              © {new Date().getFullYear()} SarthiX. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
