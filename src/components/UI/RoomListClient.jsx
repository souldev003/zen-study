"use client";

import React, { useState } from "react";
import RoomCard from "@/components/UI/RoomCard";

const RoomListClient = ({ rooms }) => {
  const [search, setSearch] = useState("");

  const filteredRooms = rooms.filter((room) =>
    room.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#0f110f] py-18 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] dark:text-[#f3d7a4] mb-4">
            Explore All Rooms
          </h1>

          <p className="text-gray-600 dark:text-[#a7a29a] max-w-2xl mx-auto text-lg">
            Find the perfect quiet space tailored to your productivity needs.
          </p>

          <div className="mt-8 flex justify-center">
            <input
              type="text"
              placeholder="Search rooms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md px-5 py-3 rounded-xl border border-[#d8c1a0]/30 
              bg-white dark:bg-[#181a18] text-black dark:text-white 
              outline-none focus:border-[#ab8e66]"
            />
          </div>
        </div>

        {filteredRooms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl text-gray-400">No matching rooms found.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomListClient;
