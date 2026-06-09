"use client";

import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";
import {
    MySkillsContent,
    StyleSoftwareDevelopmentContent,
    StyleCollaborationContent,
    StyleProblemSolvingContent,
    StyleAIContent,
    MyHistoryContent,
    MyMotivationContent,
    AboutIntroContent
} from "@/content/about";
import { DividerDark, PaddingSM } from "@/content/utils";

//
// Subsection construction
//
export const AboutMeIntro = () => (
    <div>
        {/* Header */}
        <AnimatedSection variants={fadeUp}>
            <div className="header2">About Me</div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection variants={fadeUp}>
            <AboutIntroContent />
        </AnimatedSection>

        <DividerDark />
    </div>
)

export const MySkillsSubsection = () => (
    <div>
        {/* Header */}
        <AnimatedSection variants={fadeUp}>
            <div className="header3">My Skills</div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection variants={fadeUp}>
            <MySkillsContent />
        </AnimatedSection>

        <DividerDark />
    </div>

)

export const MyMotivationSubsection = () => (
    <div>
        {/* Header */}
        <AnimatedSection variants={fadeUp}>
            <div className="header3">My Motivation</div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection variants={fadeUp}>
            <MyMotivationContent />
        </AnimatedSection>

        <DividerDark />
    </div>

)

export const MyStyleSubsection = () => (
    <div>
        {/* Header */}
        <AnimatedSection variants={fadeUp}>
            <div className="header3">My Style</div>
        </AnimatedSection>

        {/* Contnent */}
        {/* Software Development H4 */}
        <AnimatedSection variants={fadeUp}>
            <p className="header4">Software Development</p>
        </AnimatedSection>
        <AnimatedSection variants={fadeUp}>
            <StyleSoftwareDevelopmentContent />
        </AnimatedSection>
        {/* End of Software Development H4 */}

        <PaddingSM />

        {/* Collaboration H4 */}
        <AnimatedSection variants={fadeUp}>
            <p className="header4">Collaboration</p>
        </AnimatedSection>
        <AnimatedSection variants={fadeUp}>
            <StyleCollaborationContent />
        </AnimatedSection>
        {/* End of Collaboration H4 */}

        <PaddingSM />

        {/* Problem Solving H4 */}
        <AnimatedSection variants={fadeUp}>
            <p className="header4">Problem Solving</p>
        </AnimatedSection>
        <AnimatedSection variants={fadeUp}>
            <StyleProblemSolvingContent />
        </AnimatedSection>
        {/* End of Problem Solving H4 */}

        <PaddingSM />

        {/* AI H4 */}
        <AnimatedSection variants={fadeUp}>
            <p className="header4">AI</p>
        </AnimatedSection>
        <AnimatedSection variants={fadeUp}>
            <StyleAIContent />
        </AnimatedSection>
        {/* End of AI H4 */}

        <DividerDark />
    </div>
);

export const MyHistorySubsection = () => (
    <div>
        <AnimatedSection variants={fadeUp}>
            <div className="header3">My History</div>
        </AnimatedSection>

        <AnimatedSection variants={fadeUp}>
            <MyHistoryContent />
        </AnimatedSection>

        <DividerDark />
    </div>
)


//
// Stringing together About page content
//
export default function About() {
    return (
        <div className="container-box">
            <AboutMeIntro />

            <MySkillsSubsection />

            <MyMotivationSubsection />

            <MyStyleSubsection />

            <MyHistorySubsection />
        </div>
    )
}