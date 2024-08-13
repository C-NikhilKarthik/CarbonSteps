import React from "react";
import { PiAirplaneInFlightDuotone } from "react-icons/pi";
import { IoCarSport } from "react-icons/io5";
import { BiSolidTrain } from "react-icons/bi";
import { FaBusAlt } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";

export default function Page() {
  return (
    <main className="min-h-screen w-full">
      <div className="h-[60vh] bg-[url('/trackbg.jpg')] bg-cover w-full flex items-center bg-center">
        <div className="max-w-4xl w-full rounded-lg pt-14 bg-white z-[1] flex justify-center mx-auto relative p-4">
          <div className="absolute top-0 justify-evenly -translate-y-1/2 w-4/5 bg-white z-10 shadow-lg rounded-lg p-4 flex items-center">
            <div className="flex flex-col items-center h-full justify-between">
              <PiAirplaneInFlightDuotone className="text-4xl" />
              <span className="text-xs">Plane</span>
            </div>
            <div className="flex flex-col items-center h-full justify-between">
              <BiSolidTrain className="text-3xl" />
              <span className="text-xs">Train</span>
            </div>
            <div className="flex flex-col items-center h-full justify-between">
              <FaBusAlt className="text-2xl" />
              <span className="text-xs">Bus</span>
            </div>
            <div className="flex flex-col items-center h-full justify-between">
              <IoCarSport className="text-3xl" />
              <span className="text-xs">Car</span>
            </div>
            <div className="flex flex-col items-center">
              <FaMotorcycle className="text-3xl" />
              <span className="text-xs">Bike</span>
            </div>
          </div>

          <div className="w-full rounded border border-slate-400 flex">
            <div className="p-3 px-6 hover:bg-color6/30 flex flex-col cursor-pointer max-w-[300px] transition-all duration-500 text-black border-r border-slate-400">
              <span className="">From</span>
              <input
                defaultValue={"Delhi"}
                className="border-none text-2xl font-semibold mt-3 leading-[0.8] outline-none w-full focus:ring-none bg-transparent"
              />
              <input
                defaultValue={"DEL Airport"}
                className="border-none text-sm outline-none w-full focus:ring-none bg-transparent"
              />
            </div>

            <div className="p-3 px-6 hover:bg-color6/30 flex flex-col cursor-pointer max-w-[300px] transition-all duration-500 text-black border-r border-slate-400">
              <span className="">To</span>
              <input
                defaultValue={"Bangalore"}
                className="border-none text-2xl font-semibold mt-3 leading-[0.8] outline-none w-full focus:ring-none bg-transparent"
              />
              <input
                defaultValue={"KSR Airport"}
                className="border-none text-sm outline-none w-full focus:ring-none bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
