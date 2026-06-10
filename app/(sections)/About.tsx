"use client";

import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";
import {
    StyleSoftwareDevelopmentContent,
    StyleCollaborationContent,
    StyleProblemSolvingContent,
    StyleAIContent,
    MyHistoryContent,
    MyMotivationContent,
    AboutIntroContent
} from "@/content/about";
import { DividerDark, PaddingSM } from "@/content/utils";

type ConstructSubsectionProps = {
    readonly header: string;
    readonly content: React.ReactNode;
}

// Builts a subsection with an animated header + content
export function ConstructSubsection({
    header,
    content,
}: ConstructSubsectionProps): React.ReactNode {
    return (
        <div>
            {/* Header */}
            <AnimatedSection variants={fadeUp}>
                <div className="header3">{header}</div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection variants={fadeUp}>
                {content}
            </AnimatedSection>

            <DividerDark />
        </div>
    );
}


type MyStyleContentConstructorProps = {
    readonly header: string;
    readonly content: React.ReactNode;
}

//
// Building style subsection
//
export function MyStyleContentConstructor({
    header,
    content,
}: MyStyleContentConstructorProps): React.ReactNode {
    return (
        <div>
            <AnimatedSection variants={fadeUp}>
                <p className="header4">{header}</p>
            </AnimatedSection>
            <AnimatedSection variants={fadeUp}>
                {content}
            </AnimatedSection>
        </div>
        
    );
}

export function ConstructMyStyleContent(): React.ReactNode {
    return (
        <div>
            <MyStyleContentConstructor header="Software Development" content={StyleSoftwareDevelopmentContent} />
            <PaddingSM />
            <MyStyleContentConstructor header="Collaboration" content={StyleCollaborationContent} />
            <PaddingSM />
            <MyStyleContentConstructor header="Problem Solving" content={StyleProblemSolvingContent} />
            <PaddingSM />
            <MyStyleContentConstructor header="AI" content={StyleAIContent} />
        </div>
    );
}

//
// Stringing together About page content
//
export function About() {
    return (
        <div className="container-box">
            {/* About Hader */ }
            <div className="header2">
                About Me
            </div>
            {AboutIntroContent}

            <ConstructSubsection header="My Motivation" content={MyMotivationContent} />
            <ConstructSubsection header="My Style" content={ConstructMyStyleContent()} />
            <ConstructSubsection header="My History" content={MyHistoryContent} />

        </div>
    );
}