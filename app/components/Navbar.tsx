"use client";

import Link from "next/link";
import { useState } from "react";
import AnimatedMenu from "../components/AnimatedMenu";
import { usePathname } from "next/navigation";

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
                <NavMenuItems className="hidden md:flex gap-5 justify-center"></NavMenuItems>

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
                <NavMenuItems className="dropdown-menu" />
            </AnimatedMenu>
        </nav>
    );
}

type NavMenuItemsProps = {
  className?: string;
};

export const NavMenuItems = ({ className="" }: NavMenuItemsProps) => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "link hover:text-accent hover:font-bold" : "std-text transition-colors hover:text-accent hover:font-bold";

  return (
    <div className={className}>
      <Link href="/about" className={isActive("/about")}>About</Link>
      <Link href="/projects" className={isActive("/projects")}>Projects</Link>
      <Link href="/illustration" className={isActive("/illustration")}>Illustration</Link>
      <Link href="/cat" className={isActive("/cat")}>Cat</Link>
      <Link href="/contact" className={isActive("/contact")}>Contact</Link>
    </div>
  );
};