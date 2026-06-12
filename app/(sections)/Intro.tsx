"use client";

import Link from "next/link";
import "./Intro.css";
import { fadeUp } from "@/lib/animations/fade";
import AnimatedIconGrid from "@/app/components/AnimatedIconGrid";
import AnimatedSection from "@/app/components/AnimatedSection";
import AnimatedText from "@/app/components/AnimatedText";
import {
    IntroContentText,
    Name,
    Title,
    WelcomeMessage,
    OpenToWork,
    OpenToRelocate,
    IntroCardOneContent,
    IntroCardTwoContent,
    IntroCardThreeContent,
    ResumeButtonContent,
} from "@/content/intro";

const ResumeButton: React.ReactNode = (
    <AnimatedSection variants={fadeUp} className="self-center">
        <Link href="/files/resume.pdf" target="_blank">
            {ResumeButtonContent}
        </Link>
    </AnimatedSection>
);

export function Intro() {
    return (
        <div className="container-box">
            <div className="section-padding" />
            {/* Intro + Image */}
            <div className="two-col-grid">
                {/* Left column */}
                <div className="left">
                    <div className="p-10" />
                    {/* Intro */}
                    <AnimatedText>{IntroContentText}</AnimatedText>
                    <AnimatedText>{Name}</AnimatedText>
                    <AnimatedText>{Title}</AnimatedText>

                    <div className="p-10" />

                    <AnimatedText>{WelcomeMessage}</AnimatedText>

                    <div className="p-2" />
                    <AnimatedSection variants={fadeUp}>
                        <AnimatedText>
                                <div className="rounded-container">
                                    {OpenToWork}
                                </div>
                        </AnimatedText>
                    </AnimatedSection>
                    <AnimatedText>{OpenToRelocate}</AnimatedText>
                </div>

                {/* Right Column */}
                <AnimatedSection variants={fadeUp} className="right">
                    <img
                        src="/images/home/woman-on-computer.png"
                        alt="woman sitting on computer"
                        className="intro-image"
                    />
                </AnimatedSection>
            </div>

            <div className="section-padding" />
            <div className="section-padding" />

            {/* Cards */}
            <div className="card-grid">
                <AnimatedIconGrid icon={IntroCardOneContent} />
                <AnimatedIconGrid icon={IntroCardTwoContent} />
                <AnimatedIconGrid icon={IntroCardThreeContent} />
            </div>
            
            <div className="p-5" />

            {/* Button */}
            {ResumeButton}

            <div className="p-5" />
        </div>
    );
}