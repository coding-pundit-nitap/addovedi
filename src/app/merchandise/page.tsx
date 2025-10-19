"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function MerchandisePage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const inr = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  const items = [
    {
      id: 1,
      type: "T-Shirt",
      name: "ADDOVEDI T-Shirt - Black",
      basePrice: 350,
      image: "/merch/black.jpg",
    },
    {
      id: 2,
      type: "T-Shirt",
      name: "ADDOVEDI T-Shirt - White",
      basePrice: 350,
      image: "/merch/white.jpg",
    },
    {
      id: 3,
      type: "Hoodie",
      name: "ADDOVEDI Hoodie Alpha",
      basePrice: 650,
      image: "/merch/General.png",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".merch-hero",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }
      );

      gsap.fromTo(
        ".merch-card",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".grid",
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-dvh overflow-x-clip">
      {/* Background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(100%_60%_at_50%_0%,#0E0A15_0%,#0A0C0F_55%,#0A0C0F_100%)]"
      />

      <section className="merch-hero mx-auto max-w-6xl px-6 pt-20 pb-10 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          style={{
            fontFamily: "var(--font-orbitron), Orbitron, sans-serif",
            background:
              "linear-gradient(90deg, #B366FF, #33FFFF, #FF33FF, #5C9FFF, #B366FF)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            filter: "drop-shadow(0 0 10px rgba(179,102,255,0.25))",
          }}
        >
          Addovedi Merchandise
        </h1>
        <p
          className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
          style={{
            color: "#9FAFBD",
            fontFamily: "var(--font-rajdhani), Rajdhani, system-ui",
          }}
        >
          Tech-fest inspired gear. Neon aesthetics. Minimal noise. Pure vibe.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article
              key={item.id}
              className="merch-card group relative rounded-xl border p-4 transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(92,159,255,0.15)]"
              style={{
                backgroundColor: "#151719",
                borderColor: "#2B2F36",
              }}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                {/* Fake product image */}
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div
                    className="h-full w-full neon-animated-bg flex items-center justify-center"
                    style={{
                      border: "1px solid #2B2F36",
                      backgroundSize: "200% 200%",
                    }}
                  >
                    <div className="text-center">
                      {item.type === "Hoodie" ? (
                        <svg
                          width="80"
                          height="80"
                          viewBox="0 0 100 100"
                          className="mx-auto mb-2"
                        >
                          <defs>
                            <linearGradient
                              id={`hoodieGrad${item.id}`}
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#B366FF" />
                              <stop offset="50%" stopColor="#33FFFF" />
                              <stop offset="100%" stopColor="#FF33FF" />
                            </linearGradient>
                          </defs>
                          {/* Hoodie body */}
                          <rect
                            x="20"
                            y="30"
                            width="60"
                            height="50"
                            rx="8"
                            fill={`url(#hoodieGrad${item.id})`}
                            opacity="0.8"
                          />
                          {/* Hood */}
                          <path
                            d="M25 30 Q50 15 75 30 L75 40 L25 40 Z"
                            fill={`url(#hoodieGrad${item.id})`}
                            opacity="0.6"
                          />
                          {/* Sleeves */}
                          <rect
                            x="15"
                            y="35"
                            width="12"
                            height="35"
                            rx="6"
                            fill={`url(#hoodieGrad${item.id})`}
                            opacity="0.7"
                          />
                          <rect
                            x="73"
                            y="35"
                            width="12"
                            height="35"
                            rx="6"
                            fill={`url(#hoodieGrad${item.id})`}
                            opacity="0.7"
                          />
                          {/* Addovedi text */}
                          <text
                            x="50"
                            y="60"
                            textAnchor="middle"
                            fontSize="8"
                            fill="#F7FAFD"
                            fontFamily="Orbitron"
                            fontWeight="bold"
                          >
                            ADDOVEDI
                          </text>
                        </svg>
                      ) : (
                        <svg
                          width="80"
                          height="80"
                          viewBox="0 0 100 100"
                          className="mx-auto mb-2"
                        >
                          <defs>
                            <linearGradient
                              id={`teeGrad${item.id}`}
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#5C9FFF" />
                              <stop offset="50%" stopColor="#B366FF" />
                              <stop offset="100%" stopColor="#33FFFF" />
                            </linearGradient>
                          </defs>
                          {/* T-shirt body */}
                          <rect
                            x="25"
                            y="35"
                            width="50"
                            height="45"
                            rx="6"
                            fill={`url(#teeGrad${item.id})`}
                            opacity="0.8"
                          />
                          {/* Sleeves */}
                          <rect
                            x="20"
                            y="40"
                            width="8"
                            height="25"
                            rx="4"
                            fill={`url(#teeGrad${item.id})`}
                            opacity="0.7"
                          />
                          <rect
                            x="72"
                            y="40"
                            width="8"
                            height="25"
                            rx="4"
                            fill={`url(#teeGrad${item.id})`}
                            opacity="0.7"
                          />
                          {/* Neck */}
                          <rect
                            x="40"
                            y="35"
                            width="20"
                            height="8"
                            rx="4"
                            fill="#151719"
                          />
                          {/* Addovedi text */}
                          <text
                            x="50"
                            y="65"
                            textAnchor="middle"
                            fontSize="7"
                            fill="#F7FAFD"
                            fontFamily="Orbitron"
                            fontWeight="bold"
                          >
                            ADDOVEDI
                          </text>
                        </svg>
                      )}
                      <div
                        className="text-xs font-medium"
                        style={{
                          color: "#9FAFBD",
                          fontFamily:
                            "var(--font-rajdhani), Rajdhani, system-ui",
                        }}
                      >
                        {item.type}
                      </div>
                    </div>
                  </div>
                )}

                {/* Hover neon outline */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow:
                      "inset 0 0 0 2px rgba(179,102,255,0.6), 0 0 24px rgba(92,159,255,0.35)",
                  }}
                />
              </div>

              <div className="mt-4">
                <h3
                  className="text-lg font-semibold tracking-wide"
                  style={{
                    color: "#F7FAFD",
                    fontFamily: "var(--font-orbitron), Orbitron, sans-serif",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  className="mt-1 text-sm"
                  style={{
                    color: "#9FAFBD",
                    fontFamily: "var(--font-rajdhani), Rajdhani, system-ui",
                  }}
                >
                  {item.type}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className="text-base font-medium"
                    style={{
                      color: "#B366FF",
                      fontFamily: "var(--font-rajdhani), Rajdhani, system-ui",
                    }}
                  >
                    {inr.format(item.basePrice)}
                  </span>
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://forms.gle/rKTr4df9omXnvbtF7")
                    }
                    className="rounded-md px-4 py-2 transition-colors duration-300 will-change-transform group-hover:translate-x-0.5 hover:brightness-110 cursor-pointer"
                    style={{
                      backgroundColor: "#B366FF",
                      color: "#0C0E12",
                      border: "1px solid #2B2F36",
                    }}
                  >
                    Buy now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* Floating neon accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-[-10%] h-64 w-64 rounded-full blur-3xl"
        style={{ background: "rgba(51,255,255,0.18)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-[-10%] h-72 w-72 rounded-full blur-3xl"
        style={{ background: "rgba(179,102,255,0.16)" }}
      />

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowComingSoon(false)}
          />

          {/* Modal */}
          <div
            className="relative max-w-md w-full rounded-2xl border p-8 text-center"
            style={{
              backgroundColor: "#151719",
              borderColor: "#2B2F36",
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(179,102,255,0.1)",
            }}
          >
            <div className="mb-6">
              <div
                className="mx-auto mb-4 h-16 w-16 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #B366FF, #33FFFF)",
                  boxShadow: "0 0 20px rgba(179,102,255,0.4)",
                }}
              >
                <span className="text-2xl">🚀</span>
              </div>

              <h2
                className="text-2xl font-bold mb-2"
                style={{
                  fontFamily: "var(--font-orbitron), Orbitron, sans-serif",
                  color: "#F7FAFD",
                }}
              >
                Coming Soon!
              </h2>

              <p
                className="text-sm"
                style={{
                  color: "#9FAFBD",
                  fontFamily: "var(--font-rajdhani), Rajdhani, system-ui",
                }}
              >
                We're working hard to bring you the best merchandise. Stay tuned
                for updates!
              </p>
            </div>

            <button
              onClick={() => setShowComingSoon(false)}
              className="w-full rounded-lg px-6 py-3 transition-all duration-300 hover:brightness-110 cursor-pointer"
              style={{
                backgroundColor: "#B366FF",
                color: "#0C0E12",
                fontFamily: "var(--font-rajdhani), Rajdhani, system-ui",
                fontWeight: "500",
              }}
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

<style jsx global>{`
  .neon-animated-bg {
    background-image:
      radial-gradient(
        120% 120% at 20% 20%,
        rgba(179, 102, 255, 0.25),
        transparent 60%
      ),
      radial-gradient(
        120% 120% at 80% 20%,
        rgba(51, 255, 255, 0.22),
        transparent 60%
      ),
      radial-gradient(
        120% 140% at 50% 80%,
        rgba(255, 51, 255, 0.2),
        transparent 60%
      ),
      linear-gradient(
        135deg,
        rgba(92, 159, 255, 0.2),
        rgba(179, 102, 255, 0.18)
      );
    animation: neonShift 6s ease-in-out infinite alternate;
  }
  @keyframes neonShift {
    0% {
      filter: hue-rotate(0deg) brightness(0.95);
      background-position: 0% 50%;
    }
    50% {
      filter: hue-rotate(20deg) brightness(1.05);
      background-position: 50% 50%;
    }
    100% {
      filter: hue-rotate(40deg) brightness(1.1);
      background-position: 100% 50%;
    }
  }
`}</style>;
