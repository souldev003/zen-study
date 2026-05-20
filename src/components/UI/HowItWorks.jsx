/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Calendar, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choose Your Study Room",
    desc: "Browse peaceful and modern study rooms designed for focus and productivity.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  },
  {
    id: 2,
    title: "Select Date & Time",
    desc: "Pick your preferred time slot and schedule your study session easily.",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
  },
  {
    id: 3,
    title: "Confirm & Start Studying",
    desc: "Confirm your booking and enjoy a distraction-free study environment.",
    icon: CheckCircle,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 h-96 w-96 bg-[#ab8e66]/20 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] dark:text-[#f3d7a4]">
            How It Works
          </h2>

          <p className="mt-4 text-[#666] dark:text-[#a7a29a] max-w-2xl mx-auto">
            Book your perfect study space in just a few simple steps.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-[#d8c1a0]/40 -translate-x-1/2" />

          <div className="space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative grid grid-cols-1 sm:grid-cols-2 gap-12 items-center"
                >
                  <div className="absolute left-1/2 -translate-x-1/2 z-20">
                    <div className="h-12 w-12 rounded-full bg-[#ab8e66] flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-[#0f1110]">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div
                    className={`${isLeft ? "sm:order-1 sm:pr-10" : "sm:order-2 sm:pl-10"}`}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-72 w-full object-cover rounded-3xl shadow-xl"
                    />
                  </div>
                  <div
                    className={`${
                      isLeft
                        ? "sm:order-2 text-left sm:pl-10"
                        : "sm:order-1 text-left sm:text-right sm:pr-10"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[#666] dark:text-[#a7a29a] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
