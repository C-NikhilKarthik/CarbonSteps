import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#663a14] w-full pt-16 px-10 pb-6">
      <div className="flex w-full pb-8">
        <div className=" text-[#91a559] w-[400px] text-xl font-bold">
          Eco<span className="text-[#bc6c25]">Tracker</span>
        </div>
        <div className="flex-1 text-sm grid md:grid-cols-3 gap-4 grid-cols-1">
          <div className="flex text-color3 flex-col gap-2">
            <span className="text-lg">Quick Links</span>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Products</Link>
            <Link href={"/"}>Partners</Link>
          </div>

          <div className="flex text-color3 flex-col gap-2">
            <span className="text-lg">Company</span>
            <Link href={"/"}>Mission</Link>
            <Link href={"/"}>Team</Link>
            <Link href={"/"}>Careers</Link>
            <Link href={"/"}>Contact</Link>
          </div>

          <div className="flex text-color3 flex-col gap-2">
            <span className="text-lg">Stay Connected</span>
            <Link href={"/"}>Facebook</Link>
            <Link href={"/"}>Twitter</Link>
            <Link href={"/"}>Instagram</Link>
            <Link href={"/"}>LinkedIn</Link>
          </div>
        </div>
      </div>
      <div className="text-color3 text-xs text-center w-full">
        © 2024 EcoTracker, Inc. All rights reserved.
      </div>
    </footer>
  );
}
