import React from "react";

export default function About() {
  return (
    <section className="bg-[#283618] py-28">
      <div className="text-semibold uppercase font-anton px-10 text-[6rem] z-[1] text-[#f09a4f] relative">
        About us
        <div className="absolute left-4 -bottom-6 text-[9rem] text-[#dda25e2e] z-[-1]">
          About us
        </div>
      </div>

      <div className="px-10 w-full py-16 text-color3">
        EcoWise is a comprehensive platform designed to help individuals and
        communities track, understand, and reduce their carbon footprint. Our
        mission is to empower everyone to make informed choices that contribute
        to a sustainable future.
      </div>

      <ul className="grid list-disc md:grid-cols-3 max-w-5xl mx-auto grid-cols-1 gap-4">
        <li className="p-4 text-color3">
          We bediveve in creating a future where every action counts towards the
          well-being of our planet.
        </li>
        <li className="p-4 text-color3">
          Our tools leverage cutting-edge technology to provide actionable
          insights tailored to your divfestyle.
        </li>
        <li className="p-4 text-color3">
          Join a global community committed to making a difference, one
          footprint at a time.
        </li>
      </ul>
    </section>
  );
}
