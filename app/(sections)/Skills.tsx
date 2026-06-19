import fs from "node:fs";
import path from "node:path";

import "./Skills.css";
import {
    GridRow,
    LogoConfig,
    getLogoMap,
    DEFAULT_ICON_HEIGHT,
    DEFAULT_ICON_WIDTH,
    gridRows,
    DataAnalyticsContent,
    SoftwareDeliveryAndQualityContent,
    SystemsAndInfrastructureContent,
    OperationsAndSupportContent,

} from "@/content/skills";
import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";
import { AnimatedHexGrid } from "../components/AnimatedHexGrid";
import { ExpandableOpenBox } from "../components/ExpandableBox";


// iterates through the public/images/icons directory, creates an <img /> obj then loads it into logoMap
// if the extracted logo name already exists in logoMap
function returnGridRows(): Record<string, GridRow> {
    const imageDir: string = path.join(process.cwd(), "public/images/icons");
    const files: string[] = fs.readdirSync(imageDir);
    let logoMap: Record<string, LogoConfig> = getLogoMap();
    for (const f of files) {
        let filename: string | undefined = f.split('/').at(-1)?.replace("/", "");
        let iconName: string | undefined = filename ? filename.split('-').at(0) : f.split('-').at(0);
        // if icon name is defined and it exists in the logoMap, create <img /> obj and load it into logoMap
        if (iconName && logoMap[iconName]) {
            let logoConfig: LogoConfig = logoMap[iconName];
            // pull height/width if it's set in logoMap, else use default values
            let height: string = logoConfig.iconSize ? logoConfig.iconSize.height : DEFAULT_ICON_HEIGHT;
            let width: string = logoConfig.iconSize ? logoConfig.iconSize.width : DEFAULT_ICON_WIDTH;
            logoMap[iconName].logo = <img
                src={path.join("images", "icons", f)}
                alt={f.replace("-"," ")}
                height={height}
                width={width}
            />
            let name: string | undefined = logoMap[iconName].name;
            if (!name) { logoMap[iconName].name = iconName.charAt(0).toUpperCase() + iconName.slice(1)};
        }
    }
    return gridRows(logoMap);
}

function skillsHeader(): React.ReactNode {
    return(
        <AnimatedSection variants={fadeUp}>
            <h1>Skills</h1>
            <p className="section-description">A little bit about what I can do.</p>
        </AnimatedSection>
    );
}

function conceptsAndPracticesSection(): React.ReactNode {
    return (
        <div className="skills-expandable-box-container">
            <h2>Concepts & Practices</h2>
            <hr />
            <ExpandableOpenBox
                summary="Data & Analytics"
                content={DataAnalyticsContent}
            />
            <ExpandableOpenBox
                summary="Software Delivery & Quality"
                content={SoftwareDeliveryAndQualityContent}
            />
            <ExpandableOpenBox
                summary="Systems & Infrastructure"
                content={SystemsAndInfrastructureContent}
            />
            <ExpandableOpenBox
                summary="Operations & Support"
                content={OperationsAndSupportContent}
            />
        </div>
    );
}

function hexGridSection(): React.ReactNode {
    let gridRows: Record<string, GridRow> = returnGridRows();
    return(
        <div className="skills-languages-container">
            <h2>Languages, Tools, & Frameworks</h2>
            <hr />
            <div className="skills-hex-grid-container">
                {AnimatedHexGrid({gridRows: gridRows})}
            </div>
            
        </div>
    );
}

export default function Skills() {
    return (
        <div className="container-box">
            {/* Page Header */}
            {skillsHeader()}

            <div className="p-6"/> {/* Padding */}

            {/* Page Content */}
            <AnimatedSection variants={fadeUp}>
                <div className="skills-grid">
                    {conceptsAndPracticesSection()}
                    {hexGridSection()}
                </div>
            </AnimatedSection>

            <div className="footer-padding"/> {/* Padding */}

        </div>
    );
}
