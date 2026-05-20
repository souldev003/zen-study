"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, User, ImageIcon, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const password = formData.password;

    if (password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain at least one uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
      return setError("Password must contain at least one lowercase letter.");
    }

    try {
      toast.success("Registration successful! Please login.");

      router.push("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      toast.success("Google login successful!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f5ef] dark:bg-[#0f1110] transition-colors duration-500 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl overflow-hidden rounded-[28px] lg:rounded-[36px] border border-[#c5a880]/20 bg-white dark:bg-[#161816] shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col lg:flex-row-reverse min-h-212.5 lg:min-h-180">
          <div className="relative w-full lg:w-1/2 h-65 sm:h-85 lg:h-auto">
            <img
              src="/RegisterPageImage.jpg"
              alt="Zen Study"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f3d7a4] mb-3">
                Zen Study
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-[#f5ead6]/80 leading-relaxed max-w-md">
                Create your account and start your peaceful study journey today.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-16">
            <div className="w-full max-w-md">
              <div className="mb-8 sm:mb-10">
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1a] dark:text-[#f3d7a4]">
                  Create Account
                </h1>

                <p className="mt-3 text-sm sm:text-base text-[#666] dark:text-[#a7a29a]">
                  Register to begin your study experience.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#1a1a1a] dark:text-[#e7dcc7]">
                    Full Name
                  </label>

                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ab8e66]" />

                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-[#d8c1a0]/40 dark:border-[#3b3428] bg-white dark:bg-[#1c1f1d] py-3.5 sm:py-4 pl-12 pr-4 text-sm sm:text-base text-[#1a1a1a] dark:text-white outline-none transition-all duration-300 focus:border-[#c5a880] focus:ring-4 focus:ring-[#c5a880]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-[#1a1a1a] dark:text-[#e7dcc7]">
                    Email Address
                  </label>

                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ab8e66]" />

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
                      className="w-full rounded-2xl border border-[#d8c1a0]/40 dark:border-[#3b3428] bg-white dark:bg-[#1c1f1d] py-3.5 sm:py-4 pl-12 pr-4 text-sm sm:text-base text-[#1a1a1a] dark:text-white outline-none transition-all duration-300 focus:border-[#c5a880] focus:ring-4 focus:ring-[#c5a880]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-[#1a1a1a] dark:text-[#e7dcc7]">
                    Photo URL
                  </label>

                  <div className="relative group">
                    <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ab8e66]" />

                    <input
                      type="text"
                      placeholder="https://example.com/photo.jpg"
                      required
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          photoURL: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-[#d8c1a0]/40 dark:border-[#3b3428] bg-white dark:bg-[#1c1f1d] py-3.5 sm:py-4 pl-12 pr-4 text-sm sm:text-base text-[#1a1a1a] dark:text-white outline-none transition-all duration-300 focus:border-[#c5a880] focus:ring-4 focus:ring-[#c5a880]/20"
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
                      placeholder="••••••••"
                      required
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          password: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-[#d8c1a0]/40 dark:border-[#3b3428] bg-white dark:bg-[#1c1f1d] py-3.5 sm:py-4 pl-12 pr-4 text-sm sm:text-base text-[#1a1a1a] dark:text-white outline-none transition-all duration-300 focus:border-[#c5a880] focus:ring-4 focus:ring-[#c5a880]/20"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-500 font-medium">{error}</p>
                )}

                <button
                  type="submit"
                  className="group cursor-pointer w-full rounded-2xl bg-[#ab8e66] hover:bg-[#c5a880] py-3.5 sm:py-4 font-bold text-[#131514] transition-all duration-300 shadow-lg shadow-[#ab8e66]/20 hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  Register
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
                  onClick={handleGoogleRegister}
                  className="w-full cursor-pointer rounded-2xl border border-[#d8c1a0]/40 dark:border-[#3b3428] bg-white dark:bg-[#1c1f1d] hover:bg-[#f8f5ef] dark:hover:bg-[#222522] py-3.5 sm:py-4 px-4 font-semibold text-sm sm:text-base text-[#1a1a1a] dark:text-white transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <FcGoogle className="text-xl" />
                  Continue with Google
                </button>
              </form>

              <p className="mt-8 sm:mt-10 text-center text-sm text-[#666] dark:text-[#999]">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-[#ab8e66] hover:text-[#c5a880] transition-colors"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
