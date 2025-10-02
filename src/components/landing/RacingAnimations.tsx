"use client";

import { useEffect, useState } from "react";

// Racing countdown component
export function RacingCountdown() {
  const [count, setCount] = useState(3);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const countdown = setInterval(() => {
        setCount((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setTimeout(() => setIsVisible(false), 1000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm pointer-events-none">
      <div className="text-center">
        {count > 0 ? (
          <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 animate-pulse">
            {count}
          </div>
        ) : (
          <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 animate-bounce">
            GO! 🏁
          </div>
        )}
      </div>
    </div>
  );
}

// Speed lines effect
export function SpeedLines() {
  const [isClient, setIsClient] = useState(false);
  const [speedLines, setSpeedLines] = useState<
    Array<{
      id: number;
      top: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    setIsClient(true);

    // Generate deterministic values for speed lines
    const lines = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
    }));

    setSpeedLines(lines);
  }, []);

  if (!isClient) {
    return null; // Don't render on server
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {speedLines.map((line) => (
        <div
          key={line.id}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20"
          style={{
            top: `${line.top}%`,
            left: "-100px",
            width: "200px",
            animation: `speedLine ${line.duration}s linear infinite`,
            animationDelay: `${line.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes speedLine {
          0% {
            transform: translateX(-200px);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(calc(100vw + 200px));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

// Racing cursor trail
export function RacingCursor() {
  const [isClient, setIsClient] = useState(false);
  const [trail, setTrail] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      setTrail((prev) => {
        const newTrail = [
          ...prev,
          { x: e.clientX, y: e.clientY, id: Date.now() },
        ];
        return newTrail.slice(-8); // Keep only last 8 positions
      });
    };

    if (isClient) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isClient]);

  if (!isClient) {
    return null; // Don't render on server
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((pos, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: pos.x - 4,
            top: pos.y - 4,
            opacity: ((index + 1) / trail.length) * 0.5,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: "all 0.1s ease-out",
          }}
        />
      ))}
    </div>
  );
}

// Floating racing elements
export function FloatingElements() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Don't render on server
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating checkered flags */}
      <div
        className="absolute top-20 left-10 animate-bounce text-6xl opacity-10"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      >
        🏁
      </div>
      <div
        className="absolute top-40 right-20 animate-bounce text-4xl opacity-10"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      >
        🏎️
      </div>
      <div
        className="absolute bottom-32 left-1/4 animate-bounce text-5xl opacity-10"
        style={{ animationDelay: "2s", animationDuration: "3.5s" }}
      >
        🏆
      </div>
      <div
        className="absolute top-1/3 right-10 animate-bounce text-4xl opacity-10"
        style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
      >
        ⚡
      </div>
      <div
        className="absolute bottom-20 right-1/3 animate-bounce text-6xl opacity-10"
        style={{ animationDelay: "1.5s", animationDuration: "3s" }}
      >
        🚦
      </div>
    </div>
  );
}

// Racing progress bar
export function RacingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-black/50 z-40">
      <div
        className="h-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
      <div className="absolute top-0 right-4 text-white text-sm font-bold mt-4">
        {Math.round(progress)}% 🏁
      </div>
    </div>
  );
}

// Typing effect for racing text
export function RacingTypewriter({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [isClient, setIsClient] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, isClient]);

  if (!isClient) {
    return <span className={className}>{text}</span>; // Show full text on server
  }

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
