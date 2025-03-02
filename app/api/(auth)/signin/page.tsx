"use client";

import Image from "next/image";
import gradient from "@/app/assets/gradient.png";
import { Auth } from "@/app/components/Auth";

export default function Signin() {
  return (
    <main className="grid lg:grid-cols-2 h-screen">
      <Auth isSignup={false} />
      <div className="relative lg:block hidden px-4 py-5">
        <Image
          src={gradient}
          alt="Decorative background gradient"
          className="object-cover rounded-xl w-full h-full"
        />
        <div className="absolute flex flex-col justify-center items-center inset-0 z-10">
          <h1 className="text-[48px] font-semibold tracking-tighter leading-none">
            Welcome Back
          </h1>
          <p className="text-[18px] font-semibold">
            Log in and pick up where you left off!
          </p>
          <div className="space-y-6 mt-8">
            <div className="p-3.5 bg-white text-black rounded-xl font-semibold w-[300px] text-center text-lg">
              Access your account
            </div>
            <div className="p-3.5 bg-white/30 rounded-xl font-semibold w-[300px] text-center text-lg">
              Choose Your Preferences
            </div>
            <div className="p-3.5 bg-white/30 rounded-xl font-semibold w-[300px] text-center text-lg">
              Get Recommendations
            </div>
            <div className="p-3.5 bg-white/30 rounded-xl font-semibold w-[300px] text-center text-lg">
              Save & Share
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
