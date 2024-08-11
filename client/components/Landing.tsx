import React from "react";

export default function Landing() {
  return (
    <section className="min-h-[100dvh] relative w-full flex items-center justify-center">
      <div className="max-w-5xl flex flex-col gap-4 items-center">
        <span className="text-[clamp(36px,4vw,52px)] font-semibold tracking-tight leading-[1] text-color1">
          Track Your Carbon Footprint.
        </span>
        <span className="text-[clamp(30px,4vw,44px)] tracking-tight leading-[0.8] font-semibold  text-color1">
          Embrace a Greener Future.
        </span>
        <div className="text-[#787d69] text-center mx-auto max-w-3xl">
          Empower your journey towards a sustainable lifestyle with our
          comprehensive Sustainability Tracker. Easily monitor and optimize your
          carbon footprint across commute, energy usage
        </div>
        <div className="flex gap-6">
          <button className="w-fit px-6 py-2 rounded text-[#dda15e] bg-[#bc6c25]">
            Get Started
          </button>
          <button className="rounded w-fit px-6 py-2 bg-black text-white">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
