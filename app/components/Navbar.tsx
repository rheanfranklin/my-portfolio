"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
            <nav
                className="fixed top-15 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl px-6 pt-17 pb-10 bg-black/75 backdrop-blur-md shadow-sm z-50 flex flex-col"
            >
            {/* Top Row — Centered Logo */}
            <div className="w-full text-center mb-7">
                <Link href="/" className="font-code font-bold text-brand">
                RHEANNON FRANKLIN PORTFOLIO
                </Link>
                <p className="text-[14px] text-gray-400 mt-4">Full Stack Software Developer</p>

            </div>

            {/* Divider */}
            <hr className="border-t-1 border-accent w-3/4 mx-auto mb-7" />

            {/* Bottom Row — Navigation */}
            <div className="flex items-center justify-between max-w-6xl mx-auto text-base">

                {/* Desktop Links */}
                <div className="hidden md:flex gap-10 text-brand font-medium ">
                    <Link href="/about" className="hover:text-accent transition">About</Link>
                    <Link href="/projects" className="hover:text-accent transition">Projects</Link>
                    <Link href="/illustration" className="hover:text-accent transition">Illustration</Link>
                    <Link href="/philosophy" className="hover:text-accent transition">Philosophy</Link>
                    <Link href="/contact" className="hover:text-accent transition">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-200 text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-6 py-10 bg-black/10 backdrop-blur-md shadow-inner text-[20px] mt-3 rounded-lg">
                <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                <Link href="/illustration" onClick={() => setIsOpen(false)}>Illustration</Link>
                <Link href="/philosophy" onClick={() => setIsOpen(false)}>Philosophy</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}