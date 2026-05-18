"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Menu, X, LogIn } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "All Rooms", path: "/rooms" },
    { label: "My Bookings", path: "/my-bookings" },
  ];

  return (
    <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-900 sticky top-0 z-50 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <Link
              href="/"
              className="flex items-center font-bold text-lg sm:text-xl tracking-wider select-none"
            >
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#bfe3f9] shrink-0 z-10" />

              <img
                src="/Logo.png"
                alt="ZenStudy Logo"
                width={180}
                height={55}
                className="object-contain max-h-8 sm:max-h-12 w-[130px] sm:w-[180px] -ml-3 sm:-ml-4 transition-all duration-200"
              />
            </Link>
          </div>

          <div className="hidden sm:flex items-center gap-8">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`text-sm font-medium transition-colors duration-200 relative group py-2 ${
                    isActive
                      ? "text-[#bfe3f9]"
                      : "text-slate-400 hover:text-[#bfe3f9]"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-[#ffb7ce] to-[#bfe3f9] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          <div className="hidden sm:block">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-linear-to-r from-[#ffb7ce] to-[#c3b1e1] text-slate-950 rounded-xl shadow-[0_4px_14px_rgba(255,183,206,0.3)] hover:shadow-[0_6px_20px_rgba(195,177,225,0.4)] hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              <span>Login</span>
              <LogIn className="w-4 h-4 text-slate-950" />
            </Link>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-[#ffb7ce] hover:bg-slate-900 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden bg-slate-950/95 border-b border-slate-900 backdrop-blur-lg`}
      >
        <div className="px-3 pt-2 pb-4 space-y-2">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={index}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? "text-[#bfe3f9] bg-slate-900/80 border-l-4 border-[#ffb7ce]"
                    : "text-slate-300 hover:text-[#bfe3f9] hover:bg-slate-900/50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-4 pb-2 px-4 border-t border-slate-900">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center px-4 py-3 text-sm font-semibold bg-linear-to-r from-[#ffb7ce] to-[#c3b1e1] text-slate-950 rounded-xl"
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
