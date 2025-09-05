// Mock sponsor data - replace with actual sponsor logos
const sponsors = [
  { id: 1, name: "TechCorp", category: "Platinum" },
  { id: 2, name: "InnovateX", category: "Gold" },
  { id: 3, name: "CodeFlow", category: "Gold" },
  { id: 4, name: "DataVision", category: "Silver" },
  { id: 5, name: "CloudTech", category: "Silver" },
  { id: 6, name: "NextGen", category: "Silver" },
  { id: 7, name: "AI Solutions", category: "Bronze" },
  { id: 8, name: "WebCraft", category: "Bronze" },
];

export function SponsorsSection() {
  return (
    <section
      className="py-20 px-4 relative"
      style={{ backgroundColor: "#1a1a2e" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-16 grid-rows-8 h-full w-full">
          {Array.from({ length: 128 }).map((_, i) => (
            <div key={i} className="border border-[#64FFDA]/20" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="mb-4 relative inline-block"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "700",
              background: "linear-gradient(45deg, #64FFDA, #FF00FF)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Our Sponsors
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#64FFDA] to-[#FF00FF]" />
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Proudly supported by industry leaders who believe in innovation and
            technology
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {sponsors.map((sponsor, index) => (
            <div key={sponsor.id} className="group relative">
              <div className="relative bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-8 h-32 flex items-center justify-center group-hover:border-[#64FFDA]/50 transition-all duration-300">
                {/* Mock Logo */}
                <div
                  className="text-center transform group-hover:scale-110 transition-transform duration-300"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                    color: "#ffffff60",
                  }}
                >
                  <div className="text-2xl mb-1">{sponsor.name}</div>
                  <div className="text-xs text-[#64FFDA]/60">
                    {sponsor.category}
                  </div>
                </div>

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at center, #64FFDA15, transparent 70%)",
                    boxShadow: "0 0 20px #64FFDA20",
                  }}
                />

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#64FFDA]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#FF00FF]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#FF00FF]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#64FFDA]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Sponsor CTA */}
        <div className="text-center">
          <p
            className="text-white/60 mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Want to partner with us?
          </p>
          <button
            className="relative px-6 py-3 border border-[#FF00FF] text-[#FF00FF] rounded-lg hover:bg-[#FF00FF] hover:text-white transition-all duration-300 group"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "500",
            }}
          >
            <span className="relative z-10">Become a Sponsor</span>
            <div className="absolute inset-0 bg-[#FF00FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}
