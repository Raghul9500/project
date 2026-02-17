"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">MyStartup</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="#">Home</Link>
          <Link href="#">Features</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-center">
          <Link href="#">Home</Link>
          <Link href="#">Features</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </div>
      )}
    </nav>
  );
}
