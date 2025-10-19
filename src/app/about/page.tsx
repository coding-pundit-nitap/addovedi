import Link from "next/link";

import RCParticles from "@/components/events/rcParticles";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = { title: "About | Addovedi" };

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#010308] text-[#F5F7FA]">
      <RCParticles primary="#66FFFF" secondary="#B366FF" density={0.8} />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 pt-20 pb-16">
        <section className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black">
            ABOUT
            <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-[#66FFFF] via-[#B366FF] to-[#6699FF]">
              ADDOVEDI
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto">
            Addovedi is the annual technology festival of NIT Arunachal Pradesh.
            This edition embraces an RC Racing theme—celebrating hands‑on engineering,
            control systems, and the thrill of speed.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-[#050A18] bg-[#02050C]/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-[#66FFFF]">What is Addovedi?</CardTitle>
            </CardHeader>
            <CardContent className="text-[#cbd5e1] text-sm leading-relaxed">
              Addovedi brings together students, innovators, and makers to build, compete, and learn.
              Expect a high‑energy mix of competitions, showcases, workshops, and community—powered by a neon, cyber‑racing aesthetic.
            </CardContent>
          </Card>

          <Card className="border-[#050A18] bg-[#02050C]/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-[#B366FF]">This Year’s Theme: RC</CardTitle>
            </CardHeader>
            <CardContent className="text-[#cbd5e1] text-sm leading-relaxed">
              From RC track design and vehicle tuning to electronics, wireless control, and strategy—
              the festival spotlights the full stack of RC engineering with accessible, competitive events.
            </CardContent>
          </Card>

          <Card className="border-[#050A18] bg-[#02050C]/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-[#6699FF]">Highlights</CardTitle>
            </CardHeader>
            <CardContent className="text-[#cbd5e1] text-sm leading-relaxed">
              <ul className="list-disc pl-5 space-y-1">
                <li>RC arena runs and race formats for all skill levels</li>
                <li>Hands‑on workshops and tech demos</li>
                <li>Showcases of student projects and innovation</li>
                <li>Meetups with builders, coders, and hobbyists</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#050A18] bg-[#02050C]/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-[#66FFFF]">Get Involved</CardTitle>
            </CardHeader>
            <CardContent className="text-[#cbd5e1] text-sm leading-relaxed">
              Join the races, volunteer with the crew, or support as a partner—there’s a pit lane for everyone.
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild className="bg-[#66FFFF] text-[#030610] hover:bg-[#66FFFF]/90 w-full sm:w-auto">
            <Link href="/register">Register Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#0B1224] bg-[#030610]/90 text-[#F5F7FA] hover:bg-[#66FFFF]/10 hover:text-[#66FFFF] hover:border-[#66FFFF]/60 hover:ring-2 hover:ring-[#66FFFF]/30 transition-colors duration-200 w-full sm:w-auto"
          >
            <Link href="/team">Meet the Team</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#0B1224] bg-[#030610]/90 text-[#F5F7FA] hover:bg-[#B366FF]/10 hover:text-[#B366FF] hover:border-[#B366FF]/60 hover:ring-2 hover:ring-[#B366FF]/30 transition-colors duration-200 w-full sm:w-auto"
          >
            <Link href="/sponsor">Become a Sponsor</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
