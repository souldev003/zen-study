"use client";

import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useState } from "react";

export function ConfirmRoomBooking({ booking, onSuccess }) {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5001/bookings/${booking._id}/confirm`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!res.ok) {
        throw new Error("Confirm failed");
      }

      toast.success("Booking confirmed successfully");

      window.location.reload();

      if (onSuccess) onSuccess(booking._id);
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog>
      <Button className="w-full lg:w-auto px-4 py-2 rounded-xl text-sm font-semibold bg-green-600 hover:bg-green-700 text-white transition">
        Confirm
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-md rounded-2xl bg-white dark:bg-[#181a18]">
            <AlertDialog.Header>
              <AlertDialog.Icon status="success" />
              <AlertDialog.Heading className="text-[#1a1a1a] dark:text-white">
                Confirm Booking?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Are you sure you want to confirm booking for{" "}
                <strong>{booking.roomName}</strong>?
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="flex gap-3">
              <Button slot="close" variant="tertiary" className="w-full">
                Cancel
              </Button>

              <Button
                onClick={handleConfirm}
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                {loading ? "Confirming..." : "Yes, Confirm"}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
