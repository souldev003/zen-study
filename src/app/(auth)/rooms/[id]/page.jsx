/* eslint-disable @next/next/no-img-element */
import { EditRoom } from "@/components/EditRoom";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:5001/rooms/${id}`, {
    cache: "no-store",
  });
  const room = await res.json();

  return {
    title: room?.name ? `${room.name} | Zen Study Room` : "Room Details",
    description:
      room?.description || "Book your premium study room at Zen Study.",
  };
}

const PageDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5001/rooms/${id}`, {
    cache: "no-store",
  });
  const room = await res.json();

  const {
    name,
    image,
    description,
    floor,
    seatCapacity,
    hourlyRate,
    amenities,
  } = room;

  return (
    <section className="min-h-screen bg-[#f6f3ee] dark:bg-[#0e100f] px-4 py-18">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="relative overflow-hidden rounded-[40px] group shadow-2xl">
            <img
              src={image}
              alt={name}
              className="h-80 md:h-125 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8">
              <span className="rounded-full bg-[#f3d7a4] px-4 py-1 text-sm font-semibold text-black shadow">
                Floor {floor}
              </span>

              <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-white leading-tight">
                {name}
              </h1>

              <p className="mt-3 max-w-lg text-sm md:text-base text-white/80">
                Premium quiet study environment designed for productivity,
                teamwork, and comfort.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="rounded-[36px] border border-[#d8c1a0]/20 bg-white dark:bg-[#181a18] p-8 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#ab8e66] uppercase tracking-[3px]">
                    Zen Study Room
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-[#1a1a1a] dark:text-white">
                    Room Details
                  </h2>
                </div>

                <div className="rounded-2xl bg-[#f8f5ef] dark:bg-[#222522] px-5 py-4 text-center">
                  <p className="text-xs text-[#888]">Rate</p>

                  <h3 className="mt-1 text-2xl font-bold text-[#ab8e66]">
                    ${hourlyRate}
                  </h3>
                </div>
              </div>

              <p className="mt-8 leading-relaxed text-[#666] dark:text-[#a7a29a]">
                {description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-[#f8f5ef] dark:bg-[#222522] p-5">
                  <p className="text-sm text-[#888]">Seat Capacity</p>

                  <h3 className="mt-2 text-3xl font-bold text-[#1a1a1a] dark:text-white">
                    {seatCapacity}
                  </h3>
                </div>

                <div className="rounded-3xl bg-[#f8f5ef] dark:bg-[#222522] p-5">
                  <p className="text-sm text-[#888]">Availability</p>

                  <h3 className="mt-2 text-2xl font-bold text-green-600">
                    Open
                  </h3>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[36px] border border-[#d8c1a0]/20 bg-white dark:bg-[#181a18] p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-white">
                Amenities
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {amenities?.map((item, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-[#d8c1a0]/30 bg-[#f8f5ef] dark:bg-[#222522] px-5 py-2 text-sm font-medium text-[#5f574b] dark:text-[#d6c8ae]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button className="cursor-pointer rounded-2xl bg-[#ab8e66] px-6 py-4 text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#947651]">
                  Book Now
                </button>

                <EditRoom room={room} />

                <button className="cursor-pointer rounded-2xl border border-[#d42d21] px-6 py-4 text-[#d42d21] transition-all duration-300 hover:bg-[#d42d21] hover:text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageDetails;
