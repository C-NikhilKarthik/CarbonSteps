import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full p-6 px-20 fixed top-0 left-0 flex bg-color3/50 z-20 backdrop-blur justify-between items-center">
      <div className=" text-[#91a559] text-xl font-bold">
        Eco<span className="text-[#bc6c25]">Tracker</span>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/" className="">
          Home
        </Link>
        <Link href="/" className="">
          About
        </Link>
        <Link href="/" className="">
          Products
        </Link>
        <Link href="/" className="">
          Partners
        </Link>
        <button className="bg-black rounded text-white py-2 px-4">
          Contact
        </button>
      </div>
    </nav>
  );
}
