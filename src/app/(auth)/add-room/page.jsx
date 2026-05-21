"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useSession } from "@/lib/auth-client";

const amenitiesOptions = [
  "Whiteboard",
  "Projector",
  "Wi-Fi",
  "Power Outlets",
  "Quiet Zone",
  "Air Conditioning",
];

const AddRoomPage = () => {
  const [loading, setLoading] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const { data: session } = useSession();

  const user = session?.user;

  const handleAmenityChange = (item) => {
    if (selectedAmenities.includes(item)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== item));
    } else {
      setSelectedAmenities([...selectedAmenities, item]);
    }
  };

  const handleAddRoom = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const roomData = {
      name: form.name.value,
      image: form.image.value,
      description: form.description.value,
      floor: form.floor.value,
      seatCapacity: Number(form.capacity.value),
      hourlyRate: Number(form.rate.value),
      amenities: selectedAmenities,

      ownerId: user?.id,
      ownerName: user?.name,
      ownerEmail: user?.email,
      ownerImage: user?.image,

      createdAt: new Date(),
    };

    console.log(roomData);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roomData),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Room added successfully!");
        form.reset();
        setSelectedAmenities([]);
      } else {
        toast.error("Failed to add room");
      }
    } catch (error) {
      toast.error("Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#f6f3ee] dark:bg-[#0b0d0b] px-4 py-18">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-[#f3d7a4]">
            Add Study Room
          </h1>
          <p className="text-sm text-[#666] dark:text-[#a7a29a] mt-2">
            Create a new room for students
          </p>
        </div>

        <div className="rounded-3xl bg-white dark:bg-[#121412] shadow-xl border border-[#d8c1a0]/20 p-6 md:p-8">
          <form onSubmit={handleAddRoom} className="space-y-5">
            <input
              name="name"
              required
              placeholder="Room Name"
              className="w-full rounded-xl border border-[#d8c1a0]/30 px-4 py-3
              bg-[#f8f5ef] dark:bg-[#1c1f1c]
              text-[#1a1a1a] dark:text-white
              placeholder:text-gray-500 dark:placeholder:text-gray-400
              outline-none focus:border-[#ab8e66]"
            />

            <input
              name="image"
              required
              placeholder="Image URL"
              className="w-full rounded-xl border border-[#d8c1a0]/30 px-4 py-3
              bg-[#f8f5ef] dark:bg-[#1c1f1c]
              text-[#1a1a1a] dark:text-white
              placeholder:text-gray-500 dark:placeholder:text-gray-400
              outline-none focus:border-[#ab8e66]"
            />

            <textarea
              name="description"
              required
              rows={4}
              placeholder="Description"
              className="w-full rounded-xl border border-[#d8c1a0]/30 px-4 py-3
              bg-[#f8f5ef] dark:bg-[#1c1f1c]
              text-[#1a1a1a] dark:text-white
              placeholder:text-gray-500 dark:placeholder:text-gray-400
              outline-none focus:border-[#ab8e66]"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                name="floor"
                placeholder="Floor"
                className="rounded-xl border border-[#d8c1a0]/30 px-4 py-3
                bg-[#f8f5ef] dark:bg-[#1c1f1c]
                text-[#1a1a1a] dark:text-white
                placeholder:text-gray-500 dark:placeholder:text-gray-400
                outline-none focus:border-[#ab8e66]"
              />

              <input
                name="capacity"
                type="number"
                placeholder="Capacity"
                className="rounded-xl border border-[#d8c1a0]/30 px-4 py-3
                bg-[#f8f5ef] dark:bg-[#1c1f1c]
                text-[#1a1a1a] dark:text-white
                placeholder:text-gray-500 dark:placeholder:text-gray-400
                outline-none focus:border-[#ab8e66]"
              />

              <input
                name="rate"
                type="number"
                placeholder="Rate"
                className="rounded-xl border border-[#d8c1a0]/30 px-4 py-3
                bg-[#f8f5ef] dark:bg-[#1c1f1c]
                text-[#1a1a1a] dark:text-white
                placeholder:text-gray-500 dark:placeholder:text-gray-400
                outline-none focus:border-[#ab8e66]"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {amenitiesOptions.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 text-sm
                  text-[#1a1a1a] dark:text-[#d6c8ae]"
                >
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(item)}
                    onChange={() => handleAmenityChange(item)}
                    className="accent-[#ab8e66]"
                  />
                  {item}
                </label>
              ))}
            </div>

            <button
              disabled={loading}
              className="w-full mt-4 rounded-xl bg-[#ab8e66] py-3 font-semibold text-white
              hover:bg-[#947651] transition disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Room"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddRoomPage;
