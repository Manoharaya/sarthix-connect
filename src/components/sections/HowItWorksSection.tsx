import { MapPin, Route, Sparkles, Ambulance } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Post Location",
    description: "Patient posts their location and destination in the Facebook group",
  },
  {
    icon: Route,
    title: "Driver Posts Route",
    description: "Ambulance driver posts their empty return route availability",
  },
  {
    icon: Sparkles,
    title: "Smart Match",
    description: "Community connects patients with drivers heading the same way",
  },
  {
    icon: Ambulance,
    title: "Faster Service",
    description: "Get affordable ambulance service with minimal wait time",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-24 gradient-dark overflow-hidden">
      <div className="container relative z-10 px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Simple Process
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-medical-white mb-4">
            How SarthiX Works
          </h2>
          <p className="text-medical-white/60 max-w-2xl mx-auto text-lg">
            A community-driven approach to emergency healthcare transport
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover-lift group cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="text-6xl font-display font-bold text-primary/20 mb-4">
                {String(index + 1).padStart(2, "0")}
              </div>
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-medical-white mb-3">
                {step.title}
              </h3>
              <p className="text-medical-white/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
