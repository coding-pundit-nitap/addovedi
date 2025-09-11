"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { quickLinks, socialLinks } from "@/data/footer";

export function FooterSection() {
  return (
    <footer className="relative py-20 px-4 overflow-hidden bg-transparent font-poppins">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-accent-teal">
              Quick Links
            </h3>
            <div className="space-y-4">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="block text-white/70 hover:text-accent-teal transition-colors duration-300 relative group"
                >
                  {link.name}
                  <div className="absolute -bottom-1 left-0 h-0.5 bg-accent-teal w-0 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Center CTA */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03 }}
              className="mb-8"
            >
              <Button className="relative px-12 py-6 text-xl font-bold rounded-full border-2 border-accent-teal bg-transparent text-accent-teal hover:bg-accent-teal transition-all duration-300 group overflow-hidden">
                <span className="relative z-10">Join Us Now</span>
                <div className="absolute inset-0 bg-accent-teal scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute inset-0 border-2 border-accent-teal rounded-full animate-ping-slow group-hover:animate-none" />
              </Button>
            </motion.div>
            <blockquote className="italic text-white/60 max-w-md mx-auto text-lg leading-relaxed">
              "The best way to predict the future is to invent it."
              <footer className="text-accent-teal/80 mt-2 not-italic text-sm">
                - Alan Kay
              </footer>
            </blockquote>
          </div>

          {/* Social Media */}
          <div className="lg:text-right">
            <h3 className="mb-6 text-2xl font-semibold text-accent-magenta">
              Follow Us
            </h3>
            <div className="flex lg:justify-end justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.08, rotate: 0.5 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group p-3 border rounded-lg hover:border-opacity-50 transition-all duration-300"
                    style={{ borderColor: `${social.color}40` }}
                  >
                    <Icon
                      size={24}
                      style={{ color: social.color }}
                      className="group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_12px_rgba(100,255,218,0.55)]"
                    />
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${social.color}20, transparent 70%)`,
                      }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-white/50">
            © 2025 addovedi. All rights reserved. Built with innovation and
            passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
