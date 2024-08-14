"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full p-6 md:px-20 fixed top-0 left-0 flex bg-color3/50 z-20 backdrop-blur justify-between items-center">
      <div className=" text-[#91a559] text-xl font-bold">
        Eco<span className="text-[#bc6c25]">Tracker</span>
      </div>
      <div className="hidden md:flex items-center gap-6">
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

      <button
        onClick={() => setOpen(!open)}
        className="bg-black flex md:hidden rounded-full p-2"
      >
        <GiHamburgerMenu className="text-xl text-white" />
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-screen p-6 bg-black/60 backdrop-blur z-50 flex flex-col transition-all duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full items-center justify-between">
          <div className=" text-[#91a559] text-xl font-bold">
            Eco<span className="text-[#bc6c25]">Tracker</span>
          </div>
          <button onClick={() => setOpen(!open)} className="p-2">
            <IoClose className="text-xl text-white" />
          </button>
        </div>

        <div className="flex flex-col pt-20 items-center text-white gap-4">
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
      </div>
    </nav>
  );
}
