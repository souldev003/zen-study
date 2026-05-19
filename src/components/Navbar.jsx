/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, LogIn, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "All Rooms", path: "/rooms" },
    { label: "My Bookings", path: "/my-bookings" },
  ];

  const isDark = theme === "dark";

  return (
    <nav
      className="w-full sticky top-0 z-50 backdrop-blur-md transition-colors duration-500 border-b
      bg-[#fbf9f4]/90 text-[#111111] border-[#c5a880]/30
      dark:bg-[#131514]/90 dark:text-[#e2d9c2] dark:border-[#c5a880]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center select-none gap-2.5 group"
            >
              <img
                src="/Logo.png"
                alt="ZenStudy"
                width={36}
                height={36}
                className="object-contain max-h-10 w-auto transition-all duration-300 dark:brightness-110"
              />
              <span className="text-lg font-serif tracking-[0.16em] text-[#ab8e66] dark:text-[#c5a880] font-semibold uppercase mt-0.5">
                ZenStudy
              </span>
            </Link>
          </div>

          <div className="hidden sm:flex items-center gap-8">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`text-sm font-serif font-medium transition-colors duration-300 relative group py-2 tracking-wide ${
                    isActive
                      ? "text-[#ab8e66] dark:text-[#c5a880]"
                      : "text-[#555555] dark:text-[#a39e93] hover:text-[#000000] dark:hover:text-[#e2d9c2]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#ab8e66] dark:bg-[#c5a880] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-5">
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="relative w-12 h-6.5 rounded-full border transition-all duration-300 p-0.5 flex items-center cursor-pointer select-none
                  border-[#c5a880]/40 bg-[#fbf9f4] dark:bg-[#1a1c1b] dark:border-[#c5a880]/30"
                aria-label="Toggle Theme"
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 shadow-sm
                    bg-[#ab8e66] dark:bg-[#c5a880] ${
                      isDark ? "translate-x-5.5" : "translate-x-0"
                    }`}
                >
                  {isDark ? (
                    <Sun className="w-3 h-3 text-[#131514]" />
                  ) : (
                    <Moon className="w-3 h-3 text-[#fbf9f4]" />
                  )}
                </div>
              </button>
            )}

            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-serif font-semibold rounded-xl transition-all duration-300 active:scale-95 shadow-sm
                bg-[#ab8e66] text-[#131514] hover:bg-[#967b56] hover:text-[#fbf9f4]
                dark:bg-[#c5a880] dark:text-[#131514] dark:hover:bg-[#d6be9a]"
            >
              <span className="tracking-wide">Login</span>
              <LogIn className="w-4 h-4 text-current transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="sm:hidden flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="relative w-11 h-6 rounded-full border p-0.5 flex items-center border-[#c5a880]/40 bg-[#fbf9f4] dark:bg-[#1a1c1b]"
              >
                <div
                  className={`w-4.5 h-4.5 rounded-full flex items-center justify-center transition-transform duration-300 bg-[#ab8e66] dark:bg-[#c5a880] ${
                    isDark ? "translate-x-5" : "translate-x-0"
                  }`}
                >
                  {isDark ? (
                    <Sun className="w-2.5 h-2.5 text-[#131514]" />
                  ) : (
                    <Moon className="w-2.5 h-2.5 text-[#fbf9f4]" />
                  )}
                </div>
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#555555] hover:text-[#ab8e66] dark:text-[#a39e93] dark:hover:text-[#c5a880] transition-colors"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden backdrop-blur-lg border-b transition-colors duration-300
          bg-[#fbf9f4]/95 border-[#c5a880]/20
          dark:bg-[#131514]/95 dark:border-[#c5a880]/10`}
      >
        <div className="px-3 pt-2 pb-4 space-y-1.5">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={index}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-serif font-medium transition-all ${
                  isActive
                    ? "text-[#ab8e66] bg-[#c5a880]/10 border-l-4 border-[#ab8e66] dark:text-[#c5a880] dark:bg-[#c5a880]/5 dark:border-[#c5a880]"
                    : "text-[#333333] hover:text-[#ab8e66] hover:bg-[#c5a880]/5 dark:text-slate-300 dark:hover:text-[#c5a880]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-4 pb-2 px-4 border-t border-[#c5a880]/20 dark:border-[#c5a880]/10">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center px-4 py-2.5 text-sm font-serif font-semibold rounded-xl transition-all duration-200
                bg-[#ab8e66] text-[#131514] hover:bg-[#967b56] hover:text-[#fbf9f4]
                dark:bg-[#c5a880] dark:text-[#131514]"
            >
              <span>Login</span>
              <LogIn className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
