/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const ExperienceSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#ab8e66]/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#f3d7a4]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-[#d8c1a0]/20 bg-white/70 dark:bg-[#181a18]/80 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
        >
          <div className="absolute inset-0 bg-linear-to-br from-[#ab8e66]/10 via-transparent to-[#f3d7a4]/10" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 sm:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d8c1a0]/30 bg-[#f8f5ef] dark:bg-[#222522] px-4 py-2 text-sm text-[#ab8e66]">
                  <Sparkles className="w-4 h-4" />
                  Premium Learning Experience
                </div>

                <h2 className="mt-6 text-4xl sm:text-5xl leading-tight font-bold text-[#1a1a1a] dark:text-[#f3d7a4]">
                  Designed For Deep
                  <span className="block text-[#ab8e66]">
                    Focus & Creativity
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-[#666] dark:text-[#a7a29a]">
                  Experience beautifully crafted study environments with modern
                  interiors, peaceful atmospheres, and productivity-focused
                  spaces that inspire better learning every day.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Minimal & distraction-free interiors",
                    "Comfortable premium seating",
                    "Silent zones for better concentration",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-[#ab8e66]" />

                      <p className="text-[#555] dark:text-[#c7c7c7]">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <Link href="/rooms">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-10 cursor-pointer rounded-2xl bg-[#ab8e66] hover:bg-[#c5a880] px-7 py-4 text-sm sm:text-base font-semibold text-[#131514] shadow-lg shadow-[#ab8e66]/20 flex items-center gap-2 transition-all duration-300"
                  >
                    Explore Rooms
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-full min-h-100 lg:min-h-162.5"
            >
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
                alt="Study Space"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl px-8 py-6 shadow-2xl"
              >
                <h3 className="text-3xl font-bold text-white">98%</h3>

                <p className="mt-1 text-sm text-white/80">
                  Student Satisfaction
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
