"use client";

import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f5ef] dark:bg-[#0f1110]">
      <HashLoader size={60} color="#ab8e66" />
    </div>
  );
}
