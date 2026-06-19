"use client";

import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";

function projectsHeader(): React.ReactNode {
    return(
        <AnimatedSection variants={fadeUp}>
            <h1>Projects</h1>
            <p className="section-description">A little bit about what I've done.</p>
        </AnimatedSection>
    );
}

export default function Projects() {
    return (
        <div className="container-box">
            {projectsHeader()}
        </div>
    );
}