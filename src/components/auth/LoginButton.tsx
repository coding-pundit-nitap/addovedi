"use client";

import Home from "@/app/page";

export default function LogInButton() {
  return (
    <button
      onClick={Home}
      className="bg-gradient-to-r from-[#00C6FF] to-[#0072FF] hover:shadow-xl hover:from-[#0090cc] hover:to-[#0055aa] text-xl font-medium p-2 rounded-lg mt-2"
    >
      Login
    </button>
  );
}
