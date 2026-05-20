import React from "react";
import RoomCard from "@/components/UI/RoomCard";

const AllRoomsPage = async () => {
  const res = await fetch("http://localhost:5001/rooms", {
    cache: "no-store",
  });

  const rooms = await res.json();

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#0f110f] py-18 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] dark:text-[#f3d7a4] mb-4">
            Explore All Rooms
          </h1>
          <p className="text-gray-600 dark:text-[#a7a29a] max-w-2xl mx-auto text-lg">
            Find the perfect quiet space tailored to your productivity needs.
          </p>
        </div>

        {rooms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl text-gray-400">
              No rooms available at the moment.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllRoomsPage;
