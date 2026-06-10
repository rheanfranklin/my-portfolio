"use client";

import "./Navbar.css"
import Link from "next/link";
import { useState } from "react";
import AnimatedMenu from "../components/AnimatedMenu";
import { usePathname } from "next/navigation";


// Constructing Nav bar
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="container-box text-center">
            {/* Bottom Row — Navigation */}
            <div>
                
                {/* Desktop Links */}
                <NavMenuItems className="hidden md:flex gap-20 justify-center"></NavMenuItems>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-200 text-2xl mx-auto mb-20 "
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

// Menu items
type NavMenuItemsProps = {
  className?: string;
};

export const NavMenuItems = ({ className="" }: NavMenuItemsProps) => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "link hover:text-accent hover:font-bold" : "std-text transition-colors hover:text-accent hover:font-bold";

  return (
    <div className={className}>
        <Link href="/" className={isActive("/")}>Home</Link>
      <Link href="/about" className={isActive("/about")}>About</Link>
      <Link href="/skills" className={isActive("/skills")}>Skills</Link>
      <Link href="/projects" className={isActive("/projects")}>Projects</Link>
      <Link href="/cat" className={isActive("/cat")}>Cat</Link>
      <Link href="/contact" className={isActive("/contact")}>Contact</Link>
    </div>
  );
};