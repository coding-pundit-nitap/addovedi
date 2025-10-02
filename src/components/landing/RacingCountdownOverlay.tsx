"use client";

import { useEffect, useState } from "react";

export default function RacingCountdownOverlay({
  onCountdownComplete,
}: {
  onCountdownComplete: () => void;
}) {
  const [count, setCount] = useState(3);
  const [isVisible, setIsVisible] = useState(true);
  const [showGo, setShowGo] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setShowGo(true);
          setTimeout(() => {
            setIsVisible(false);
            onCountdownComplete();
          }, 800);
          return 0;
        }
        return prev - 1;
      });
    }, 800);

    return () => clearInterval(countdown);
  }, [onCountdownComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-sm flex items-center justify-center">
      <div className="text-center">
        {!showGo ? (
          <div className="relative">
            {/* Racing lights background */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <div
                className={`w-8 h-8 rounded-full ${count <= 3 ? "bg-red-500 shadow-lg shadow-red-500/50" : "bg-gray-700"} transition-all duration-300`}
              />
              <div
                className={`w-8 h-8 rounded-full ${count <= 2 ? "bg-yellow-400 shadow-lg shadow-yellow-400/50" : "bg-gray-700"} transition-all duration-300`}
              />
              <div
                className={`w-8 h-8 rounded-full ${count <= 1 ? "bg-green-500 shadow-lg shadow-green-500/50" : "bg-gray-700"} transition-all duration-300`}
              />
            </div>

            {/* Countdown number */}
            <div className="text-9xl sm:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 animate-pulse transform transition-all duration-300 hover:scale-110">
              {count}
            </div>

            {/* Racing elements */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-2xl animate-bounce">
              🏁 🏎️ 🏁
            </div>
          </div>
        ) : (
          <div className="relative">
            {/* Green lights */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <div className="w-8 h-8 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-ping" />
              <div
                className="w-8 h-8 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-ping"
                style={{ animationDelay: "0.1s" }}
              />
              <div
                className="w-8 h-8 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-ping"
                style={{ animationDelay: "0.2s" }}
              />
            </div>

            {/* GO text */}
            <div className="text-8xl sm:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 animate-bounce">
              GO!
            </div>

            {/* Checkered flag */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-4xl animate-wave">
              🏁
            </div>
          </div>
        )}
      </div>

      {/* Speed lines effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-40"
            style={{
              top: `${10 + i * 7}%`,
              left: "-200px",
              width: "400px",
              animation: `speedLine ${0.5 + i * 0.1}s linear infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes speedLine {
          0% {
            transform: translateX(-400px);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(calc(100vw + 400px));
            opacity: 0;
          }
        }

        @keyframes wave {
          0%,
          100% {
            transform: translateY(0) rotate(-5deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .animate-wave {
          animation: wave 0.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
