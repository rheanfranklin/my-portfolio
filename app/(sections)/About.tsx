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
    AboutIntroContent,
    MyMotivationFeelingAccomplishedCardBack,
    MyMotivationHelpingOthersCardBack,
    MyHobbiesWeightLifting,
    MyHobbiesIllustration,
    FunFacts
} from "@/content/about";
import "./About.css"
import { ExpandableCloseBox } from "../components/ExpandableBox";
import AnimatedFlipCard from "../components/AnimatedFlipCard";


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
        <div className="about-details-1-col">
            
            <ExpandableCloseBox
                summary="FactSet Research Systems"
                content={
                    <div className="about-card-grid">
                        <AnimatedFlipCard
                            front={<h3>Readable, Consistent, Modular,<br/> & Well-organized code</h3>}
                            back={StyleSoftwareDevelopmentContent}
                            width="100%"
                            height="25rem"
                        />
                        <AnimatedFlipCard
                            front={<h3>Future Focused</h3>}
                            back={StyleSoftwareDevelopmentContent}
                            width="100%"
                            height="25rem"
                        />
                    </div>
                }
            />
            <ExpandableCloseBox
                summary="Johnson & Johnson"
                content={
                    <div>
                        <AnimatedFlipCard
                            front={<h3>Readable, Consistent, Modular,<br/> & Well-organized code</h3>}
                            back={StyleSoftwareDevelopmentContent}
                            width="100%"
                            height="25rem"
                        />
                        <AnimatedFlipCard
                            front={<h3>Future Focused</h3>}
                            back={StyleSoftwareDevelopmentContent}
                            width="100%"
                            height="25rem"
                        />
                    </div>
                }
            />
            <ExpandableCloseBox
                summary="Georgia Institute of Technology"
                content={
                    <div>
                        <AnimatedFlipCard
                            front={<h3>Readable, Consistent, Modular,<br/> & Well-organized code</h3>}
                            back={StyleSoftwareDevelopmentContent}
                            width="100%"
                            height="25rem"
                        />
                        <AnimatedFlipCard
                            front={<h3>Future Focused</h3>}
                            back={StyleSoftwareDevelopmentContent}
                            width="100%"
                            height="25rem"
                        />
                    </div>
                }
            />

        </div>
    );
}
// Add header + description & wraps in animated section
function myHistorySection(): React.ReactNode {
    return (
        <AnimatedSection variants={fadeUp}>
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
        <div className="about-details-2-col">
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
        <AnimatedSection variants={fadeUp}>
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
        <div className="about-details-1-col">
            <ExpandableCloseBox
                summary="Software Development"
                content={
                    <div>
                        <AnimatedFlipCard
                            front={<h3>Readable, Consistent, Modular,<br/> & Well-organized code</h3>}
                            back={StyleSoftwareDevelopmentContent}
                            width="100%"
                            height="25rem"
                        />
                        <AnimatedFlipCard
                            front={<h3>Future Focused</h3>}
                            back={StyleSoftwareDevelopmentContent}
                            width="100%"
                            height="25rem"
                        />
                    </div>
                }
            />
            <ExpandableCloseBox
                summary="Collaboration"
                content={
                    <div>
                        <AnimatedFlipCard
                            front={<h3>Positivity</h3>}
                            back={StyleSoftwareDevelopmentContent}
                            width="100%"
                            height="25rem"
                        />
                        <AnimatedFlipCard
                            front={<h3>Acceptance</h3>}
                            back={StyleSoftwareDevelopmentContent}
                            width="100%"
                            height="25rem"
                        />
                    </div>
                }
            />
            <ExpandableCloseBox
                summary="AI"
                content={
                    <div>
                        <AnimatedFlipCard
                            front={<h3>Positivity</h3>}
                            back={StyleSoftwareDevelopmentContent}
                            width="100%"
                            height="25rem"
                        />
                        <AnimatedFlipCard
                            front={<h3>Acceptance</h3>}
                            back={StyleSoftwareDevelopmentContent}
                            width="100%"
                            height="25rem"
                        />
                    </div>
                }
            />
            <ExpandableCloseBox
                summary="Problem Solving"
                content={
                    <div>
                        <AnimatedFlipCard
                            front={<h3>Positivity</h3>}
                            back={StyleSoftwareDevelopmentContent}
                            width="100%"
                            height="25rem"
                        />
                        <AnimatedFlipCard
                            front={<h3>Acceptance</h3>}
                            back={StyleSoftwareDevelopmentContent}
                            width="100%"
                            height="25rem"
                        />
                    </div>
                }
            />

        </div>
    );
}
// Add header + description & wraps in animated section
function myStyleSection(): React.ReactNode {
    return (
        <AnimatedSection variants={fadeUp}>
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
      <div className="about-details-2-col">
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
        <AnimatedSection variants={fadeUp}>
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
        <AnimatedSection variants={fadeUp}>
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