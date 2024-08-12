import React from "react";
import Image from 'next/image';
import footerImage from "../public/ct3.webp"; // Adjust the path based on your project structure

export default function Landing() {
  return (
    <section className="min-h-[100dvh] relative w-full flex flex-col items-center justify-center pt-16">
      <div className="max-w-5xl flex flex-col gap-4 items-center">
        <span className="text-[clamp(36px,4vw,52px)] font-semibold tracking-tight leading-tight text-color1">
          Track Your Carbon Footprint.
        </span>
        <span className="text-[clamp(30px,4vw,44px)] tracking-tight leading-tight font-semibold text-color1">
          Embrace a Greener Future.
        </span>
        <div className="text-[#787d69] text-center mx-auto max-w-3xl">
          Empower your journey towards a sustainable lifestyle with our
          comprehensive Sustainability Tracker. Easily monitor and optimize your
          carbon footprint across commute, energy usage
        </div>
        <div className="flex gap-6 mt-4">
          <button className="w-fit px-6 py-2 rounded text-[#000000] bg-[#b4ca76]">
            Get Started
          </button>
          <button className="rounded w-fit px-6 py-2 bg-black text-white">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full mt-8">
        <Image 
          src={footerImage} 
          alt="Footer Image" 
          layout="responsive" 
          objectFit="cover" 
          className="max-h-[300px]"
        />
      </div>
    </section>
  );
}
