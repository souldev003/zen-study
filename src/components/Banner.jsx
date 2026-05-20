import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center p-4 pt-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 w-full h-[90%] border border-[#c5a880]/30 p-6 flex flex-col justify-between">
        <div className="h-4"></div>

        <div className="text-center text-[#e2d9c2] grow flex flex-col items-center justify-center">
          <p className="font-serif tracking-[0.4em] uppercase text-lg mb-2 opacity-80">
            Library of
          </p>
          <h1 className="font-serif text-5xl md:text-8xl tracking-wider mb-4">
            ZEN <span className="text-[#c5a880]">STUDY</span>
          </h1>
          <p className="font-serif tracking-[0.2em] uppercase text-sm border-t border-[#c5a880]/20 pt-6 max-w-sm">
            Your Sanctuary for Focused Learning
          </p>
        </div>

        <div className="flex justify-between items-end text-[#e2d9c2] font-serif text-sm pb-2">
          <p className="opacity-70">Everyday 9:00 am – 8:00 pm</p>
          <Link
            href="/rooms"
            className="hover:text-[#c5a880] border-b border-[#e2d9c2]/50 hover:border-[#c5a880] uppercase tracking-widest transition"
          >
            View catalog →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
