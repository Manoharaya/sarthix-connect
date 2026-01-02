import qrCode from "@/assets/qr-code.png";

const QRSection = () => {
  return (
    <section className="relative py-24 gradient-dark overflow-hidden">
      {/* Ambient effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-lg mx-auto text-center">
          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-medical-white mb-4">
            Scan & Join SarthiX
            <span className="block text-gradient">Instantly</span>
          </h2>
          <p className="text-medical-white/60 mb-10 text-lg">
            Point your camera at this QR code to join our Facebook community instantly
          </p>
          
          {/* QR Card */}
          <a
            href="https://www.facebook.com/share/g/16rqMqLes6/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="glass-card p-8 rounded-3xl glow-red animate-pulse-glow hover:scale-105 transition-transform duration-500 cursor-pointer">
              <div className="bg-medical-white p-4 rounded-2xl">
                <img
                  src={qrCode}
                  alt="Scan to join SarthiX Facebook Group"
                  className="w-64 h-64 md:w-72 md:h-72 object-contain"
                />
              </div>
              <p className="text-medical-white/80 mt-6 font-medium">
                Tap or Scan to Join
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default QRSection;
