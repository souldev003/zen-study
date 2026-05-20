import Link from "next/link";
import React from "react";

const RoomDetailsButton = ({ _id }) => {
  return (
    <Link href={`/rooms/${_id}`} className="mt-6">
      <button className="w-full cursor-pointer rounded-2xl bg-[#ab8e66] hover:bg-[#c5a880] py-3.5 font-semibold text-[#131514] transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-[#ab8e66]/20">
        View Details
      </button>
    </Link>
  );
};

export default RoomDetailsButton;
