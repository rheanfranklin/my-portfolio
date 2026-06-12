
import "./Skills.css";
import type { ReactNode } from 'react';
import { Hexagon } from "../components/Hexagon";
import * as Logos from "@/content/skills";
import PageHeader from "../components/SectionTitle";
import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";
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

type TabProps = {
  readonly text: string;
};
export function LeftTab({ text }: TabProps): React.ReactNode {
  return (
    <div className="tab-left">
        <div className="triangle" />
        <span className="tab-label">{text}</span>
    </div>
  );
}

export function RightTab({ text }: TabProps): React.ReactNode {
  return (
    <div className="tab-right">
        <div className="tab-right-triangle" />
        <span className="tab-label">{text}</span>
    </div>
  );
}


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
            <div>
                <div className="hex-grid language-grid">
                    <div className="hex-container">
                        <div className="hex-column tab-anchor">
                            <LeftTab text="languages" />
                            <Hexagon className="language" front={Logos.PythonLogo} back={<p>Python</p>}/>
                            <Hexagon front={Logos.JavaLogo} back={<p>Java</p>}/>
                            <Hexagon front={Logos.GoLangLogo} back={<p>Golang</p>}/>
                            <Hexagon front={Logos.JavascriptLogo} back={<p>JavaScript</p>}/>
                            <Hexagon front={Logos.TypescriptLogo} back={<p>TypeScript</p>}/>
                            <RightTab text="hi" />
                        </div>
                        <div className="hex-column-odd">
                            <Hexagon front={Logos.SQLLogo} back={<p>SQL</p>}/>
                            <Hexagon front={Logos.GraphQLLogo} back={<p>GraphQL</p>}/>
                            <Hexagon front={Logos.BashLogo} back={<p>Bash</p>}/>
                            <Hexagon front={Logos.HTMLLogo} back={<p>HTML5</p>}/>
                            <Hexagon front={Logos.CSSLogo} back={<p>CSS</p>}/>
                            <Hexagon front={Logos.CLogo} back={<p>C++</p>}/>
                        </div>
                        <div className="hex-column">
                            <Hexagon front={Logos.AWSLogo} back={<p>Python</p>}/>
                            <Hexagon front={Logos.ClaudeLogo} back={<p>Java</p>}/>
                            <Hexagon front={Logos.DbxLogo} back={<p>Golang</p>}/>
                            <Hexagon front={Logos.DockerLogo} back={<p>JavaScript</p>}/>
                            <Hexagon front={Logos.DBeaverLogo} back={<p>TypeScript</p>}/>
                        </div>
                        <div className="hex-column-odd">
                            <Hexagon front={Logos.DrawIOLogo} back={<p>SQL</p>}/>
                            <Hexagon front={Logos.DremioLogo} back={<p>GraphQL</p>}/>
                            <Hexagon front={Logos.GitActionsLogo} back={<p>Bash</p>}/>
                            <Hexagon front={Logos.GitLogo} back={<p>HTML5</p>}/>
                            <Hexagon front={Logos.GrafanaLogo} back={<p>CSS</p>}/>
                            <Hexagon front={Logos.JiraLogo} back={<p>C++</p>}/>
                        </div>
                        <div className="hex-column">
                            <Hexagon front={Logos.KibanaLogo} back={<p>Kibana</p>}/>
                            <Hexagon front={Logos.MuralLogo} back={<p>Mural</p>}/>
                            <Hexagon front={Logos.NextJsLogo} back={<p>Next.js</p>}/>
                            <Hexagon front={Logos.NPMLogo} back={<p>npm</p>}/>
                            <Hexagon front={Logos.OpsGenieLogo} back={<p>OpsGenie</p>}/>
                        </div>
                        <div className="hex-column-odd">
                            <Hexagon front={Logos.PostmanLogo} back={<p>Postman</p>}/>
                            <Hexagon front={Logos.PowerBILogo} back={<p>PowerBI</p>}/>
                            <Hexagon front={Logos.PuTTyLogo} back={<p>PuTTy</p>}/>
                            <Hexagon front={Logos.ReactLogo} back={<p>React</p>}/>
                            <Hexagon front={Logos.TailwindLogo} back={<p>Tailwind</p>}/>
                            <Hexagon front={Logos.VBALogo} back={<p>VBA</p>}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
