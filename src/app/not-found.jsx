"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f6f3ee] dark:bg-[#0e100f] px-4">
      <div className="text-center max-w-md w-full">
        <h1 className="text-7xl sm:text-8xl font-extrabold text-[#ab8e66]">
          404
        </h1>

        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#1a1a1a] dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 rounded-xl border border-[#d8c1a0]/40 bg-white dark:bg-[#181a18] text-[#1a1a1a] dark:text-white hover:bg-[#f3eee4] dark:hover:bg-[#222522] transition"
          >
            Go Back
          </button>

          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-[#ab8e66] text-white hover:bg-[#947651] transition text-center"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
