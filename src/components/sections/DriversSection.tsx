import { Users, Fuel, Clock, Award } from "lucide-react";

const driverBenefits = [
  { icon: Fuel, text: "Earn on return trips" },
  { icon: Clock, text: "Save fuel & time" },
  { icon: Award, text: "Serve society with dignity" },
];

const DriversSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-sarthix-dark via-primary/10 to-sarthix-dark">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[200px]" />
      </div>
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
            <span className="text-sm text-medical-white/90 font-medium">👨‍✈️ For Ambulance Drivers</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold text-medical-white mb-6">
            Turn Empty Returns Into
            <span className="block text-gradient">Earning Opportunities</span>
          </h2>
          
          <p className="text-medical-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Join Nepal's first community platform for ambulance drivers. Make your return trips profitable while serving those in need.
          </p>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {driverBenefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card px-6 py-4 rounded-xl flex items-center gap-3"
              >
                <benefit.icon className="w-6 h-6 text-primary" />
                <span className="text-medical-white font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <a
            href="https://www.facebook.com/share/g/16rqMqLes6/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 px-10 py-5 rounded-xl transition-all duration-300 hover-lift glow-red"
          >
            <Users className="w-6 h-6 text-primary-foreground" />
            <span className="text-primary-foreground font-bold text-lg">
              Drivers – Join Facebook Group
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DriversSection;
