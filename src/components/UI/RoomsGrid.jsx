import React from "react";
import RoomCard from "./RoomCard";

const RoomsGrid = ({ rooms }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] dark:text-[#f3d7a4]">
          Explore Study Rooms
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-[#666] dark:text-[#a7a29a]">
          Discover peaceful and modern study spaces designed to help you focus,
          collaborate, and learn comfortably anytime you need.
        </p>

        <div className="mt-6 flex justify-center">
          <div className="h-1 w-24 rounded-full bg-[#ab8e66]" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7">
        {rooms.map((room) => (
          <div key={room._id} className="h-full">
            <RoomCard room={room} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomsGrid;
