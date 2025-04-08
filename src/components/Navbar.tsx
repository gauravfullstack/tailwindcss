"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <div className="text-xl font-bold">Logo</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <Link href="/" className="block px-4 py-2">Home</Link>
          <Link href="/about" className="block px-4 py-2">About</Link>
          <Link href="/contact" className="block px-4 py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
}
