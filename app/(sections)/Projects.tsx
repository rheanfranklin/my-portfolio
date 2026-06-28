"use client";

import "./Projects.css"
import AnimatedSection from "../components/AnimatedSection";
import { CatAnimationProjBack, CatAnimationProjFront, SQLViewDeployerBack, SQLViewDeployerFront, InfrastructureReworkProjBack, InfrastructureReworkProjFront, PortfolioProjBack, PortfolioProjFront, TransitionProjFront, TransitionProjBack, CAPProjFront, CAPProjBack, OtherThingsProjFront, OtherThingsProjBack, DungeonGameProjFront, DungeonGameProjBack, CalendarProjBack, CalendarProjFront, PingProjFront, PingProjBack } from "@/content/projects";
import { fadeUp } from "@/lib/animations/fade";
import AnimatedFlipCard from "../components/AnimatedFlipCard";

function projectsHeader(): React.ReactNode {
    return (
        <AnimatedSection variants={fadeUp}>
            <h1>Projects</h1>
            <p className="section-description">A little bit about what I've done.</p>
        </AnimatedSection>
    );
}

function personalProjects(): React.ReactNode {
    return (
        <div className="section">
            {/* Header */}
            <AnimatedSection variants={fadeUp}>
                <h2>Personal Projects</h2>
            </AnimatedSection>
            {/* Cards */}
            <div className="card-grid">
                {/* Portfolio */}
                <AnimatedFlipCard
                    front={PortfolioProjFront}
                    back={PortfolioProjBack}
                    height="20rem"
                    width="100%"
                />
                {/* Cat animation */}
                <AnimatedFlipCard
                    front={CatAnimationProjFront}
                    back={CatAnimationProjBack}
                    height="20rem"
                    width="100%"
                />
            </div>
        </div>
    );
}

function universityProjects(): React.ReactNode {
    return (
        <div className="section">
            {/* Header */}
            <AnimatedSection variants={fadeUp}>
                <h2>Projects from University</h2>
            </AnimatedSection>
            {/* Cards */}
            <div className="card-grid">
                {/* First column */}
                <div className="card-col">
                    {/* Dungeon crawler game */}
                    <AnimatedFlipCard
                        front={DungeonGameProjFront}
                        back={DungeonGameProjBack}
                        height="20rem"
                        width="100%"
                    />
                    {/* Calendar */}
                    <AnimatedFlipCard
                        front={CalendarProjFront}
                        back={CalendarProjBack}
                        height="20rem"
                        width="100%"
                    />
                </div>
                {/* Second column */}
                <div className="card-col">
                    {/* Ping pong game */}
                    <AnimatedFlipCard
                        front={PingProjFront}
                        back={PingProjBack}
                        height="20rem"
                        width="100%"
                    />
                </div>
            </div>
        </div>
    );
}

function factsetProjects(): React.ReactNode {
    return (
        <div className="section">
            <AnimatedSection variants={fadeUp}>
                <h2>Projects from FactSet</h2>
            </AnimatedSection>
            
            <div className="card-grid">
                {/* First column */}
                <div className="card-col">
                    {/* SQL View Deployer */}
                    <AnimatedFlipCard
                        front={SQLViewDeployerFront}
                        back={SQLViewDeployerBack}
                        height="39rem"
                        width="100%"
                    />
                    {/* Infrastructure rework */}
                    <AnimatedFlipCard
                        front={InfrastructureReworkProjFront}
                        back={InfrastructureReworkProjBack}
                        height="27rem"
                        width="100%"
                    />
                </div>
                {/* Second column */}
                <div className="card-col">
                    {/* CAP */}
                    <AnimatedFlipCard
                        front={CAPProjFront}
                        back={CAPProjBack}
                        height="32rem"
                        width="100%"
                    />
                    {/* Data warehouse transition */}
                    <AnimatedFlipCard
                        front={TransitionProjFront}
                        back={TransitionProjBack}
                        height="34rem"
                        width="100%"
                    />
                </div>
            </div>
            {/* other small projects */}
            <AnimatedFlipCard
                front={OtherThingsProjFront}
                back={OtherThingsProjBack}
                height="36rem"
                width="100%"
            />
        </div>
    );
}

export default function Projects() {
    return (
        <div className="container-box projects">
            {projectsHeader()}
            {personalProjects()}
            <hr/>
            {universityProjects()}
            <hr/>
            {factsetProjects()}
            <div className="footer-padding"/>
        </div>
    );
}