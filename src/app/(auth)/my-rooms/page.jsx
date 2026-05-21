import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Link from "next/link";
import RoomCard from "@/components/UI/RoomCard";

export const metadata = {
  title: "My Rooms | Zen Study",
  description:
    "Manage and view all study rooms you have created on Zen Study. Edit, update or add new rooms easily.",
  keywords: [
    "my rooms",
    "study rooms dashboard",
    "room management",
    "zen study",
    "user rooms",
  ],
};

const MyRoomsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms?ownerId=${user.id}`,
    {
      cache: "no-store",
    },
  );

  const rooms = await res.json();

  return (
    <section className="min-h-screen bg-[#f6f3ee] dark:bg-[#0e100f] px-4 py-18">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-[#f3d7a4]">
              My Rooms
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Manage all your created study rooms
            </p>
          </div>

          <Link
            href="/add-room"
            className="px-5 py-3 rounded-xl bg-[#ab8e66] text-white font-semibold hover:bg-[#947651] transition text-center"
          >
            + Add Room
          </Link>
        </div>

        {rooms?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-[#181a18] rounded-2xl border border-[#d8c1a0]/20">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              You haven&apos;t added any rooms yet
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Start by creating your first study room
            </p>

            <Link
              href="/add-room"
              className="inline-block mt-5 px-6 py-3 rounded-xl bg-[#ab8e66] text-white hover:bg-[#947651]"
            >
              Add Your First Room
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyRoomsPage;
