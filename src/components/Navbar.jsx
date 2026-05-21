/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, LogIn, Sun, Moon, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const { theme, setTheme } = useTheme();

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "All Rooms", path: "/rooms" },
    { label: "My Bookings", path: "/my-bookings" },
    { label: "My Rooms", path: "/my-rooms" },
  ];

  const isDark = theme === "dark";

  const handleLogout = async () => {
    try {
      await authClient.signOut();

      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "backdrop-blur-md border-[#c5a880]/30 dark:border-[#c5a880]/10 bg-[#fbf9f4]/90 dark:bg-[#131514]/90"
          : "bg-transparent border-transparent"
      }`}
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
                      : isScrolled
                        ? "text-[#555555] dark:text-[#a39e93] hover:text-[#000000] dark:hover:text-[#e2d9c2]"
                        : "text-[#6e6547] hover:text-[#ab8e66]"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#ab8e66] dark:bg-[#c5a880] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-5">
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="relative w-12 h-6.5 rounded-full border transition-all duration-300 p-0.5 flex items-center cursor-pointer select-none border-[#c5a880]/40 bg-[#fbf9f4] dark:bg-[#1a1c1b] dark:border-[#c5a880]/30"
                aria-label="Toggle Theme"
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 shadow-sm bg-[#ab8e66] dark:bg-[#c5a880] ${
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

            {!isPending && user ? (
              <div className="flex items-center gap-3">
                <div className="cursor-pointer flex items-center gap-3 px-3 py-1.5 rounded-xl border border-[#c5a880]/20 bg-[#fbf9f4]/80 dark:bg-[#1a1c1b]/80 dark:border-[#c5a880]/10">
                  <img
                    src={
                      user.image ||
                      "https://cdn.vectorstock.com/i/500p/46/76/gray-male-head-placeholder-vector-23804676.jpg"
                    }
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#c5a880]/40"
                  />

                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-[#333333] dark:text-white">
                      {user.name}
                    </span>

                    <span className="text-xs text-[#8b7d62] dark:text-[#bca98a]">
                      {user.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-sm font-serif font-semibold rounded-xl transition-all duration-300 active:scale-95 shadow-sm bg-red-500 text-white hover:bg-red-600"
                >
                  <span>Logout</span>

                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              !isPending && (
                <Link
                  href="/login"
                  className="cursor-pointer inline-flex items-center gap-2 px-5 py-2 text-sm font-serif font-semibold rounded-xl transition-all duration-300 active:scale-95 shadow-sm bg-[#ab8e66] text-[#131514] hover:bg-[#967b56] hover:text-[#fbf9f4] dark:bg-[#c5a880] dark:text-[#131514] dark:hover:bg-[#d6be9a]"
                >
                  <span className="tracking-wide">Login</span>

                  <LogIn className="w-4 h-4 text-current" />
                </Link>
              )
            )}
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
        } sm:hidden backdrop-blur-lg border-b transition-colors duration-300 bg-[#fbf9f4]/95 border-[#c5a880]/20 dark:bg-[#131514]/95 dark:border-[#c5a880]/10`}
      >
        <div className="px-3 pt-2 pb-4 space-y-1.5">
          {!isPending && user && (
            <div className="cursor-pointer flex items-center gap-3 px-4 py-3 mb-3 rounded-2xl bg-[#c5a880]/10 dark:bg-[#c5a880]/5">
              <img
                src={
                  user.image ||
                  "https://www.shutterstock.com/image-vector/isolated-object-avatar-dummy-symbol-260nw-1290290470.jpg"
                }
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#c5a880]/40"
              />

              <div>
                <h3 className="font-semibold text-[#333333] dark:text-white">
                  {user.name}
                </h3>

                <p className="text-sm text-[#8b7d62] dark:text-[#bca98a]">
                  {user.email}
                </p>
              </div>
            </div>
          )}

          {menuItems.map((item, index) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={index}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`cursor-pointer block px-4 py-2.5 rounded-xl text-base font-serif font-medium transition-all ${
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
            {!isPending && user ? (
              <button
                onClick={handleLogout}
                className="cursor-pointer flex items-center justify-center gap-2 w-full text-center px-4 py-2.5 text-sm font-serif font-semibold rounded-xl transition-all duration-200 bg-red-500 text-white hover:bg-red-600"
              >
                <span>Logout</span>

                <LogOut className="w-4 h-4" />
              </button>
            ) : (
              !isPending && (
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full text-center px-4 py-2.5 text-sm font-serif font-semibold rounded-xl transition-all duration-200 bg-[#ab8e66] text-[#131514] hover:bg-[#967b56] hover:text-[#fbf9f4] dark:bg-[#c5a880] dark:text-[#131514]"
                >
                  <span>Login</span>

                  <LogIn className="w-4 h-4" />
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
