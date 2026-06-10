"use client";

import "./Intro.css";
import {
    IntroContent,
    IntroCardOne,
    IntroCardTwo,
    IntroCardThree,
    ResumeButton,
} from "@/content/intro";


export default function Intro() {
    return (
        <div className="container-box">
            <div className="section-padding" />

            {/* Image + Intro */}
            <IntroContent />

            <div className="section-padding" />

            {/* Cards */}
            <div className="card-grid">
                <IntroCardOne />
                <IntroCardTwo />
                <IntroCardThree />
            </div>

            <div className="p-2" />

            {/* Resume Button */}
            <ResumeButton />

            <div className="section-padding" />
        </div>
    );
}