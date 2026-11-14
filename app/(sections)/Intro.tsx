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
    Description,
    WelcomeMessage,
    OpenToWork,
    // OpenToRelocate,
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
        <AnimatedText>{Description}</AnimatedText>

        {/* <div className="p-10" /> */}

        {/* <AnimatedText>{WelcomeMessage}</AnimatedText> */}

        <div className="p-2" />
        <AnimatedSection variants={fadeUp}>
            <AnimatedText>
                    <div className="rounded-container">
                        {OpenToWork}
                    </div>
            </AnimatedText>
        </AnimatedSection>
        {/* <AnimatedText>{OpenToRelocate}</AnimatedText> */}
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
            {/* Padding */}
            <div className="intro-section-padding" />
            
            {/* Intro + Image */}
            <div className="intro-grid">
                {/* Left column */}
                {IntroSubsection}

                {/* Right Column */}
                {IntroImage}
            </div>
            
            {/* Padding */}
            <div className="p-5" /> 

            <AnimatedText>{WelcomeMessage}</AnimatedText>
            
    
            {CardGrid}

            {/* Padding */}
            <div className="p-3" />
            
            {ResumeButton}

            {/* Padding */}
            <div className="footer-padding" />
        </div>
    );
}
