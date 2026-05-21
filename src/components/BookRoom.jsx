"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const BookRoom = ({ room }) => {
  const [openModal, setOpenModal] = useState(false);

  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("09:00");
  const [bookingDate, setBookingDate] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const startHour = parseInt(startTime.split(":")[0]);
  const endHour = parseInt(endTime.split(":")[0]);
  const totalHours = endHour - startHour;

  const totalCost = totalHours > 0 ? totalHours * room.hourlyRate : 0;

  const handleBookNow = () => {
    if (isPending) return;

    if (!user) {
      toast.error("Please login first");
      router.push(`/login?redirect=${pathname}`);
      return;
    }

    setOpenModal(true);
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!bookingDate) {
      toast.error("Please select booking date");
      return;
    }

    if (totalHours <= 0) {
      toast.error("End time must be after start time");
      return;
    }

    try {
      setLoading(true);

      const bookingData = {
        userId: user.id,
        userEmail: user.email,
        userName: user.name,
        userImage: user.image,

        roomId: room._id,
        roomName: room.name,
        roomImage: room.image,

        floor: room.floor,
        hourlyRate: room.hourlyRate,

        bookingDate,
        startTime,
        endTime,

        totalHours,
        totalCost,
        note,

        status: "pending",
        createdAt: new Date(),
      };

      const res = await fetch("http://localhost:5001/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Booking failed");
        return;
      }

      toast.success("Room booked successfully!");
      setOpenModal(false);
      setTimeout(() => router.push("/my-bookings"), 1000);
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleBookNow}
        className="w-full sm:w-auto cursor-pointer rounded-2xl bg-[#ab8e66] px-5 sm:px-6 py-3 sm:py-4 text-white text-sm sm:text-base transition hover:bg-[#947651] hover:scale-[1.02]"
      >
        {user ? "Book Now" : "Login to Book"}
      </button>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-3 sm:px-4 py-4">
          <div className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-[24px] sm:rounded-[32px] border border-[#d8c1a0]/20 bg-[#fffdf9]! dark:bg-[#181a18]! p-5 sm:p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-[2px] sm:tracking-[3px] text-[#ab8e66]">
                  Zen Study
                </p>

                <h2 className="mt-1 sm:mt-2 text-xl sm:text-3xl font-bold text-[#1a1a1a] dark:text-white">
                  Book Room
                </h2>
              </div>

              <button
                onClick={() => setOpenModal(false)}
                className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full text-xl sm:text-2xl text-[#888] hover:bg-[#f3eee4] dark:hover:bg-[#222522]"
              >
                ×
              </button>
            </div>

            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl bg-[#f8f5ef] dark:bg-[#222522] p-3 sm:p-4 text-center sm:text-left">
              <img
                src={room.image}
                alt={room.name}
                className="h-20 sm:h-24 w-full sm:w-32 rounded-xl sm:rounded-2xl object-cover"
              />

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] dark:text-white">
                  {room.name}
                </h3>

                <p className="text-sm text-[#666] dark:text-[#aaa]">
                  ${room.hourlyRate}/hour
                </p>

                <p className="text-sm text-[#888] dark:text-[#999]">
                  Floor {room.floor}
                </p>
              </div>
            </div>
            <form
              onSubmit={handleBooking}
              className="mt-6 sm:mt-8 space-y-4 sm:space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Booking Date
                </label>

                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-xl sm:rounded-2xl border border-[#d8c1a0]/40 bg-white dark:bg-[#1c1f1d] px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none focus:border-[#c5a880]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Start Time
                  </label>

                  <select
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full rounded-xl sm:rounded-2xl border border-[#d8c1a0]/40 bg-white dark:bg-[#1c1f1d] px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
                  >
                    {[...Array(13)].map((_, i) => {
                      const hour = 8 + i;
                      return <option key={hour}>{hour}:00</option>;
                    })}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    End Time
                  </label>

                  <select
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full rounded-xl sm:rounded-2xl border border-[#d8c1a0]/40 bg-white dark:bg-[#1c1f1d] px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
                  >
                    {[...Array(13)].map((_, i) => {
                      const hour = 8 + i;
                      return <option key={hour}>{hour}:00</option>;
                    })}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Special Note
                </label>

                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  className="w-full rounded-xl sm:rounded-2xl border border-[#d8c1a0]/40 bg-white dark:bg-[#1c1f1d] px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base"
                />
              </div>

              <div className="rounded-xl sm:rounded-2xl bg-[#f8f5ef] dark:bg-[#222522] px-4 py-3 sm:px-5 sm:py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base">Total Cost</span>

                  <span className="text-lg sm:text-2xl font-bold text-[#ab8e66]">
                    ${totalCost}
                  </span>
                </div>

                {totalHours <= 0 && (
                  <p className="mt-2 text-xs sm:text-sm text-red-500">
                    End time must be after start time
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading || totalHours <= 0}
                  className="w-full rounded-xl sm:rounded-2xl bg-[#ab8e66] px-4 sm:px-6 py-2.5 sm:py-3 text-white font-semibold disabled:opacity-50"
                >
                  {loading ? "Booking..." : "Confirm Booking"}
                </button>

                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="w-full rounded-xl sm:rounded-2xl border px-4 sm:px-6 py-2.5 sm:py-3"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
