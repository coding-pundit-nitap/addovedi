"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function GoogleSignInButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="w-full flex items-center justify-center gap-4 bg-white  hover:bg-gray-100  rounded-lg p-1"
    >
      <Image src="/download.png" alt="google" width={40} height={40} />
      <p className="text-black font-medium">Sign in with Google</p>
    </button>
  );
}
