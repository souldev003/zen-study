/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client"; // আপনার authClient ইমপোর্ট করুন

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const { data, error } = await authClient.signIn.email({
        email: email,
        password: password,
      });

      if (error) {
        toast.error(error.message || "Invalid credentials");
      } else {
        toast.success("Login successful!");
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error("Google login failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f5ef] dark:bg-[#0f1110] transition-colors duration-500 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl overflow-hidden rounded-[28px] lg:rounded-[36px] border border-[#c5a880]/20 bg-white dark:bg-[#161816] shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col lg:flex-row min-h-162.5">
          <div className="relative w-full lg:w-1/2 h-65 sm:h-80 lg:h-auto">
            <img
              src="/LoginPageImage.jpg"
              alt="Zen Study"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f3d7a4] mb-3">
                Zen Study
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
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ab8e66]" />
                    <input
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      required
                      className="w-full rounded-2xl border border-[#d8c1a0]/40 dark:border-[#3b3428] bg-white dark:bg-[#1c1f1d] py-3.5 pl-12 pr-4 outline-none transition-all focus:border-[#c5a880] focus:ring-4 focus:ring-[#c5a880]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-[#1a1a1a] dark:text-[#e7dcc7]">
                    Password
                  </label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ab8e66]" />
                    <input
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      required
                      className="w-full rounded-2xl border border-[#d8c1a0]/40 dark:border-[#3b3428] bg-white dark:bg-[#1c1f1d] py-3.5 pl-12 pr-4 outline-none transition-all focus:border-[#c5a880] focus:ring-4 focus:ring-[#c5a880]/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-[#ab8e66] hover:bg-[#c5a880] py-3.5 font-bold text-[#131514] transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      Login <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-4 py-1">
                  <div className="h-px flex-1 bg-[#d8c1a0]/40" />
                  <span className="text-xs text-[#888]">OR</span>
                  <div className="h-px flex-1 bg-[#d8c1a0]/40" />
                </div>

                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full rounded-2xl border border-[#d8c1a0]/40 bg-white dark:bg-[#1c1f1d] py-3.5 font-semibold text-sm flex items-center justify-center gap-3"
                >
                  <FcGoogle className="w-5 h-5" /> Continue with Google
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-[#666]">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-[#ab8e66] hover:text-[#c5a880]"
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
