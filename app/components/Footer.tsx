"use client";

declare module "./Footer.css";

import "./Footer.css";
import { SOCIAL_LINKS } from "@/src/config/contacts";
import { NAV_LINKS } from "./Navbar";

// Navigate list
const footerNavBar = (
    <ol>
        <li>
            <a href={NAV_LINKS.home}>Home</a>
        </li>
        <li>
            <a href={NAV_LINKS.about}>About</a>
        </li>
        <li>
            <a href={NAV_LINKS.skills}>Skills</a>
        </li>
        <li>
            <a href={NAV_LINKS.projects}>Projects</a>
        </li>
        <li>
            <a href={NAV_LINKS.cat}>Cat</a>
        </li>
        <li>
            <a href={NAV_LINKS.contact}>Contact</a>
        </li>
    </ol>
);

// Socials list
const socials = (
    <ol>
        <li>
            <a href={SOCIAL_LINKS.github} target="_blank">GitHub</a>
        </li>
        <li>
            <a href={SOCIAL_LINKS.linkedin} target="_blank">Linkedin</a>
        </li>
        <li>
            <a href="/files/resume.pdf" target="_blank">Resume</a>
        </li>
    </ol>
);

export default function Footer(): React.ReactNode {
    return (
        <footer className="container-box footer">
            <hr/>

            {/* Top section */}
            <section className="footer-top-grid">
                {/* Website title */}
                <p>
                    <span className="name"><strong>RHEANNON FRANKLIN</strong></span><br/>
                    <span className="title">Full Stack Software Engineer</span>
                </p>
                {/* Navigate */}
                <section>
                    <h3>Navigate</h3>
                    {footerNavBar}
                </section>
                {/* Socials */}
                <section>
                    <h3>Connect</h3>
                    {socials}
                </section>
            </section>

            {/* Bottom section */}
            <hr/>
            <section className="footer-bottom-grid">
                <p>&#169; 2026 Rheannon Franklin</p>
                <p>Built with Next.js</p>
            </section>
        </footer>
    );
}

