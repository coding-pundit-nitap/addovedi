"use client";
import { motion } from "framer-motion";
import { Orbitron, Rajdhani } from "next/font/google";
import Image from "next/image";
import React from "react";

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

import Link from "next/link";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Sponsor Data
type Sponsor = {
  name: string;
  tier: string;
  color: string;
  logo: string;
  className?: string;
};

const sponsors = {
  musicStreaming: [
    {
      name: "jio saavn",
      tier: "Official Music Streaming Partner",
      color: "text-[#0ae3e7]",
      logo: "/sponers-logo/JioSaavn.png",
      className: "h-20 w-full",
    },
  ],
  hackathon: [
    {
      name: "Unstop",
      tier: "Hackathon Partner",
      color: "text-[#9430e1]",
      logo: "/sponers-logo/Unstop.png",
      className: "h-20 w-full",
    },
  ],
  beverage: [
    {
      name: "Coca Cola",
      tier: "Beverage Partner",
      color: "text-[#1c28ae]",
      logo: "/sponers-logo/cocacola.png",
      className: "h-20 w-full",
    },
  ],
  waterFilter: [
    {
      name: "Urban Water Filter",
      tier: "Water Filter Event Sponsor",
      color: "text-[#03edf9]",
      logo: "/sponers-logo/urbanwater .jpg",
      className: "h-20 w-full",
    },
  ],
  hospitality: [
    {
      name: "todo hotel",
      tier: "Hospitality Partner",
      color: "text-[#cf1cb1]",
      logo: "/sponers-logo/todohotel.png",
      className: "h-20 w-full",
    },
  ],
  media: [
    {
      name: "echo of arunachal",
      tier: "Media Partner",
      color: "text-[#4facfe]",
      logo: "/sponers-logo/echo.jpeg",
      className: "h-20 w-full",
    },
  ],
};

