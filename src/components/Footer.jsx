/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const currentYear = 2026;

  useEffect(() => {
    setMounted(true);
  }, []);

  const mainLinks = [
    { label: "Home", path: "/" },
    { label: "All Rooms", path: "/rooms" },
    { label: "My Bookings", path: "/my-bookings" },
  ];

  return (
    <footer className="w-full relative border-t bg-[#fbf9f4] text-[#111111] border-[#c5a880]/40 dark:bg-[#131514] dark:text-[#e2d9c2] dark:border-[#c5a880]/20 selection:bg-[#c5a880] selection:text-[#131514] dark:selection:text-[#131514]">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] bg-[radial-gradient(#c5a880_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="space-y-4">
            <Link href="/" className="flex items-center select-none gap-3">
              <img
                src="/Logo.png"
                alt="ZenStudy Logo"
                width={42}
                height={42}
                className="object-contain max-h-12 w-auto transition-all duration-300 dark:brightness-110"
              />
              <span className="text-xl font-serif tracking-[0.18em] text-[#ab8e66] dark:text-[#c5a880] font-semibold uppercase mt-0.5">
                ZenStudy
              </span>
            </Link>
            <p className="text-sm text-[#333333] dark:text-[#a39e93] leading-relaxed tracking-wide font-serif italic max-w-sm pt-1">
              &quot;Read the Past. Shape the Future.&quot; Premium quiet library
              spaces tailored for your peak focus and scholarly excellence.
            </p>
          </div>

          <div className="space-y-4 md:pl-12">
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#ab8e66] dark:text-[#c5a880] uppercase font-serif border-b border-[#c5a880]/30 dark:border-[#c5a880]/10 pb-2 inline-block w-28">
              Explore
            </h3>
            <ul className="space-y-3 text-sm font-serif">
              {mainLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-[#333333] dark:text-[#a39e93] hover:text-[#000000] dark:hover:text-[#e2d9c2] transition-colors duration-300 flex items-center gap-2 group font-medium dark:font-normal"
                  >
                    <span className="h-px w-0 bg-[#ab8e66] dark:bg-[#c5a880]/60 transition-all duration-300 group-hover:w-3"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#ab8e66] dark:text-[#c5a880] uppercase font-serif border-b border-[#c5a880]/30 dark:border-[#c5a880]/10 pb-2 inline-block w-28">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm font-serif text-[#333333] dark:text-[#a39e93] font-medium dark:font-normal">
              <li className="flex items-center gap-3">
                <MdLocationOn className="w-4 h-4 text-[#ab8e66] dark:text-[#c5a880]/80 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="w-4 h-4 text-[#ab8e66] dark:text-[#c5a880]/80 shrink-0" />
                <a
                  href="mailto:support@zenstudy.com"
                  className="hover:text-[#000000] dark:hover:text-[#e2d9c2] transition-colors"
                >
                  support@zenstudy.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="w-4 h-4 text-[#ab8e66] dark:text-[#c5a880]/80 shrink-0" />
                <a
                  href="tel:+88012345678"
                  className="hover:text-[#000000] dark:hover:text-[#e2d9c2] transition-colors"
                >
                  +880 1234 5678
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555555] dark:text-[#a39e93] hover:text-[#ab8e66] dark:hover:text-[#c5a880] transition-colors"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555555] dark:text-[#a39e93] hover:text-[#ab8e66] dark:hover:text-[#c5a880] transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555555] dark:text-[#a39e93] hover:text-[#ab8e66] dark:hover:text-[#c5a880] transition-colors"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 w-full h-px bg-linear-to-r from-transparent via-[#c5a880]/40 dark:via-[#c5a880]/20 to-transparent" />

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif text-[#555555] dark:text-[#7c776e] tracking-wider">
          <p className="italic">
            © {currentYear} ZenStudy. All privileges reserved.
          </p>
          <p className="font-serif italic tracking-normal text-[#555555] dark:text-[#7c776e]">
            Finely crafted by{" "}
            <span className="text-[#ab8e66] dark:text-[#c5a880] font-bold tracking-wide font-sans not-italic">
              souldev003
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
