import { Heart, Shield, Users } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="relative py-24 gradient-dark overflow-hidden">
      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-medical-white mb-4">
            Community-Driven
            <span className="block text-gradient">Emergency Support</span>
          </h2>
          <p className="text-medical-white/60 max-w-2xl mx-auto text-lg">
            Built on trust, powered by compassion. Join thousands of caring individuals making emergency healthcare accessible.
          </p>
        </div>
        
        {/* Trust indicators */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl text-center hover-lift">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-medical-white mb-2">
              Compassionate Care
            </h3>
            <p className="text-medical-white/60">
              Every member is committed to helping others in their time of need
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl text-center hover-lift">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-medical-white mb-2">
              Verified Drivers
            </h3>
            <p className="text-medical-white/60">
              Community-vetted ambulance drivers you can trust
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl text-center hover-lift">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-medical-white mb-2">
              Growing Network
            </h3>
            <p className="text-medical-white/60">
              An expanding community across Nepal ready to help
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
