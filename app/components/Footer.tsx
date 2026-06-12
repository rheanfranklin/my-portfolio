"use client";

import "./Footer.css"
import { SOCIAL_LINKS } from "@/src/config/contacts";
import { NAV_LINKS } from "./Navbar";


const footerNavBar = (
    <ol>
        <li className="footer-li">
            <a href={NAV_LINKS.home}>Home</a>
        </li>
        <li className="footer-li">
            <a href={NAV_LINKS.about}>About</a>
        </li>
        <li className="footer-li">
            <a href={NAV_LINKS.skills}>Skills</a>
        </li>
        <li className="footer-li">
            <a href={NAV_LINKS.projects}>Projects</a>
        </li>
        <li className="footer-li">
            <a href={NAV_LINKS.cat}>Cat</a>
        </li>
        <li className="footer-li">
            <a href={NAV_LINKS.contact}>Contact</a>
        </li>
    </ol>
)

export default function Footer(): React.ReactNode {
    return (
        <footer className="container-box">
            <div className="p-10" />
            <hr className="divider"/>
            <section className="footer-top-grid">
                <p>
                    <span className="name"><strong>RHEANNON FRANKLIN</strong></span><br/>
                    <span className="title">Full Stack Software Engineer</span>
                </p>
                <section className="navigate">
                    <p className="footer-header"><strong>Navigate</strong></p>
                    {footerNavBar}
                </section>
                <section className="navigate">
                    <p className="footer-header"><strong>Connect</strong></p>
                    <ol>
                        <li className="footer-li">
                            <a href={SOCIAL_LINKS.github} target="_blank">GitHub</a>
                        </li>
                        <li className="footer-li">
                            <a href={SOCIAL_LINKS.linkedin} target="_blank">Linkedin</a>
                        </li>
                        <li className="footer-li">
                            <a href="/files/resume.pdf" target="_blank">Resume</a>
                        </li>
                    </ol>
                </section>
            </section>
            <hr className="divider"/>
            <section className="footer-bottom-grid">
                <p className="footer-text">&#169; 2026 Rheannon Franklin</p>
                <p className="footer-text">Built with Next.js</p>
            </section>

        </footer>
    );
}

