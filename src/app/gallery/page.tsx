"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

const images = [
  { src: "/images/img1.jpg", alt: "Event Image 1" },
  { src: "/images/img2.jpg", alt: "Event Image 2" },
  { src: "/images/img3.jpg", alt: "Event Image 3" },
  { src: "/images/img4.jpg", alt: "Event Image 4" },
  { src: "/images/img5.jpg", alt: "Event Image 5" },
  { src: "/images/img6.jpg", alt: "Event Image 6" },
];

export default function EventGalleryPage() {
  return (
    <div
      className="min-h-screen  flex flex-col items-center justify-start p-6 md:p-10 bg-[#0A0A0F] text-[#FAFAFA]
      bg-[radial-gradient(at_0%_0%,hsla(263,70%,50%,0.15)_0px,transparent_50%),radial-gradient(at_100%_100%,hsla(189,94%,43%,0.15)_0px,transparent_50%)]"
    >
      {/* Header */}
      <header className="text-center mb-10">
        <h1
          className="font-orbitron text-4xl md:text-6xl font-bold tracking-wider bg-gradient-to-r from-[#7C3AED] to-[#04D9FF] bg-clip-text text-transparent relative inline-block pb-2 mb-3
          after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[3px] after:rounded-sm after:bg-gradient-to-r after:from-[#7C3AED] after:to-[#04D9FF]"
        >
          Event Gallery
        </h1>
        <p className="text-base md:text-lg opacity-80">
          A glimpse of unforgettable moments from Addovedi Tech Fest
        </p>
      </header>

      {/* Gallery Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl mb-10">
        {images.map((img, index) => (
          <Card
            key={index}
            className="overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_#04D9FF,0_0_30px_#7C3AED]"
          >
            <CardContent className="p-0">
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover aspect-square"
              />
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-auto text-center text-sm md:text-base opacity-90">
        #AddovediTechFest -{" "}
        <span className="font-medium text-[#9a1dcf]">
          Celebrating Innovation & Creativity
        </span>
      </footer>
    </div>
  );
}
