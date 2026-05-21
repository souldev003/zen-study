"use client";

import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export function CancelRoomBooking({ booking, onSuccess }) {
  const [loading, setLoading] = useState(false);

  const handleCancel = async () => {
    const { data: tokenData } = await authClient.token();

    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5001/bookings/${booking._id}/cancel`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
        },
      );

      if (!res.ok) {
        throw new Error("Cancel failed");
      }

      toast.success("Booking cancelled successfully");

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
      <Button className="w-full lg:w-auto px-4 py-2 rounded-xl text-sm font-semibold bg-red-500 hover:bg-red-600 text-white transition">
        Cancel
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-md rounded-2xl bg-white dark:bg-[#181a18]">
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className="text-[#1a1a1a] dark:text-white">
                Cancel Booking?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Are you sure you want to cancel booking for{" "}
                <strong>{booking.roomName}</strong>? This action cannot be
                undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="flex gap-3">
              <Button slot="close" variant="tertiary" className="w-full">
                Keep Booking
              </Button>

              <Button
                onClick={handleCancel}
                disabled={loading}
                variant="danger"
                className="w-full bg-red-500 hover:bg-red-600 text-white"
              >
                {loading ? "Cancelling..." : "Yes, Cancel"}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
