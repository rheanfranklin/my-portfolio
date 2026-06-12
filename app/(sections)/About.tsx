"use client";

import "./About.css";
import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";
import { DividerDark, PaddingSM } from "@/content/utils";
import {
    StyleSoftwareDevelopmentContent,
    StyleCollaborationContent,
    StyleProblemSolvingContent,
    StyleAIContent,
    MyHistoryContent,
    MyMotivationContent,
    AboutIntroContent
} from "@/content/about";

type ConstructSubsectionProps = {
    readonly header: string;
    readonly content: React.ReactNode;
}

// Builts a subsection with an animated header + content
function ConstructSubsection({
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
function MyStyleContentConstructor({
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

function ConstructMyStyleContent(): React.ReactNode {
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
export function About(): React.ReactNode {
    return (
        <div className="container-box">
            {/* About Hader */ }
            <div className="header2">
                &gt; ABOUT ME
            </div>
            {AboutIntroContent}

            <div className="folder">
                <div className="folder-tab">Hi</div>
                <div className="folder-body">blah blah blah blah blah</div>
            </div>

            {/* <ConstructSubsection header="My Motivation" content={MyMotivationContent} />
            <ConstructSubsection header="My Style" content={ConstructMyStyleContent()} />
            <ConstructSubsection header="My History" content={MyHistoryContent} /> */}

        </div>
    );
}