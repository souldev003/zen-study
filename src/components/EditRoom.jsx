"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Button, Modal } from "@heroui/react";

const amenitiesOptions = [
  "WiFi",
  "Air Conditioning",
  "Whiteboard",
  "Charging Ports",
  "Projector",
  "Quiet Zone",
];

const normalize = (str) =>
  str?.toLowerCase().replace(/\s+/g, "").replace(/-/g, "");

export function EditRoom({ room, onUpdate }) {
  const [open, setOpen] = useState(false);

  const [selectedAmenities, setSelectedAmenities] = useState(
    room.amenities?.map(normalize) || [],
  );

  const handleAmenityChange = (item) => {
    setSelectedAmenities((prev) =>
      prev.includes(item) ? prev.filter((a) => a !== item) : [...prev, item],
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: tokenData } = await authClient.token();

    const formData = new FormData(e.target);

    const updatedData = {
      name: formData.get("name"),
      image: formData.get("image"),
      description: formData.get("description"),
      floor: formData.get("floor"),
      seatCapacity: Number(formData.get("capacity")),
      hourlyRate: Number(formData.get("rate")),
      amenities: selectedAmenities.map(
        (a) => amenitiesOptions.find((opt) => normalize(opt) === a) || a,
      ),
    };

    try {
      const res = await fetch(`http://localhost:5001/rooms/${room._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        authorization: `Bearer ${tokenData?.token}`,
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        setOpen(false);
        toast.success("Room updated successfully!");
        onUpdate?.();
      } else {
        toast.error("Update failed!");
      }
    } catch (err) {
      toast.error("Server error!");
    }
  };

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Button
        onClick={() => setOpen(true)}
        variant="bordered"
        className="border px-8 py-6 border-[#ab8e66] text-[#ab8e66] hover:text-white hover:bg-[#ab8e66] rounded-xl transition-all duration-300"
      >
        Edit Room
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog
            className="
              w-[95%] sm:w-[90%] md:max-w-xl
              max-h-[90vh] overflow-y-auto
              rounded-2xl sm:rounded-3xl
              border border-[#d8c1a0]/20
              bg-white dark:bg-[#121412]
              text-[#1a1a1a] dark:text-white
            "
          >
            <Modal.CloseTrigger />

            <Modal.Header className="px-4 sm:px-6 pt-5">
              <Modal.Heading className="text-xl sm:text-2xl font-bold">
                Edit Room
              </Modal.Heading>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Update your study room details
              </p>
            </Modal.Header>

            <Modal.Body className="px-4 sm:px-6 py-4 sm:py-5">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  defaultValue={room.name}
                  placeholder="Room Name"
                  className="w-full px-3 py-3 rounded-xl border border-[#d8c1a0] bg-[#f8f5ef] text-[#1a1a1a]! placeholder:text-gray-500 dark:bg-[#1c1f1c] dark:border-[#555] dark:text-white! dark:placeholder:text-gray-400 outline-none text-sm"
                />

                <input
                  name="image"
                  defaultValue={room.image}
                  placeholder="Image URL"
                  className="w-full px-3 py-3 rounded-xl border border-[#d8c1a0] bg-[#f8f5ef] text-[#1a1a1a]! placeholder:text-gray-500 dark:bg-[#1c1f1c] dark:border-[#555] dark:text-white! dark:placeholder:text-gray-400 outline-none text-sm"
                />

                <textarea
                  name="description"
                  defaultValue={room.description}
                  rows={3}
                  placeholder="Description"
                  className="w-full px-3 py-3 rounded-xl border border-[#d8c1a0] bg-[#f8f5ef] text-[#1a1a1a]! placeholder:text-gray-500 dark:bg-[#1c1f1c] dark:border-[#555] dark:text-white! dark:placeholder:text-gray-400 outline-none text-sm"
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    name="floor"
                    defaultValue={room.floor}
                    placeholder="Floor"
                    className="w-full px-3 py-3 rounded-xl border border-[#d8c1a0] bg-[#f8f5ef] text-[#1a1a1a]! placeholder:text-gray-500 dark:bg-[#1c1f1c] dark:border-[#555] dark:text-white! dark:placeholder:text-gray-400 outline-none text-sm"
                  />

                  <input
                    name="capacity"
                    defaultValue={room.seatCapacity}
                    placeholder="Capacity"
                    className="w-full px-3 py-3 rounded-xl border border-[#d8c1a0] bg-[#f8f5ef] text-[#1a1a1a]! placeholder:text-gray-500 dark:bg-[#1c1f1c] dark:border-[#555] dark:text-white! dark:placeholder:text-gray-400 outline-none text-sm"
                  />

                  <input
                    name="rate"
                    defaultValue={room.hourlyRate}
                    placeholder="Rate"
                    className="w-full px-3 py-3 rounded-xl border border-[#d8c1a0] bg-[#f8f5ef] text-[#1a1a1a]! placeholder:text-gray-500 dark:bg-[#1c1f1c] dark:border-[#555] dark:text-white! dark:placeholder:text-gray-400 outline-none text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {amenitiesOptions.map((item) => {
                    const n = normalize(item);

                    return (
                      <label
                        key={item}
                        className="flex items-center gap-2 text-xs sm:text-sm"
                      >
                        <input
                          type="checkbox"
                          checked={selectedAmenities.includes(n)}
                          onChange={() => handleAmenityChange(n)}
                          className="accent-[#ab8e66]"
                        />
                        {item}
                      </label>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-[#ab8e66] hover:bg-[#8f754f] text-white rounded-xl"
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
