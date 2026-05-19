/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Login successful!");
  };

  const handleGoogleLogin = () => {
    toast.success("Continue with Google");
  };

  return (
    <div className="min-h-screen bg-[#f8f5ef] dark:bg-[#0f1110] transition-colors duration-500 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl overflow-hidden rounded-[28px] lg:rounded-[36px] border border-[#c5a880]/20 bg-white dark:bg-[#161816] shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col lg:flex-row min-h-162.5">
          <div className="relative w-full lg:w-1/2 h-65 sm:h-80 lg:h-auto">
            <img
              src="/LoginPageImage.jpg"
              alt="StudyNook"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f3d7a4] mb-3">
                StudyNook
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-[#f5ead6]/80 leading-relaxed max-w-md">
                Your personal library room booking assistant for peaceful and
                productive study sessions.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-16">
            <div className="w-full max-w-md">
              <div className="mb-8 sm:mb-10">
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1a] dark:text-[#f3d7a4]">
                  Welcome Back
                </h1>

                <p className="mt-3 text-sm sm:text-base text-[#666] dark:text-[#a7a29a]">
                  Login to continue your study journey.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#1a1a1a] dark:text-[#e7dcc7]">
                    Email Address
                  </label>

                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ab8e66] group-focus-within:text-[#d4b07b] transition-colors" />

                    <input
                      type="email"
                      placeholder="email@example.com"
                      required
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-[#d8c1a0]/40 dark:border-[#3b3428] bg-white dark:bg-[#1c1f1d] py-3.5 sm:py-4 pl-12 pr-4 text-sm sm:text-base text-[#1a1a1a] dark:text-white placeholder:text-[#999] dark:placeholder:text-[#777] outline-none transition-all duration-300 focus:border-[#c5a880] focus:ring-4 focus:ring-[#c5a880]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-[#1a1a1a] dark:text-[#e7dcc7]">
                    Password
                  </label>

                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ab8e66] group-focus-within:text-[#d4b07b] transition-colors" />

                    <input
                      type="password"
                      placeholder="••••••••"
                      required
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          password: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-[#d8c1a0]/40 dark:border-[#3b3428] bg-white dark:bg-[#1c1f1d] py-3.5 sm:py-4 pl-12 pr-4 text-sm sm:text-base text-[#1a1a1a] dark:text-white placeholder:text-[#999] dark:placeholder:text-[#777] outline-none transition-all duration-300 focus:border-[#c5a880] focus:ring-4 focus:ring-[#c5a880]/20"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-[#ab8e66] hover:text-[#c5a880] transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="group w-full rounded-2xl bg-[#ab8e66] hover:bg-[#c5a880] py-3.5 sm:py-4 font-bold text-[#131514] transition-all duration-300 shadow-lg shadow-[#ab8e66]/20 hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  Login
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="flex items-center gap-4 py-1">
                  <div className="h-px flex-1 bg-[#d8c1a0]/40 dark:bg-[#3b3428]" />
                  <span className="text-xs sm:text-sm text-[#888] dark:text-[#777]">
                    OR
                  </span>
                  <div className="h-px flex-1 bg-[#d8c1a0]/40 dark:bg-[#3b3428]" />
                </div>

                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full rounded-2xl border border-[#d8c1a0]/40 dark:border-[#3b3428] bg-white dark:bg-[#1c1f1d] hover:bg-[#f8f5ef] dark:hover:bg-[#222522] py-3.5 sm:py-4 px-4 font-semibold text-sm sm:text-base text-[#1a1a1a] dark:text-white transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-5 h-5"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.4 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6.1 7.1l6.2 5.2C39.7 36.4 44 30.8 44 24c0-1.3-.1-2.4-.4-3.5z"
                    />
                  </svg>
                  Continue with Google
                </button>
              </form>

              <p className="mt-8 sm:mt-10 text-center text-sm text-[#666] dark:text-[#999]">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-[#ab8e66] hover:text-[#c5a880] transition-colors"
                >
                  Register now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
