import React from "react";
import { FaCar } from "react-icons/fa";

export default function Information() {
  return (
    <section className="bg-color3 w-full">
      <div className="w-full flex flex-col items-center md:flex-row py-24">
        <div className="md:max-w-lg w-full px-10">
          <span className="text-2xl text-slate-900  ">
            Unlock the Power of Sustainable Living
          </span>
          <div className="bg-slate-900 p-8 mt-6 items-center rounded text-white flex gap-6">
            <FaCar className="text-2xl" />
            <span className="">
              Streamline your commute with our intuitive tracking tools
            </span>
          </div>
        </div>
        <div className="flex-1 w-full">
          <span className="text-slate-900 text-2xl">
            Sustainability Tracker in
          </span>
          <div className="bg-white text-color4 rounded p-4">
            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="w-full py-24 flex flex-col items-center md:flex-row ">
        <div className="w-full md:w-2/5"></div>
        <div className="w-full md:w-3/5 border border-color1 p-16">
          <div className="text-color1 font-semibold text-2xl">
            Tailored Recommendations
          </div>
          <div className="text-color4 mt-2">
            Harness the power of our Sustainability Tracker to make informed
            decisions, reduce your carbon footprint, and contribute to a greener
            future. Unlock personalized insights, track your progress
          </div>
        </div>
      </div>
    </section>
  );
}
