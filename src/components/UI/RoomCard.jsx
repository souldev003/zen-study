/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import RoomDetailsButton from "./RoomDetailsButton";

const RoomCard = ({ room }) => {
  const {
    _id,
    name,
    image,
    description,
    floor,
    seatCapacity,
    hourlyRate,
    amenities,
  } = room;

  const visibleAmenities = amenities?.slice(0, 3);
  const extraAmenities = amenities?.length - 3;

  return (
    <div className="group h-full overflow-hidden rounded-[28px] border border-[#d8c1a0]/30 bg-white dark:bg-[#181a18] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-[#f3d7a4]/90 px-4 py-1 text-xs sm:text-sm font-semibold text-[#131514] backdrop-blur-md">
            Floor {floor}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h2 className="text-2xl font-bold text-[#1a1a1a] dark:text-[#f3d7a4] line-clamp-1">
          {name}
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#666] dark:text-[#a7a29a] line-clamp-3 flex-1">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="rounded-2xl bg-[#f8f5ef] dark:bg-[#222522] px-4 py-3 text-center flex-1">
            <p className="text-xs text-[#888] dark:text-[#888]">Capacity</p>

            <h3 className="mt-1 text-lg font-bold text-[#1a1a1a] dark:text-white">
              {seatCapacity}
            </h3>
          </div>

          <div className="rounded-2xl bg-[#f8f5ef] dark:bg-[#222522] px-4 py-3 text-center flex-1">
            <p className="text-xs text-[#888] dark:text-[#888]">
              Rate Per Hour
            </p>

            <h3 className="mt-1 text-lg font-bold text-[#ab8e66]">
              ${hourlyRate}
            </h3>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {visibleAmenities?.map((item, index) => (
            <span
              key={index}
              className="rounded-full border border-[#d8c1a0]/40 bg-[#f8f5ef] dark:bg-[#222522] px-3 py-1 text-xs font-medium text-[#5f574b] dark:text-[#d6c8ae]"
            >
              {item}
            </span>
          ))}

          {extraAmenities > 0 && (
            <span className="rounded-full border border-[#d8c1a0]/40 bg-[#f8f5ef] dark:bg-[#222522] px-3 py-1 text-xs font-medium text-[#ab8e66]">
              +{extraAmenities} more
            </span>
          )}
        </div>

        <RoomDetailsButton _id={_id} />
      </div>
    </div>
  );
};

export default RoomCard;
