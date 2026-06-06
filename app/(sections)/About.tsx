"use client";

import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";
import { MyStyleParagraph, MyHistoryParagraph, MyMotivationParagraph, AboutParagraph } from "@/content/about";   

export default function About() {
    return (
        <div className="container-box">
            <AnimatedSection variants={fadeUp}>
                {/* About Subheader */ }
                <div className="subheader">
                    About Me
                </div>
                <AboutParagraph />

                {/* My Style Subsection */}
                <div className="sectionTitle">
                    My Style
                </div>
                <MyStyleParagraph />

                {/* My Motivation Subsection */}
                <div className="sectionTitle">
                    My Motivation
                </div>
                <MyMotivationParagraph />

                {/* My History Subsection */}
                <div className="sectionTitle">
                    My History
                </div>
                <MyHistoryParagraph />
            </AnimatedSection>
        </div>
    )
}