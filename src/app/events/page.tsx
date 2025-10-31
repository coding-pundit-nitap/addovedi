"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Route } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import RCParticles from "@/components/events/rcParticles";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { eventDetails } from "@/data/eventDetails";
import { timelineDays, type TimelineItem } from "@/data/timeline";

const DEFAULT_FEST_LINK =
  "https://unstop.com/college-fests/addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-405251";

const REGISTER_LINKS: Record<string, string> = {
  "nov7:Hackathon Kick-Start":
    "https://unstop.com/hackathons/hackdawn-national-institute-of-technology-arunachal-pradesh-1573112?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov7:Ideathon Kick-Start":
    "https://unstop.com/p/ideathon-addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-1576246?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov6:Verilog":
    "https://unstop.com/o/hv9OgxD?utm_medium=Share&utm_source=WhatsApp",
  "nov6:Rocket Aviation":
    "https://unstop.com/p/rocket-aviation-task-addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-1574899?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov6:Water Filter":
    "https://unstop.com/p/water-filter-addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-1574915?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov6:Minimalist Circuit Challenge":
    "https://unstop.com/p/minimalist-circuit-challenge-addovedi2025-national-institute-of-technology-arunachal-pradesh-1574881?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov6:BGMI Day 1":
    "https://unstop.com/p/bgmi-addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-1576284?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",

  "nov7:Hydraulic Arm":
    "https://unstop.com/p/hydraulic-arm-task-addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-1574902?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov7:Component Identification":
    "https://unstop.com/p/component-identification-addovedi2025-national-institute-of-technology-arunachal-pradesh-1574879?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov7:Mortal Combat":
    "https://unstop.com/p/mortal-kombat-addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-1576280?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov7:Maze Follower":
    "https://unstop.com/competitions/maze-follower-robot-addovedi2025-national-institute-of-technology-arunachal-pradesh-1574892?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov7:Assembly Disassembly":
    "https://unstop.com/p/assembly-disassembly-addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-1574901?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov7:Valorant":
    "https://unstop.com/p/valorant-addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-1576282?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov7:RC Racing":
    "https://unstop.com/p/rc-rush-radio-controlled-car-racing-challenge-addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-1574895?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov8:Ideathon Conclusion":
    "https://unstop.com/p/ideathon-addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-1576246?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov8:Hackathon Conclusion":
    "https://unstop.com/hackathons/hackdawn-national-institute-of-technology-arunachal-pradesh-1573112?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov7:Science Exhibition": "/science-exhibition",
  "nov8:Bridge Making ":
    "https://unstop.com/p/bridge-making-addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-1575645?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov8:Circuit Debugging":
    "https://unstop.com/p/circuit-debugging-addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-1574877?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov8:Code2Game":
    "https://unstop.com/p/code2game-addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-1576274?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov8:Robo War":
    "https://unstop.com/p/robo-war-addovedi2025-national-institute-of-technology-arunachal-pradesh-1574893?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov8:BGMI Day 2":
    "https://unstop.com/p/bgmi-addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-1576284?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov8:Line Follower":
    "https://unstop.com/p/line-follower-challenge-addovedi2025-national-institute-of-technology-arunachal-pradesh-1574888?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov8:Codathon":
    "https://unstop.com/p/codathon-addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-1576269?lb=9FweNlVe&utm_medium=Share&utm_source=WhatsApp",
  "nov8:MLBB":
    "https://docs.google.com/forms/d/e/1FAIpQLSd4rLmgPJ2tC71wn6QiDr3uWQZtcTMReIIJ15mtyJ35gAECgw/viewform?usp=header",
};

const HIDE_REGISTER = new Set<string>([
  "nov6:Inauguration",
  "nov8:Day 2 Spokesperson Session",
  "nov8:Music Club",
]);

const HIDE_VIEW_MORE = new Set<string>([
  "nov6:Inauguration",
  "nov8:Day 2 Spokesperson Session",
  "nov8:Music Club",
]);

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "500"] });

