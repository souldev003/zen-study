"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export function DeleteRoom({ room }) {
  const handleDelete = async (id) => {
    const { data: tokenData } = await authClient.token();
    const res = await fetch(`http://localhost:5001/rooms/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    });
    const data = await res.json();

    if (data.deletedCount > 0) {
      toast.success("Room deleted successfully!");
    }
    redirect("/rooms");
  };

  return (
    <AlertDialog>
      <Button
        variant="danger"
        className="cursor-pointer rounded-xl border border-[#d42d21] px-8 py-6 bg-[#d42d21] transition-all duration-300 hover:bg-white dark:hover:bg-[#181A18] dark:hover:text-[#d42d21] hover:text-[#d42d21]"
      >
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete {room.name} permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{room.name}</strong> and
                all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                slot="close"
                onClick={() => {
                  handleDelete(room._id);
                }}
                variant="danger"
              >
                Delete Room
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
