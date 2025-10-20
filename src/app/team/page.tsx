import Image from "next/image";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { teamSections } from "@/data/team";

export const metadata = { title: "Our Team | Addovedi" };

export default function TeamPage() {
  return (
    <div id="team" className="min-h-screen px-4 py-24 relative overflow-hidden">
      {/* Themed background: gradient + radial neon glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Base vertical gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030610] via-[#0B1020] to-[#030610]" />
        {/* Cyan radial glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] rounded-full opacity-70 bg-[radial-gradient(circle_at_center,rgba(102,255,255,0.10),transparent_60%)] blur-3xl" />
        {/* Purple radial glow */}
        <div className="absolute bottom-[-20%] left-1/4 w-[70vw] h-[70vw] rounded-full opacity-60 bg-[radial-gradient(circle_at_center,rgba(179,102,255,0.10),transparent_60%)] blur-3xl" />
        {/* Accent scanline */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black">
            OUR
            <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
              TEAM
            </span>
          </h1>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {teamSections.map((section) => (
            <section key={section.key} className="relative">
              {/* Section header */}
              <div className="mb-6 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
                  <span className="mr-2" aria-hidden>
                    {section.emoji}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300">
                    {section.title}
                  </span>
                </h2>
              </div>

              {/* Members grid */}
              <div
                className={
                  section.key === "faculty_coordinator"
                    ? "grid grid-cols-[repeat(1,minmax(220px,220px))] sm:grid-cols-[repeat(2,minmax(220px,220px))] lg:grid-cols-[repeat(3,minmax(220px,220px))] justify-center gap-6"
                    : "grid grid-cols-[repeat(auto-fit,minmax(220px,220px))] justify-center gap-6"
                }
              >
                {section.members.map((m) => (
                  <Card
                    key={`${section.key}-${m.name}`}
                    className="group h-full gap-0 bg-slate-900/50 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 text-center"
                  >
                    {/* Image box */}
                    <div className="relative w-full aspect-square overflow-hidden rounded-t-xl bg-slate-800/50">
                      {m.image ? (
                        <Image
                          src={m.image}
                          alt={m.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-5xl text-slate-400">
                          {m.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    {/* Name only */}
                    <CardHeader className="px-4 sm:px-6 py-4 text-center">
                      <CardTitle className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#66FFFF] to-[#B366FF]">
                        {m.name}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