export default function EventsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [activeKey, setActiveKey] = useState<"nov6" | "nov7" | "nov8">("nov6");
  const activeDay = timelineDays.find((d) => d.key === activeKey)!;
  const neonTheme =
    activeKey === "nov6"
      ? { primary: "#66FFFF", secondary: "#B366FF" }
      : activeKey === "nov7"
        ? { primary: "#6699FF", secondary: "#B366FF" }
        : { primary: "#66CCFF", secondary: "#FF66FF" };

  // Details modal state
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const selectedDetails = selectedKey ? eventDetails[selectedKey] : undefined;
  const selectedTitle = selectedKey ? selectedKey.split(":")[1] : "";

  const selectedRegisterHref = selectedKey
    ? (REGISTER_LINKS[selectedKey] ?? DEFAULT_FEST_LINK)
    : DEFAULT_FEST_LINK;
  const selectedHideRegister = selectedKey
    ? HIDE_REGISTER.has(selectedKey)
    : false;

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("hide-scrollbar");
    return () => {
      html.classList.remove("hide-scrollbar");
    };
  }, []);

  // 3D tilt handlers for cards
  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = gsap.utils.mapRange(0, rect.width, -10, 10, x);
    const rotateX = gsap.utils.mapRange(0, rect.height, 10, -10, y);
    gsap.to(el, {
      rotateX,
      rotateY,
      scale: 1.02,
      transformPerspective: 800,
      transformOrigin: "center",
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement;
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>(".timeline-item");

        items.forEach((el) => {
          const direction = el.dataset.side === "left" ? -80 : 80;
          gsap.fromTo(
            el,
            { opacity: 0, x: direction },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        gsap.fromTo(
          ".timeline-progress",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          }
        );
      }, containerRef);

      return () => ctx.revert();
    }, 100); // 100ms delay is usually enough for the DOM to settle

    return () => clearTimeout(timer);
  }, [activeKey]);

  return (
    <main
      ref={containerRef}
      className={`${rajdhani.className} relative min-h-screen w-full overflow-x-hidden bg-[#010308] text-[#F5F7FA]`}
    >
      {/* RC-themed particles background */}
      <RCParticles
        primary={neonTheme.primary}
        secondary={neonTheme.secondary}
        density={1}
      />

      <div className="relative z-10">
        {/* Header */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-16 sm:pt-20 pb-6 sm:pb-10 text-center">
          <h1
            className={`${orbitron.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-[#66FFFF]`}
          >
            EVENT TIMELINE
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#708399]">
            Throttle up your curiosity — the race for innovation begins.
          </p>
        </section>

        {/* Timeline container */}
        <section
          key={activeKey}
          className="relative mx-auto max-w-5xl px-4 sm:px-6 pb-16 sm:pb-24"
        >
          {/* Day switcher */}
          <div className="relative z-10 mx-auto mb-6 sm:mb-10 max-w-xs sm:max-w-md">
            <div className="relative rounded-full border border-[#050A18] bg-[#030610] p-1 shadow-[0_0_20px_#0a0a2a]">
              <span
                className="absolute left-1 top-1 bottom-1 w-[calc(33.333%-8px)] rounded-full bg-gradient-to-r from-[#66FFFF] to-[#B366FF] transition-transform duration-300 ease-out"
                style={{
                  transform:
                    activeKey === "nov6"
                      ? "translateX(0)"
                      : activeKey === "nov7"
                        ? "translateX(100%)"
                        : "translateX(200%)",
                }}
              />
              <div className="relative z-10 grid grid-cols-3 text-xs sm:text-sm md:text-base font-semibold">
                <button
                  className={`py-2 px-2 rounded-full ${
                    activeKey === "nov6" ? "text-[#030610]" : "text-[#94a3b8]"
                  }`}
                  onClick={() => setActiveKey("nov6")}
                >
                  6 Nov
                </button>
                <button
                  className={`py-2 px-2 rounded-full ${
                    activeKey === "nov7" ? "text-[#030610]" : "text-[#94a3b8]"
                  }`}
                  onClick={() => setActiveKey("nov7")}
                >
                  7 Nov
                </button>
                <button
                  className={`py-2 px-2 rounded-full ${
                    activeKey === "nov8" ? "text-[#030610]" : "text-[#94a3b8]"
                  }`}
                  onClick={() => setActiveKey("nov8")}
                >
                  8 Nov
                </button>
              </div>
            </div>
          </div>

          {/* Active day content (wrapper for day heading + list) */}
          <div ref={timelineRef} className="relative">
            {/* Day marker */}
            <div className="relative z-10 mb-6 sm:mb-10 flex items-center justify-center gap-2 sm:gap-3">
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#66FFFF] shadow-[0_0_20px_2px_#66FFFF]" />
              <div
                className={`${orbitron.className} text-lg sm:text-xl md:text-2xl text-[#B366FF]`}
              >
                {activeDay.dateLong}
              </div>
            </div>

            <div ref={listRef} className="relative space-y-8 sm:space-y-12">
              <div className="pointer-events-none absolute left-1/2 top-0 h-full -translate-x-1/2">
                <div className="h-full w-[2px] bg-[#050A18]/60"></div>
                <div className="timeline-progress absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#66FFFF] via-[#B366FF] to-[#6699FF]" />
              </div>
              {activeDay.items.map((ev, i) => {
                const side = i % 2 === 0 ? "right" : "left";
                const key = `${activeKey}:${ev.title}`;
                const registerHref = REGISTER_LINKS[key] ?? DEFAULT_FEST_LINK;
                const hideRegister = HIDE_REGISTER.has(key);
                const hideViewMore = HIDE_VIEW_MORE.has(key);
                return (
                  <div
                    key={`${activeKey}-${i}`}
                    data-side={side}
                    className={`timeline-item ${hideViewMore ? "" : "cursor-pointer"} relative grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 ${
                      side === "left" ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                    onClick={() => {
                      if (hideViewMore) return;
                      setSelectedKey(`${activeKey}:${ev.title}`);
                      setSelectedItem(ev);
                      setDetailsOpen(true);
                    }}
                  >
                    <div className="hidden md:block" />

                    <Card
                      onMouseMove={handleTilt}
                      onMouseLeave={resetTilt}
                      className={`relative border-[#050A18] bg-[#02050C]/90 backdrop-blur rounded-xl shadow-[0_0_20px_#0a0a2a] transform-gpu will-change-transform ${
                        side === "left" ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <CardHeader className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="text-xs uppercase tracking-widest text-[#66FFFF]">
                            {ev.tag}
                          </div>
                          <CardTitle
                            className={`${orbitron.className} mt-1 text-base sm:text-lg text-[#F5F7FA]`}
                          >
                            {ev.title}
                          </CardTitle>
                          <CardDescription className="mt-2 text-sm sm:text-base text-[#708399]">
                            {ev.description}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 rounded-md border border-[#050A18] bg-[#030610] px-2 py-1 text-xs text-[#66FFFF] shrink-0">
                          <Clock className="size-3 sm:size-3.5" />
                          <span className="text-xs">{ev.time}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#94a3b8]">
                          <span className="inline-flex items-center gap-1.5 sm:gap-2">
                            <CalendarDays className="size-3 sm:size-4 text-[#B366FF]" />{" "}
                            <span className="truncate">
                              {activeDay.dayLabel}
                            </span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 sm:gap-2">
                            <MapPin className="size-3 sm:size-4 text-[#6699FF]" />{" "}
                            <span className="truncate">
                              {ev.location ?? "Main Arena"}
                            </span>
                          </span>
                        </div>
                      </CardContent>

                      <CardFooter className="flex items-center justify-between gap-3">
                        <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#FF66FF] shadow-[0_0_14px_2px_#FF66FF]" />

                        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                          {!hideViewMore && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedKey(`${activeKey}:${ev.title}`);
                                setSelectedItem(ev);
                                setDetailsOpen(true);
                              }}
                              className="border-[#050A18] bg-[#030610] text-[#94a3b8] hover:bg-[#050A18] hover:text-white text-xs sm:text-sm px-2 sm:px-3"
                            >
                              View More
                            </Button>
                          )}
                          {!hideRegister && (
                            <Button
                              asChild
                              size="sm"
                              className="racing-button bg-[#B366FF] hover:bg-[#B366FF]/90 text-white text-xs sm:text-sm px-2 sm:px-3"
                            >
                              <Link href={registerHref as Route}>
                                Register Now
                              </Link>
                            </Button>
                          )}
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA at bottom */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <h3
              className={`${orbitron.className} text-lg sm:text-xl md:text-2xl text-[#66FFFF]`}
            >
              Ready to Race?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm md:text-base text-[#708399] px-4">
              Gear up for the ultimate RC showdown — register now and own the
              track.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
              <Button
                asChild
                className="bg-[#66FFFF] text-[#030610] hover:bg-[#66FFFF]/90 w-full sm:w-auto text-sm sm:text-base"
              >
                <Link href="https://unstop.com/college-fests/addovedi2025-national-institute-of-technology-nit-arunachal-pradesh-405251">
                  Register for All Events
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-[#050A18] bg-[#030610] text-[#F5F7FA] hover:bg-[#050A18] w-full sm:w-auto text-sm sm:text-base"
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* Details Modal */}
        <Modal
          open={detailsOpen}
          onClose={() => setDetailsOpen(false)}
          title={selectedTitle || "Event Details"}
          className="top-8"
        >
          {selectedItem && selectedKey !== "nov7:Science Exhibition" && (
            <div className="mb-4 rounded-lg border border-[#0B1020] bg-[#030610] p-3 text-sm text-[#94a3b8]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="size-4 text-[#B366FF]" />{" "}
                  {selectedDetails?.date ?? activeDay.dayLabel}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-4 text-[#6699FF]" />{" "}
                  {selectedDetails?.time ?? selectedItem.time}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-[#6699FF]" />{" "}
                  {selectedDetails?.location ??
                    selectedItem.location ??
                    "Main Arena"}
                </span>
              </div>
              <p className="mt-2 text-[#cbd5e1]">{selectedItem.description}</p>
            </div>
          )}
          {selectedKey === "nov7:Science Exhibition" ? (
            <div className="space-y-6 text-[#cbd5e1]">
              <div className="rounded-lg border border-[#0B1020] bg-[#030610] p-4">
                <h4 className="text-[#66FFFF] text-lg mb-2">
                  Category A – Classes 8 to 10 (Beginner Level)
                </h4>
                <p className="text-sm mb-2">
                  <span className="text-[#66FFFF]">Theme:</span> Smart Living
                  through Simple Automation
                </p>
                <p className="text-sm font-semibold mb-1">
                  Topics (Choose Any One):
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>
                    Smart Home using Radio Control – simple automation of
                    lights, fans, or doors using remote or Bluetooth.
                  </li>
                  <li>
                    Automatic Street Lighting System – light-dependent sensors
                    for community energy saving.
                  </li>
                  <li>
                    Mini Waste Segregator – basic model separating dry and wet
                    waste using simple sensors or mechanisms.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-[#0B1020] bg-[#030610] p-4">
                <h4 className="text-[#66FFFF] text-lg mb-2">
                  Category B – Classes 11 to 12 (Intermediate Level)
                </h4>
                <p className="text-sm mb-2">
                  <span className="text-[#66FFFF]">Theme:</span> Technology for
                  a Sustainable Society
                </p>
                <p className="text-sm font-semibold mb-1">
                  Topics (Choose Any One):
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>
                    IoT-based Smart Waste Management System – monitoring and
                    collection system for municipal waste bins.
                  </li>
                  <li>
                    Water Supply Monitoring and Leakage Detection – sensors for
                    efficient municipal water management.
                  </li>
                  <li>
                    Smart Irrigation for Sustainable Farming – soil
                    moisture-based automated irrigation setup.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-[#0B1020] bg-[#030610] p-4">
                <h4 className="text-[#66FFFF] text-lg mb-2">
                  Category C – College Level (Advanced Level)
                </h4>
                <p className="text-sm mb-2">
                  <span className="text-[#66FFFF]">Theme:</span> Smart Cities
                  and Future Technologies
                </p>
                <p className="text-sm font-semibold mb-1">
                  Topics (Choose Any One):
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>
                    IoT-based Urban Traffic and Parking Management System –
                    real-time data for vehicle flow optimization.
                  </li>
                  <li>
                    Integrated Waste-to-Energy Model – combining IoT monitoring
                    with energy recovery solutions.
                  </li>
                  <li>
                    AI-assisted Disaster Response Network – IoT sensors for
                    early detection of floods, landslides, or earthquakes.
                  </li>
                </ul>
              </div>

              <div className="mt-2 flex items-center justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setDetailsOpen(false)}
                  className="border-[#050A18] bg-[#030610] text-[#94a3b8] hover:bg-[#050A18] hover:text-white"
                >
                  Close
                </Button>
              </div>
            </div>
          ) : selectedDetails ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {selectedDetails.teamSize && (
                  <div className="rounded-lg border border-[#0B1020] bg-[#030610] p-3">
                    <div className="text-xs uppercase tracking-widest text-[#66FFFF]">
                      Team Size
                    </div>
                    <div className="mt-1 text-sm text-[#e2e8f0]">
                      {selectedDetails.teamSize}
                    </div>
                  </div>
                )}
                {selectedDetails.prizeMoney && (
                  <div className="rounded-lg border border-[#0B1020] bg-[#030610] p-3">
                    <div className="text-xs uppercase tracking-widest text-[#66FFFF]">
                      Prize Money
                    </div>
                    <div className="mt-1 text-sm text-[#e2e8f0]">
                      {selectedDetails.prizeMoney}
                    </div>
                  </div>
                )}
                {selectedDetails.registrationFee && (
                  <div className="rounded-lg border border-[#0B1020] bg-[#030610] p-3">
                    <div className="text-xs uppercase tracking-widest text-[#66FFFF]">
                      Registration Fee
                    </div>
                    <div className="mt-1 text-sm text-[#e2e8f0]">
                      ₹ 51 via Unstop
                    </div>
                  </div>
                )}
                {selectedDetails.resultAnnouncement && (
                  <div className="rounded-lg border border-[#0B1020] bg-[#030610] p-3">
                    <div className="text-xs uppercase tracking-widest text-[#66FFFF]">
                      Result Announcement
                    </div>
                    <div className="mt-1 text-sm text-[#e2e8f0]">
                      {selectedDetails.resultAnnouncement}
                    </div>
                  </div>
                )}
              </div>

              {selectedDetails.rules && selectedDetails.rules.length > 0 && (
                <div>
                  <h4 className="text-[#66FFFF]">Rules</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-[#cbd5e1]">
                    {selectedDetails.rules.map((r, i) => (
                      <li key={`rule-${i}`}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedDetails.guidelines &&
                selectedDetails.guidelines.length > 0 && (
                  <div>
                    <h4 className="text-[#66FFFF]">Guidelines</h4>
                    <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-[#cbd5e1]">
                      {selectedDetails.guidelines.map((g, i) => (
                        <li key={`guide-${i}`}>{g}</li>
                      ))}
                    </ul>
                  </div>
                )}

              {selectedDetails.contact && (
                <div className="rounded-lg border border-[#0B1020] bg-[#030610] p-3">
                  <div className="text-xs uppercase tracking-widest text-[#66FFFF]">
                    Contact
                  </div>
                  <div className="mt-1 text-sm text-[#e2e8f0]">
                    {selectedDetails.contact}
                  </div>
                </div>
              )}

              <div className="mt-2 flex items-center justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setDetailsOpen(false)}
                  className="border-[#050A18] bg-[#030610] text-[#94a3b8] hover:bg-[#050A18] hover:text-white"
                >
                  Close
                </Button>
                {!selectedHideRegister && (
                  <Button
                    asChild
                    size="sm"
                    className="racing-button bg-[#B366FF] hover:bg-[#B366FF]/90 text-white"
                  >
                    <Link href={selectedRegisterHref as Route}>
                      Register Now
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-[#cbd5e1]">
                Detailed information will be available soon.
              </p>
              <div className="mt-2 flex items-center justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setDetailsOpen(false)}
                  className="border-[#050A18] bg-[#030610] text-[#94a3b8] hover:bg-[#050A18] hover:text-white"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </main>
  );
}
