"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarDays, Clock, MapPin } from "lucide-react";
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

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700"] });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "500"] });

export default function EventsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [activeKey, setActiveKey] = useState<"nov6" | "nov7">("nov6");
  const activeDay = timelineDays.find((d) => d.key === activeKey)!;
  const dayLabels = activeDay.items.map((e) => e.title);
  const neonTheme =
    activeKey === "nov6"
      ? { primary: "#66FFFF", secondary: "#B366FF" }
      : { primary: "#6699FF", secondary: "#B366FF" };

  // Details modal state
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const selectedDetails = selectedKey ? eventDetails[selectedKey] : undefined;
  const selectedTitle = selectedKey ? selectedKey.split(":")[1] : "";

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
          },
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
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeKey]);

  return (
    <main
      ref={containerRef}
      className={`${rajdhani.className} relative min-h-screen w-full bg-[#010308] text-[#F5F7FA]`}
    >
      {/* RC-themed particles background */}
      <RCParticles
        primary={neonTheme.primary}
        secondary={neonTheme.secondary}
        density={1}
      />

      <div className="relative z-10">
        {/* Header */}
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-10 text-center">
          <h1
            className={`${orbitron.className} text-3xl sm:text-5xl font-bold tracking-wide text-[#66FFFF]`}
          >
            EVENT TIMELINE
          </h1>
          <p className="mt-3 text-[#708399]">
            Throttle up your curiosity — the race for innovation begins.
          </p>
        </section>

        {/* Timeline container */}
        <section
          key={activeKey}
          className="relative mx-auto max-w-5xl px-6 pb-24"
        >
          {/* Day switcher */}
          <div className="relative z-10 mx-auto mb-10 max-w-md">
            <div className="relative rounded-full border border-[#050A18] bg-[#030610] p-1 shadow-[0_0_20px_#0a0a2a]">
              <span
                className="absolute left-1 top-1 bottom-1 w-[calc(50%-8px)] rounded-full bg-gradient-to-r from-[#66FFFF] to-[#B366FF] transition-transform duration-300 ease-out"
                style={{
                  transform:
                    activeKey === "nov6" ? "translateX(0)" : "translateX(100%)",
                }}
              />
              <div className="relative z-10 grid grid-cols-2 text-sm sm:text-base font-semibold">
                <button
                  className={`py-2 rounded-full ${
                    activeKey === "nov6" ? "text-[#030610]" : "text-[#94a3b8]"
                  }`}
                  onClick={() => setActiveKey("nov6")}
                >
                  6 Nov
                </button>
                <button
                  className={`py-2 rounded-full ${
                    activeKey === "nov7" ? "text-[#030610]" : "text-[#94a3b8]"
                  }`}
                  onClick={() => setActiveKey("nov7")}
                >
                  7 Nov
                </button>
              </div>
            </div>
          </div>

          {/* Active day content (wrapper for day heading + list) */}
          <div ref={timelineRef} className="relative">
            {/* Day marker */}
            <div className="relative z-10 mb-10 flex items-center justify-center gap-3">
              <div className="h-3 w-3 rounded-full bg-[#66FFFF] shadow-[0_0_20px_2px_#66FFFF]" />
              <div
                className={`${orbitron.className} text-xl sm:text-2xl text-[#B366FF]`}
              >
                {activeDay.dateLong}
              </div>
            </div>

            <div ref={listRef} className="relative space-y-12">
              <div className="pointer-events-none absolute left-1/2 top-0 h-full -translate-x-1/2">
                <div className="h-full w-[2px] bg-[#050A18]/60"></div>
                <div className="timeline-progress absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#66FFFF] via-[#B366FF] to-[#6699FF]" />
              </div>
              {activeDay.items.map((ev, i) => {
                const side = i % 2 === 0 ? "right" : "left";
                return (
                  <div
                    key={`${activeKey}-${i}`}
                    data-side={side}
                    className={`timeline-item relative grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 ${
                      side === "left" ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="hidden md:block" />

                    <Card
                      onMouseMove={handleTilt}
                      onMouseLeave={resetTilt}
                      className={`relative border-[#050A18] bg-[#02050C]/90 backdrop-blur rounded-xl shadow-[0_0_20px_#0a0a2a] transform-gpu will-change-transform ${
                        side === "left" ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <CardHeader className="flex flex-row items-start justify-between">
                        <div>
                          <div className="text-xs uppercase tracking-widest text-[#66FFFF]">
                            {ev.tag}
                          </div>
                          <CardTitle
                            className={`${orbitron.className} mt-1 text-lg text-[#F5F7FA]`}
                          >
                            {ev.title}
                          </CardTitle>
                          <CardDescription className="mt-2 text-[#708399]">
                            {ev.description}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 rounded-md border border-[#050A18] bg-[#030610] px-2 py-1 text-xs text-[#66FFFF]">
                          <Clock className="size-3.5" />
                          {ev.time}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-[#94a3b8]">
                          <span className="inline-flex items-center gap-2">
                            <CalendarDays className="size-4 text-[#B366FF]" />{" "}
                            {activeDay.dayLabel}
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <MapPin className="size-4 text-[#6699FF]" />{" "}
                            {ev.location ?? "Main Arena"}
                          </span>
                        </div>
                      </CardContent>

                      <CardFooter className="flex items-center justify-between">
                        <div className="h-2 w-2 rounded-full bg-[#FF66FF] shadow-[0_0_14px_2px_#FF66FF]" />

                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelectedKey(`${activeKey}:${ev.title}`);
                              setSelectedItem(ev);
                              setDetailsOpen(true);
                            }}
                            className="border-[#050A18] bg-[#030610] text-[#94a3b8] hover:bg-[#050A18] hover:text-white"
                          >
                            View More
                          </Button>
                          <Button
                            asChild
                            size="sm"
                            className="racing-button bg-[#B366FF] hover:bg-[#B366FF]/90 text-white"
                          >
                            <Link href="/register">Register Now</Link>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA at bottom */}
          <div className="mt-20 text-center">
            <h3 className={`${orbitron.className} text-2xl text-[#66FFFF]`}>
              Ready to Race?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-[#708399]">
              Gear up for the ultimate RC showdown — register now and own the
              track.
            </p>
            <div className="mt-4 inline-flex gap-3">
              <Button
                asChild
                className="bg-[#66FFFF] text-[#030610] hover:bg-[#66FFFF]/90"
              >
                <Link href="/register">Register for All Events</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-[#050A18] bg-[#030610] text-[#F5F7FA] hover:bg-[#050A18]"
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
        >
          {selectedItem && (
            <div className="mb-4 rounded-lg border border-[#0B1020] bg-[#030610] p-3 text-sm text-[#94a3b8]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="size-4 text-[#B366FF]" />{" "}
                  {activeDay.dayLabel}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-4 text-[#6699FF]" />{" "}
                  {selectedItem.time}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-[#6699FF]" />{" "}
                  {selectedItem.location ?? "Main Arena"}
                </span>
              </div>
              <p className="mt-2 text-[#cbd5e1]">{selectedItem.description}</p>
            </div>
          )}
          {selectedDetails ? (
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
                      {selectedDetails.registrationFee}
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
                <Button
                  asChild
                  size="sm"
                  className="racing-button bg-[#B366FF] hover:bg-[#B366FF]/90 text-white"
                >
                  <Link href="/register">Register Now</Link>
                </Button>
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
