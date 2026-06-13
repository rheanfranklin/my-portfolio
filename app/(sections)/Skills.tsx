
import "./Skills.css";
import * as Logos from "@/content/skills";
import PageHeader from "../components/SectionTitle";
import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";
import { AnimatedHexGrid } from "../components/AnimatedHexGrid";
import AnimatedIconGrid from "../components/AnimatedIconGrid";
import {
    Database,
    Chart,
    Repeat,
    GitMerge,
    FileText,
    Terminal,
    BracketsAngle,
    Inbox,
    AlarmClock,
    CloudServer,
    Search
} from 'pixelarticons/react'



function ProficiencyGrid(): React.ReactNode {
    return (
        <div className="proficiency-grid">
            {/* First Col */}
            <div>
                <AnimatedIconGrid icon={<Database />} text={<p className="proficiency-text">Big Data</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<Database />} text={<p className="proficiency-text">Relational databases</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<Chart />} text={<p className="proficiency-text">Data analytics</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<Database />} text={<p className="proficiency-text">Data governance</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<Database />} text={<p className="proficiency-text">ETL Pipelines</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<Database />} text={<p className="proficiency-text">Data visualization</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<Repeat />} text={<p className="proficiency-text">Agile product development</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<GitMerge />} text={<p className="proficiency-text">CI/CD</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<FileText />} text={<p className="proficiency-text">Central logging</p>}></AnimatedIconGrid>
                
                
            </div>
            {/* Second Col */}
            <div>
                <AnimatedIconGrid icon={<Database />} text={<p className="proficiency-text">Enterpirse resource planning & disposal</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<Search />} text={<p className="proficiency-text">User testing & research</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<Database />} text={<p className="proficiency-text">Unit, integration, and end-to-end testing</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<Database />} text={<p className="proficiency-text">Complex distributed systems</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<CloudServer />} text={<p className="proficiency-text">Cloud computing</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<AlarmClock />} text={<p className="proficiency-text">24/7 on-call rota</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<Inbox />} text={<p className="proficiency-text">Handling support requests</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<Terminal />} text={<p className="proficiency-text">API development</p>}></AnimatedIconGrid>
                <AnimatedIconGrid icon={<BracketsAngle  />} text={<p className="proficiency-text">Web development</p>}></AnimatedIconGrid>
            </div>
        </div>
        
    );
}

export default function Skills() {
    return (
        <div className="container-box">
            <PageHeader title="Skills" />
            <AnimatedSection variants={fadeUp}>
                <p className="section-description">A little bit about what I can do.</p>
                <hr />
            </AnimatedSection>

            <div className="p-6"/>

            <p>I have experience in and proficiency with ...</p>

            {ProficiencyGrid()}

            <div className="p-6"/>

            {AnimatedHexGrid({gridRows: Logos.GRID_ROWS})}
        </div>
    );
}