export default function SponsorsPage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-[#0c0d11] text-[#fcfcfc] font-rajdhani">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }}
        className="text-center mt-16 sm:mt-20 max-w-5xl mx-auto"
      >
        <h1
          className={`${orbitron.className} font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#491f6d] via-[#c937d6] to-[#4facfe] bg-clip-text text-transparent animate-gradient-x`}
        >
          Our Proud Sponsors
        </h1>
        <p
          className={`${rajdhani2.className} mt-4 text-base sm:text-lg lg:text-xl text-[#9a9a9c] px-4`}
        >
          We extend our heartfelt gratitude to these visionary organizations who
          make Addovedi Tech Fest possible. Their support drives innovation and
          empowers the next generation of tech leaders.
        </p>

        <div className="mx-auto mt-4 h-[2px] w-16 sm:w-24 bg-gradient-to-r from-[#4facfe] via-[#c937d6] to-[#5104ea]" />

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 lg:gap-12 mt-8">
          <Stat1 number="5+" label="Innovative Partners" />
          <Stat2 number="3OOO+" label="Tech Enthusiasts" />
          <Stat3 number="₹4L+" label="Prize Pool" />
        </div>
      </motion.div>

      {/* Sponsors Sections */}
      <SponsorSection
        title="Official Music Streaming Partner"
        list={sponsors.musicStreaming}
        accentColor="border-[#16d6e7]"
      />

      <SponsorSection
        title="Hackathon Partner"
        list={sponsors.hackathon}
        accentColor="border-[#9430e1]"
      />
      <SponsorSection
        title="Beverage Partner"
        list={sponsors.beverage}
        accentColor="border-[#1c28ae]"
      />
      <SponsorSection
        title="Water Filter Event Sponsor"
        list={sponsors.waterFilter}
        accentColor="border-[#03edf9]"
      />
      <SponsorSection
        title="Hospitality Partner"
        list={sponsors.hospitality}
        accentColor="border-[#cf1cb1]"
      />
      <SponsorSection
        title="Media Partner"
        list={sponsors.media}
        accentColor="border-[#4facfe]"
      />

      {/* Call To Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }}
        whileHover={{ y: -8, opacity: 0.95, scale: 1.02 }}
        className="mt-16 sm:mt-20 max-w-4xl mx-auto rounded-2xl p-6 sm:p-8 lg:p-10 text-center bg-[#131315] shadow-[0_0_20px_#0ae3e7]"
      >
        <h2 className="font-orbitron text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-[#491f6d] via-[#c937d6] to-[#4facfe] bg-clip-text text-transparent animate-gradient-x">
          Become a Sponsor
        </h2>
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#9a9a9c] px-2">
          Join these incredible companies in shaping the future of technology.
          Partner with us to reach thousands of brilliant minds and showcase
          your brand at the premier tech event.
        </p>
        <motion.div
          whileHover={{ y: -5, opacity: 0.95, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex flex-col items-center"
        >
          <div className="mt-6 sm:mt-8 p-4 rounded-lg bg-[#1a1a1d] w-full max-w-sm">
            <p className="text-xs sm:text-sm text-[#9a9a9c]">
              Ready to partner with us?
            </p>
            <Link
              href={`mailto:addovedi@nitap.ac.in`}
              className="text-sm sm:text-base text-[#09e6ee] font-medium break-all"
            >
              addovedi@nitap.ac.in
            </Link>
            <p className="text-xs sm:text-sm text-[#9a9a9c] font-medium">
              Our partnership Team will respond within 24 hours
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Stats Component with motion
function Stat1({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, opacity: 0.9, scale: 1.05 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      viewport={{ amount: 0.2 }}
      className="text-center"
    >
      <p className="font-orbitron text-2xl sm:text-3xl lg:text-4xl text-[#0bf3f3]">
        {number}
      </p>
      <p className="text-sm sm:text-base text-[#9a9a9c] mt-1">{label}</p>
    </motion.div>
  );
}
function Stat2({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, opacity: 0.9, scale: 1.05 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      viewport={{ amount: 0.2 }}
      className="text-center"
    >
      <p className="font-orbitron text-2xl sm:text-3xl lg:text-4xl text-[#cf1cb1]">
        {number}
      </p>
      <p className="text-sm sm:text-base text-[#9a9a9c] mt-1">{label}</p>
    </motion.div>
  );
}
function Stat3({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, opacity: 0.9, scale: 1.05 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      viewport={{ amount: 0.2 }}
      className="text-center"
    >
      <p className="font-orbitron text-2xl sm:text-3xl lg:text-4xl text-[#102edb]">
        {number}
      </p>
      <p className="text-sm sm:text-base text-[#9a9a9c] mt-1">{label}</p>
    </motion.div>
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
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.2 }}
      className="mt-12 sm:mt-16 px-4"
    >
      <h2 className="font-orbitron text-xl sm:text-2xl lg:text-3xl text-center bg-gradient-to-r from-[#9430e1] via-[#c937d6] to-[#4facfe] bg-clip-text text-transparent animate-gradient-x mb-4 sm:mb-6">
        {title}
      </h2>
      <div className="mx-auto mt-3 sm:mt-4 mb-6 sm:mb-7 h-[2px] w-16 sm:w-24 bg-gradient-to-r from-[#03edf9] via-[#c937d6] to-[#5104ea]" />
      <div className="flex justify-center flex-wrap gap-4 sm:gap-6  max-w-7xl mx-auto">
        {list.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ y: -8, opacity: 0.9, scale: 1.03 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}
            viewport={{ amount: 0.2 }}
          >
            <Card
              className={`border ${accentColor} bg-[#0c0d11] text-center hover:shadow-lg hover:shadow-[#491f6d] md:w-md transition h-full`}
            >
              <CardHeader className=" w-full">
                <Image
                  src={s.logo}
                  alt={`${s.name} logo`}
                  width={100}
                  height={100}
                  className={cn(
                    "object-contain mx-auto rounded-md",
                    s?.className
                  )}
                />
              </CardHeader>
              <CardContent className="pt-0">
                <p className={`${s.color} text-xs sm:text-sm`}>{s.tier}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
