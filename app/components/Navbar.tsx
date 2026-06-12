"use client";

import "./Navbar.css"
import Link from "next/link";
import { useState } from "react";
import AnimatedMenu from "../components/AnimatedMenu";
import { usePathname } from "next/navigation";

export const NAV_LINKS = {
  home: "/",
  about: "/about",
  skills: "/skills",
  projects: "/projects",
  cat: "/cat",
  contact: "/contact"
}

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
      <Link href={NAV_LINKS.home} className={isActive(NAV_LINKS.home)}>HOME</Link>
      <Link href={NAV_LINKS.about} className={isActive(NAV_LINKS.about)}>ABOUT</Link>
      <Link href={NAV_LINKS.skills} className={isActive(NAV_LINKS.skills)}>SKILLS</Link>
      <Link href={NAV_LINKS.projects} className={isActive(NAV_LINKS.projects)}>PROJECTS</Link>
      <Link href={NAV_LINKS.cat} className={isActive(NAV_LINKS.cat)}>CAT</Link>
      <Link href={NAV_LINKS.contact} className={isActive(NAV_LINKS.contact)}>CONTACT</Link>
    </div>
  );
};
