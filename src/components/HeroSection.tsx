import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A192F" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-60">
        <ImageWithFallback
          src="/HERO-IMG.png"
          alt="Futuristic background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A192F]/50 to-[#0A192F]"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-[#64FFDA]/20" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Title with Glitch Effect */}
        <h1
          className="mb-6 relative"
          style={{
            fontSize: "clamp(3rem, 8vw, 8rem)",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "700",
            background: "linear-gradient(45deg, #64FFDA, #FF00FF, #64FFDA)",
            backgroundSize: "300% 300%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 30px #64FFDA50",
          }}
        >
          <span
            style={{
              background: "linear-gradient(45deg, #64FFDA, #FF00FF, #64FFDA)",
              backgroundSize: "300% 300%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            addovedi
          </span>

          {/* Pulsating Lines */}
          <div className="absolute -top-4 -bottom-4 left-0 right-0 opacity-30">
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#64FFDA] to-transparent absolute top-0"></div>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF00FF] to-transparent absolute bottom-0"></div>
          </div>
        </h1>

        {/* Tagline */}
        <p
          className="mb-8 text-[#64FFDA] opacity-90"
          style={{
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "300",
            letterSpacing: "0.1em",
          }}
        >
          Innovate. Code. Conquer.
        </p>

        {/* Event Info */}
        <div className="mb-12 space-y-2">
          <p
            className="text-white/80 text-xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            March 15-17, 2025
          </p>
          <p
            className="text-[#FF00FF] text-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Virtual & In-Person
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <Button
            className="relative px-8 py-4 text-lg rounded-full border-2 border-[#64FFDA] bg-transparent text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all duration-300 group overflow-hidden"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "600" }}
          >
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-[#64FFDA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#64FFDA] rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
