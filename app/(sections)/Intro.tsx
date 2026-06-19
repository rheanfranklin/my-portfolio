"use client";

import "./Intro.css";
import { fadeUp } from "@/lib/animations/fade";
import { Button } from "../components/Button";
import AnimatedCard from "@/app/components/AnimatedCard";
import AnimatedSection from "@/app/components/AnimatedSection";
import AnimatedText from "@/app/components/AnimatedText";
import {
    IntroContentText,
    Name,
    Title,
    WelcomeMessage,
    OpenToWork,
    OpenToRelocate,
    CardOne,
    CardTwo,
    CardThree,
    ResumeButtonContent,
} from "@/content/intro";

// Section with Name + Title
const IntroSubsection: React.ReactNode = (
    <div className="left">
        <div className="p-10" /> {/* Padding */}
        
        <AnimatedText>{IntroContentText}</AnimatedText>
        <AnimatedText>{Name}</AnimatedText>
        <AnimatedText>{Title}</AnimatedText>

        <div className="p-10" /> {/* Padding */}

        <AnimatedText>{WelcomeMessage}</AnimatedText>

        <div className="p-2" /> {/* Padding */}
        <AnimatedSection variants={fadeUp}>
            <AnimatedText>
                    <div className="rounded-container">
                        {OpenToWork}
                    </div>
            </AnimatedText>
        </AnimatedSection>
        <AnimatedText>{OpenToRelocate}</AnimatedText>
    </div>
);

const IntroImage: React.ReactNode = (
    <AnimatedSection variants={fadeUp} className="right">
        <img
            src="/images/home/woman-on-computer.png"
            alt="woman sitting on computer"
            className="intro-image"
        />
    </AnimatedSection>
);

const CardGrid: React.ReactNode = (
    <div className="grid grid-cols-3">
        <AnimatedCard content={CardOne} />
        <AnimatedCard content={CardTwo} />
        <AnimatedCard content={CardThree} />
    </div>
);

const ResumeButton: React.ReactNode = (
    <Button
        content={ResumeButtonContent}
        link="/files/resume.pdf"
        newTab={true}
    />
);

export function Intro() {
    return (
        <div className="container-box intro">
            <div className="intro-section-padding" /> {/* Padding */}
            {/* Intro + Image */}
            <div className="intro-grid">
                {/* Left column */}
                {IntroSubsection}

                {/* Right Column */}
                {IntroImage}
            </div>

            <div className="p-20" /> {/* Padding */}

            {CardGrid}

            <div className="p-3" /> {/* Padding */}
            
            {ResumeButton}

            <div className="footer-padding" /> {/* Padding */}
        </div>
    );
}