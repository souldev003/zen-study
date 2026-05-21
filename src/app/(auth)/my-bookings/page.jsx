/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
// import { redirect } from "next/navigation";
import { CancelRoomBooking } from "@/components/my-bookings/CancelRoomBooking";
import { ConfirmRoomBooking } from "@/components/my-bookings/ConfirmRoomBooking";

export const metadata = {
  title: "Zen-Study | My Bookings",
  description: "Manage your study room bookings easily in StudyNook dashboard.",
};

const MyBookingsPage = async () => {
  const { token } = await auth.api.getToken({ headers: await headers() });
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  // if (!user) {
  //   redirect("/login");
  // }

  const res = await fetch(`http://localhost:5001/bookings/${user.id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const bookings = await res.json();

  return (
    <section className="min-h-screen bg-[#f6f3ee] dark:bg-[#0e100f] px-4 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] dark:text-[#C5A880]">
            My Bookings
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Manage your study room bookings easily
          </p>
        </div>

        {bookings?.length === 0 ? (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">
            You have no bookings yet.
          </div>
        ) : (
          <div className="space-y-5">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 p-5 sm:p-6 rounded-2xl border border-[#d8c1a0]/20 bg-white dark:bg-[#181a18] shadow-sm"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center flex-1">
                  <img
                    src={booking.roomImage}
                    className="w-full sm:w-40 h-28 object-cover rounded-xl"
                  />

                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-[#1a1a1a] dark:text-white">
                      {booking.roomName}
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {booking.bookingDate} • {booking.startTime} -{" "}
                      {booking.endTime}
                    </p>

                    <p className="text-sm mt-2 text-[#ab8e66] font-semibold">
                      ${booking.totalCost}
                    </p>

                    <span
                      className={`inline-block mt-2 px-3 py-1 text-xs rounded-full font-medium ${
                        booking.status === "cancelled"
                          ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300"
                          : booking.status === "confirmed"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>

                <div className="flex flex-row lg:flex-col gap-3 lg:items-end w-full lg:w-auto">
                  {booking.status === "pending" && (
                    <>
                      <ConfirmRoomBooking booking={booking} />
                      {/* <button className="w-full lg:w-auto px-4 py-2 rounded-xl text-sm font-semibold bg-green-600 hover:bg-green-700 text-white transition">
                        Confirm
                      </button> */}

                      <CancelRoomBooking booking={booking} />
                    </>
                  )}

                  {booking.status === "confirmed" && (
                    <button
                      disabled
                      className="w-full lg:w-auto px-4 py-2 rounded-xl text-sm font-semibold bg-gray-400 text-white cursor-not-allowed"
                    >
                      Confirmed
                    </button>
                  )}

                  {booking.status === "cancelled" && (
                    <button
                      disabled
                      className="w-full lg:w-auto px-4 py-2 rounded-xl text-sm font-semibold bg-gray-300 text-gray-600 cursor-not-allowed"
                    >
                      Cancelled
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBookingsPage;
