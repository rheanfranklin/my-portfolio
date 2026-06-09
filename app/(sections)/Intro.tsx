"use client";

import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";
import { WelcomeContent, IntroContent } from "@/content/intro"
import { DividerDark } from "@/content/utils";

//
// Subsection construction
//

export const WelcomeSubsection = () => (
    <AnimatedSection variants={fadeUp}>
        <WelcomeContent />
        <DividerDark />
    </AnimatedSection>
)

export const IntroSubsection = () => (
    <div>
        {/* Header */}
        <AnimatedSection variants={fadeUp}>
            <p className="header2">
                <span className="indent" />Intro
            </p>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection variants={fadeUp}>
            <IntroContent />
        </AnimatedSection>
        <DividerDark />
    </div>
);

export default function Intro() {
    return (
        <div className="container-box">

            <WelcomeSubsection />

            <IntroSubsection />

        </div>
    );
}