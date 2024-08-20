"use client";
import React, { useState } from "react";
import { PiAirplaneInFlightDuotone } from "react-icons/pi";
import { IoCarSport } from "react-icons/io5";
import { BiSolidTrain } from "react-icons/bi";
import { FaBusAlt } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";

export default function Page() {
  const [option, setOption] = useState(0);
  const [from, setFrom] = useState("Delhi");
  const [fromDetail, setFromDetail] = useState("DEL Airport");
  const [to, setTo] = useState("Bangalore");
  const [toDetail, setToDetail] = useState("KSR Airport");
  const [time, setTime] = useState("00:00");
  const [carbonEmission, setCarbonEmission] = useState<number | null>(null);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const home = `${fromDetail}, ${from}`;
    const work = `${toDetail}, ${to}`;
    const transportOptions = ["plane", "train", "bus", "car", "bike"];
    const transportation = transportOptions[option];

    const prompt1 = `You are a helpful assistant and are dealing with calculating an approximate value of individual carbon emission through ${transportation} transportation mode. The source point is ${home} and destination is ${work}, and roughly travel time is of ${time}. Based on the data, estimate the amount of carbon emission of the individual. Be to the point and work on what the generic values of each are and return AN INTEGER APPROXIMATION.Do not give me any textual data only the integer`;

    const prompt2 = `You are a helpful assistant and are dealing with calculating an approximate value of individual carbon emission through ${transportation} transportation mode. The source point is ${home} and destination is ${work}, and roughly travel time is of ${time}. Based on the data, estimate the amount of carbon emission of the individual. Be to the point and tell me pointwise steps to curb the emission. JUST RETURN YOUR ANSWER FOCUSSING ON STEPS TO CURB AND NOTHING ELSE.`;

    const payload = {
      prompt1,
      prompt2,
    };

    // console.log(payload);

    try {
      console.log("Sending request to the backend...");
      const response = await fetch(
        "https://carbonsteps.onrender.com/llm/fetch_result",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      // console.log("Request sent, awaiting response...");

      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // console.log("Response received, processing response...");

      const result = await response.json();

      // console.log("Response processed, setting state with result:", result);

      setCarbonEmission(result.result1);
      setSuggestion(
        result.result2
          .replace(/\*\*/g, "") // Removes all **
          .replace(/\\n/g, "\n")
      );
    } catch (error) {
      console.error("Error occurred during the fetch operation:", error);
    }
  };

  return (
    <main className="min-h-screen w-full">
      <div className="h-screen p-4 md:h-[80vh] bg-[url('/trackbg.jpg')] bg-cover w-full relative flex-col flex items-center justify-center gap-4 bg-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl w-full rounded-lg pt-20 bg-white z-[1] flex justify-center mx-auto relative p-4"
        >
          <div className="absolute overflow-x-auto px-4 top-0 justify-center -translate-y-1/2 w-4/5 bg-white z-10 shadow-lg rounded-lg py-4 flex items-center">
            <div className="flex relative items-center px-2 h-full w-fit">
              <div
                onClick={() => setOption(0)}
                className="flex flex-col w-[100px] cursor-pointer items-center h-full justify-between p-4"
              >
                <PiAirplaneInFlightDuotone className="text-4xl" />
                <span className="text-xs">Plane</span>
              </div>
              <div
                onClick={() => setOption(1)}
                className="flex flex-col w-[100px] cursor-pointer items-center h-full justify-between"
              >
                <BiSolidTrain className="text-3xl" />
                <span className="text-xs">Train</span>
              </div>
              <div
                onClick={() => setOption(2)}
                className="flex flex-col w-[100px] cursor-pointer items-center h-full justify-between"
              >
                <FaBusAlt className="text-2xl" />
                <span className="text-xs">Bus</span>
              </div>
              <div
                onClick={() => setOption(3)}
                className="flex flex-col w-[100px] cursor-pointer items-center h-full justify-between p-2 rounded"
              >
                <IoCarSport className="text-3xl" />
                <span className="text-xs">Car</span>
              </div>
              <div
                onClick={() => setOption(4)}
                className="flex flex-col w-[100px] cursor-pointer items-center h-full justify-between"
              >
                <FaMotorcycle className="text-3xl" />
                <span className="text-xs">Bike</span>
              </div>
              <div
                className="absolute -bottom-2 h-1 w-[100px] rounded transition-all duration-500 bg-color6"
                style={{ transform: `translateX(${option * 100}%)` }}
              />
              <div
                className="absolute w-[100px] transition-all duration-500 bg-color6/10 aspect-square border rounded border-color6/50"
                style={{ transform: `translateX(${option * 100}%)` }}
              />
            </div>
          </div>

          <div className="w-full rounded border border-slate-400 flex flex-col md:flex-row">
            <div className="p-3 px-6 flex flex-col cursor-pointer flex-none w-full max-w-[300px] transition-all duration-500 text-black border-b md:border-r border-slate-400">
              <span className="">From</span>
              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="border-none text-2xl font-semibold mt-3 leading-[0.8] outline-none w-full focus:ring-none bg-transparent"
              />
              <input
                value={fromDetail}
                onChange={(e) => setFromDetail(e.target.value)}
                className="border-none text-sm outline-none w-full focus:ring-none bg-transparent"
              />
            </div>

            <div className="p-3 px-6 flex flex-col cursor-pointer flex-none w-full max-w-[300px] transition-all duration-500 text-black border-b md:border-r border-slate-400">
              <span className="">To</span>
              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="border-none text-2xl font-semibold mt-3 leading-[0.8] outline-none w-full focus:ring-none bg-transparent"
              />
              <input
                value={toDetail}
                onChange={(e) => setToDetail(e.target.value)}
                className="border-none text-sm outline-none w-full focus:ring-none bg-transparent"
              />
            </div>

            <div className="p-3 px-6 flex flex-col cursor-pointer w-full transition-all duration-500 text-black">
              <label
                htmlFor="time"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Select time:
              </label>
              <div className="flex">
                <input
                  type="time"
                  id="time"
                  className="rounded-none group rounded-s-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block flex-1 w-full text-sm border-gray-300 p-2.5"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-s-0 border-s-0 border-gray-300 rounded-e-md">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-color2 absolute -bottom-20 text-white px-4 py-2 rounded"
          >
            Estimate
          </button>
        </form>
      </div>

      <div className="w-full py-24 px-2">
        <div className="max-w-3xl bg-gradient-to-b from-[#565656] to-[#333235] shadow-cus z-10 flex flex-col mx-auto rounded-xl">
          <div className="border-b relative flex border-b-[#a5a5a5] p-4">
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-xl font-semibold text-[#a5a5a5]">
                Result
              </span>
              <span className="text-white text-sm">
                Your Carbon Emission (in grams)
              </span>
            </div>
            <div className="flex-none text-4xl font-semibold text-white">
              {carbonEmission}
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <span className="text-xl font-semibold text-[#a5a5a5]">
              Suggestions
            </span>
            <span className="text-white">{suggestion}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
