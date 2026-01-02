import { ArrowRight, Fuel, Heart, Users, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: Fuel,
    title: "No Empty Returns",
    description: "Drivers utilize return trips instead of going back empty",
  },
  {
    icon: Heart,
    title: "Affordable Transport",
    description: "Reduced costs through community resource sharing",
  },
  {
    icon: Users,
    title: "Community Powered",
    description: "A network of caring individuals helping each other",
  },
  {
    icon: Smartphone,
    title: "No App Needed",
    description: "Works entirely through Facebook - no downloads required",
  },
];

const WhySarthixSection = () => {
  return (
    <section className="relative py-24 bg-sarthix-dark overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-medical-white mb-6 leading-tight">
              Premium Emergency Care,
              <span className="block text-gradient">Community Driven</span>
            </h2>
            <p className="text-medical-white/60 text-lg mb-8 leading-relaxed">
              SarthiX revolutionizes emergency transport by connecting patients with ambulance drivers on their return routes. This innovative approach benefits everyone – patients get faster, affordable service, and drivers earn on trips that would otherwise be empty.
            </p>
            
            <a
              href="https://www.facebook.com/share/g/16rqMqLes6/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
            >
              Join the Community
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          {/* Right - Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-medical-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-medical-white/60 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySarthixSection;
