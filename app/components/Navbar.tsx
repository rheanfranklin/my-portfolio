"use client";

import Link from "next/link";
import { useState } from "react";
import AnimatedMenu from "../components/AnimatedMenu";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="container-box text-center">
            {/* Top Row — Centered Logo */}
            <div>
                <Link href="/" className="header">
                    RHEANNON FRANKLIN PORTFOLIO
                </Link>
                <p className="caption">Full Stack Software Developer</p>
            </div>

            {/* Divider */}
            <hr className="divider" />

            {/* Bottom Row — Navigation */}
            <div>
                {/* Desktop Links */}
                <div className="hidden md:flex gap-10 justify-center">
                    <Link href="/about" className="hover:text-accent transition">About</Link>
                    <Link href="/projects" className="hover:text-accent transition">Projects</Link>
                    <Link href="/illustration" className="hover:text-accent transition">Illustration</Link>
                    <Link href="/philosophy" className="hover:text-accent transition">Philosophy</Link>
                    <Link href="/contact" className="hover:text-accent transition">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-200 text-2xl mx-auto mb-5 "
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatedMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/illustration">Illustration</Link>
                <Link href="/philosophy">Philosophy</Link>
                <Link href="/contact">Contact</Link>
            </AnimatedMenu>
        </nav>
    );
}