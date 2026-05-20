"use client";

import React from "react";
import { Coffee, Wifi, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <BookOpen className="w-8 h-8 text-[#D4AF37]" />,
    title: "Silent Environment",
    desc: "A completely distraction-free space designed for deep focus and productivity.",
  },
  {
    icon: <Wifi className="w-8 h-8 text-[#D4AF37]" />,
    title: "High-speed Wi-Fi",
    desc: "Stay connected with lightning-fast internet for your research and online learning.",
  },
  {
    icon: <Coffee className="w-8 h-8 text-[#D4AF37]" />,
    title: "Comfortable Seating",
    desc: "Ergonomic furniture that ensures comfort during long hours of study sessions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#fbf9f4] dark:bg-[#131514] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#111] dark:text-[#e2d9c2] mb-4">
            Why Choose Our Sanctuary?
          </h2>
          <div className="w-20 h-0.5 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-white dark:bg-[#1a1c1b] rounded-2xl text-center border-animate"
            >
              <div className="relative z-10">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-serif text-[#111] dark:text-[#e2d9c2] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#555] dark:text-[#a39e93] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
