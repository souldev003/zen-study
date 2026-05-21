import RoomListClient from "@/components/UI/RoomListClient";
import React from "react";

export const metadata = {
  title: "All Rooms | Zen Study",
  description:
    "Explore and book our premium quiet study rooms tailored to your productivity needs.",
  keywords: ["study room", "quiet space", "co-working", "booking", "zen study"],
};

const AllRoomsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`, {
    cache: "no-store",
  });

  const rooms = await res.json();

  return <RoomListClient rooms={rooms} />;
};

export default AllRoomsPage;
