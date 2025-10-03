"use client";
import { Orbitron, Rajdhani } from "next/font/google";
import React from "react";
const rajdhani1 = Rajdhani({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rajdhani",
});
const rajdhani2 = Rajdhani({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-rajdhani",
});
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-orbitron",
});

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sponsor Data
type Sponsor = {
  name: string;
  tier: string;
  color: string;
};

const sponsors = {
  platinum: [
    { name: "TechCorp", tier: "Platinum Sponsor", color: "text-[#0ae3e7]" },
    { name: "NeuralSync", tier: "Platinum Sponsor", color: "text-[#0ae3e7]" },
  ],
  gold: [
    { name: "CloudForge", tier: "Gold Sponsor", color: "text-[#9430e1]" },
    { name: "SecureNet", tier: "Gold Sponsor", color: "text-[#9430e1]" },
  ],
  silver: [
    { name: "QuantumPay", tier: "Silver Sponsor", color: "text-[#1c28ae]" },
    { name: "CodeCraft", tier: "Silver Sponsor", color: "text-[#1c28ae]" },
  ],
};

export default function SponsorsPage() {
  return (
    <div className="min-h-screen px-6 py-16 bg-[#0c0d11] text-[#fcfcfc] font-rajdhani">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1
          className={`${orbitron.className} font-orbitron text-4xl font-bold bg-gradient-to-r from-[#491f6d] via-[#c937d6] to-[#4facfe] bg-clip-text text-transparent animate-gradient-x`}
        >
          Our Proud Sponsors
        </h1>
        <p className={`${rajdhani2.className} mt-4 text-lg text-[#9a9a9c]`}>
          We extend our heartfelt gratitude to these visionary organizations who
          make Addovedi Tech Fest possible. Their support drives innovation and
          empowers the next generation of tech leaders.
        </p>

        <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-[#4facfe] via-[#c937d6] to-[#5104ea]" />

        <div className="flex justify-center gap-12 mt-8">
          <Stat1 number="5O+" label="Innovative Partners" />
          <Stat2 number="5OOO+" label="Tech Enthusiasts" />
          <Stat3 number="₹1OL+" label="Prize Pool" />
        </div>
      </div>
      <p className="text-[#1c28ae]"></p>
      {/* Sponsors Sections */}
      <SponsorSection
        title="Platinum Partners"
        list={sponsors.platinum}
        accentColor="border-[#16d6e7]"
      />

      <SponsorSection
        title="Gold Collaborators"
        list={sponsors.gold}
        accentColor="border-[#9430e1]"
      />
      <SponsorSection
        title="Silver Supporters"
        list={sponsors.silver}
        accentColor="border-[#1c28ae]"
      />

      {/* Call To Action */}
      <div className="mt-20 max-w-6xl mx-auto rounded-2xl p-10 text-center bg-[#131315] shadow-[0_0_20px_#0ae3e7]">
        <h2 className="font-orbitron text-2xl bg-gradient-to-r from-[#491f6d] via-[#c937d6] to-[#4facfe] bg-clip-text text-transparent animate-gradient-x`">
          Become a Sponsor
        </h2>
        <p className="mt-4 text-[#9a9a9c]">
          Join these incredible companies in shaping the future of technology.
          Partner with us to reach thousands of brilliant minds and showcase
          your brand at the premier tech event.
        </p>
        <div className="flex flex-col">
          <Button className="sm:max-w-96 sm:ml-28 md:ml-85 mt-6 h-13 bg-[#602ede] hover:bg-[#9430e1] text-black font-orbitron px-6 py-3 rounded-md text-lg bg-gradient-to-r from-[#05a3e6] via-[#c937d6] to-[#0318fa]">
            Explore Partnership Opportunities
          </Button>
          {/* <p className="mt-6 text-sm text-[#9a9a9c]">Ready to partner with us?</p>
        <p className="text-[#9430e1] font-medium">addovedi@nitap.ac.in</p> */}
          <div className="mt-8 p-4 rounded-lg bg-[#1a1a1d] inline-block ">
            <p className="text-sm text-[#9a9a9c]">Ready to partner with us?</p>
            <p className="text-[#09e6ee] font-medium">addovedi@nitap.ac.in</p>
            <p className="text-[#9a9a9c] font-medium">
              Our partnership Team will respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Stats Component
function Stat1({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="font-orbitron text-3xl text-[#0bf3f3]">{number}</p>
      <p className="text-[#9a9a9c]">{label}</p>
    </div>
  );
}
function Stat2({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="font-orbitron text-3xl text-[#cf1cb1]">{number}</p>
      <p className="text-[#9a9a9c]">{label}</p>
    </div>
  );
}
function Stat3({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="font-orbitron text-3xl text-[#102edb]">{number}</p>
      <p className="text-[#9a9a9c]">{label}</p>
    </div>
  );
}

// Sponsor Section Component
function SponsorSection({
  title,
  list,
  accentColor,
}: {
  title: string;
  list: Sponsor[];
  accentColor: string;
}) {
  return (
    <section className="mt-16">
      <h2 className="font-orbitron text-2xl text-center bg-gradient-to-r from-[#9430e1] via-[#c937d6] to-[#4facfe] bg-clip-text text-transparent animate-gradient-x mb-6">
        {title}
      </h2>
      <div className="mx-auto mt-4 mb-7 h-[2px] w-24 bg-gradient-to-r from-[#03edf9] via-[#c937d6] to-[#5104ea]" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {list.map((s, i) => (
          <Card
            key={i}
            className={`border ${accentColor} bg-[#0c0d11] text-center hover:shadow-lg hover:shadow-[#491f6d] transition`}
          >
            <CardHeader>
              {/* <CardTitle className="font-orbitron text-xl text-[#0bf3f3]">{s.name}</CardTitle> */}
              <div className="w-20 h-20 bg-white mx-auto rounded-md mb-4" />
              <p className="text-white ">{s.name}</p>
            </CardHeader>
            <CardContent>
              <p className={`${s.color}`}>{s.tier}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

// function page() {
//   return (
//     <>
//     <div>SPONSOR PAGE</div>
//     <div className={`${rajdhani.className} text-white` }>Our Proude Sponser</div>
//     <div className='border bg-red-500'>hy</div>
//       </>
//   )
// }

// export default page
