"use client";

import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";
import {
    StyleSoftwareDevelopmentContent,
    StyleCollaborationContent,
    StyleProblemSolvingContent,
    StyleAIContent,
    AboutIntroContent,
    MyMotivationFeelingAccomplishedCardBack,
    MyMotivationHelpingOthersCardBack,
    MyHobbiesWeightLifting,
    MyHobbiesIllustration,
    FunFacts,
    MyHistoryFactSetContent,
    MyHistoryJohnsonContent,
    MyHistoryGATechContent
} from "@/content/about";
import "./About.css"
import { ExpandableCloseBox } from "../components/ExpandableBox";


function aboutHeader(): React.ReactNode {
    return (
        <div>
            {/* About Header */ }
            <AnimatedSection variants={fadeUp}>
                <h1>About Me</h1>
            </AnimatedSection>

            {/* Intro */}
            <AnimatedSection variants={fadeUp}>
                {AboutIntroContent}
            </AnimatedSection>
        </div>
    );
}

//
// My History
//
// builds detail boxes
function myHistoryDetails(): React.ReactNode {
    return (
        <div className="detail-container-1-col">
            <ExpandableCloseBox
                summary="FactSet Research Systems"
                content={MyHistoryFactSetContent}
            />
            <ExpandableCloseBox
                summary="Johnson & Johnson"
                content={MyHistoryJohnsonContent}
            />
            <ExpandableCloseBox
                summary="Georgia Institute of Technology"
                content={MyHistoryGATechContent}
            />
        </div>
    );
}
// Add header + description & wraps in animated section
function myHistorySection(): React.ReactNode {
    return (
        <AnimatedSection variants={fadeUp} className="history">
            <h2>My History</h2>
            <p>A brief overview of my experience:</p>
            {myHistoryDetails()}
        </AnimatedSection>
    );
}

//
// My Motivation
//
// builds detail boxes
function myMotivationDetails(): React.ReactNode {
    return (
        <div className="detail-container-2-col">
            <ExpandableCloseBox
                summary="Feeling Accomplished"
                content={MyMotivationFeelingAccomplishedCardBack}
            />
            <ExpandableCloseBox
                summary="Helping Others"
                content={MyMotivationHelpingOthersCardBack}
            />
        </div>
    );
}
// Add header + description & wraps in animated section
function myMotivationSection(): React.ReactNode {
    return (
        <AnimatedSection variants={fadeUp} className="motivation">
            <h2>My Motivation</h2>
            <p>A couple things that motivate me:</p>
            {myMotivationDetails()}
        </AnimatedSection>
    );
}

//
// My Style
//
// builds detail boxes
function myStyleDetails(): React.ReactNode {
    return (
        <div className="detail-container-1-col">
            <ExpandableCloseBox
                summary="Software Development"
                content={StyleSoftwareDevelopmentContent}
            />
            <ExpandableCloseBox
                summary="Collaboration"
                content={StyleCollaborationContent}
            />
            <ExpandableCloseBox
                summary="AI"
                content={StyleAIContent}
            />
            {/* <ExpandableCloseBox
                summary="Problem Solving"
                content={StyleProblemSolvingContent}
            /> */}
        </div>
    );
}
// Add header + description & wraps in animated section
function myStyleSection(): React.ReactNode {
    return (
        <AnimatedSection variants={fadeUp} className="style">
            <h2>My Style</h2>
            <p>A few things about how I work:</p>
            {myStyleDetails()}
        </AnimatedSection>
    );
}

//
// My Hobbies
//
// builds detail boxes
function myHobbiesDetails(): React.ReactNode {
    return(
      <div className="detail-container-2-col">
        <ExpandableCloseBox
            summary="Illustration"
            content={MyHobbiesIllustration}
        />
        <ExpandableCloseBox
            summary="Weightlifting"
            content={MyHobbiesWeightLifting}
        />
    </div>
    );
}
// Add header + description & wraps in animated section
function myHobbiesSection(): React.ReactNode {
    return(
        <AnimatedSection variants={fadeUp} className="hobbies">
            <h2>My Hobbies</h2>
            <p>A little bit about my hobbies:</p>
            {myHobbiesDetails()}
        </AnimatedSection>
    );
}

//
// Fun Facts
//
function funFactsSection(): React.ReactNode {
    return (
        <AnimatedSection variants={fadeUp} className="fun-facts">
            <h4>And more fun facts !</h4>
            {FunFacts}
            <div className="footer-padding"/> {/* Padding */}
        </AnimatedSection>
    );
}

//
// Stringing together About page content
//
export function About() {
    return (
        <div className="container-box about">
            {aboutHeader()}

            {myHistorySection()}

            {myMotivationSection()}

            {myStyleSection()}
            
            {myHobbiesSection()}
            
            {funFactsSection()}
        </div>
    );
}