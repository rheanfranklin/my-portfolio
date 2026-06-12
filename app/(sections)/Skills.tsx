
import "./Skills.css";
import { Hexagon } from "../components/Hexagon";
import {
    PythonLogo,
    JavaLogo,
    GoLangLogo,
    JavascriptLogo,
    TypescriptLogo,
    SQLLogo,
    GraphQLLogo,
    BashLogo,
    HTMLLogo,
    CSSLogo,
    CLogo,
    AWSLogo,
    ClaudeLogo,
    DbxLogo,
    DockerLogo,
    DBeaverLogo,
    DrawIOLogo,
    DremioLogo,
    GitActionsLogo,
    GitLogo,
    GrafanaLogo,
    JiraLogo,
    KibanaLogo,
    MuralLogo,
    NextJsLogo,
    NPMLogo,
    OpsGenieLogo,
    PostmanLogo,
    PowerBILogo,
    PuTTyLogo,
    ReactLogo,
    TailwindLogo,
    VBALogo,
} from "@/content/skills";

export default function Skills() {
    return (
        <div className="container-box">
            <div className="tab">
                <span>"hi"</span>
            </div>
            <div className="triangle">
            </div>
            <div className="p-6"/>
            <div>
                <div className="hex-grid language-grid">
                    <div className="left"><p className="languages">Languages</p></div>
                    <div className="hex-container">
                        <div className="hex-column">
                            <Hexagon front={PythonLogo} back={<p>Python</p>}/>
                            <Hexagon front={JavaLogo} back={<p>Java</p>}/>
                            <Hexagon front={GoLangLogo} back={<p>Golang</p>}/>
                            <Hexagon front={JavascriptLogo} back={<p>JavaScript</p>}/>
                            <Hexagon front={TypescriptLogo} back={<p>TypeScript</p>}/>
                        </div>
                        <div className="hex-column-odd">
                            <Hexagon front={SQLLogo} back={<p>SQL</p>}/>
                            <Hexagon front={GraphQLLogo} back={<p>GraphQL</p>}/>
                            <Hexagon front={BashLogo} back={<p>Bash</p>}/>
                            <Hexagon front={HTMLLogo} back={<p>HTML5</p>}/>
                            <Hexagon front={CSSLogo} back={<p>CSS</p>}/>
                            <Hexagon front={CLogo} back={<p>C++</p>}/>
                        </div>
                    </div>
                    <div className="p-6"/>
                </div>
                <div className="hex-grid tools-grid">
                    <div className="p-6"/>
                    <div className="hex-container" style={{
                        marginTop: "-74px",
                    }}>
                        <div className="hex-column">
                            <Hexagon front={AWSLogo} back={<p>Python</p>}/>
                            <Hexagon front={ClaudeLogo} back={<p>Java</p>}/>
                            <Hexagon front={DbxLogo} back={<p>Golang</p>}/>
                            <Hexagon front={DockerLogo} back={<p>JavaScript</p>}/>
                            <Hexagon front={DBeaverLogo} back={<p>TypeScript</p>}/>
                        </div>
                        <div className="hex-column-odd"style={{
                            // marginLeft:"106px",
                        }}>
                            <Hexagon front={DrawIOLogo} back={<p>SQL</p>}/>
                            <Hexagon front={DremioLogo} back={<p>GraphQL</p>}/>
                            <Hexagon front={GitActionsLogo} back={<p>Bash</p>}/>
                            <Hexagon front={GitLogo} back={<p>HTML5</p>}/>
                            <Hexagon front={GrafanaLogo} back={<p>CSS</p>}/>
                            <Hexagon front={JiraLogo} back={<p>C++</p>}/>
                        </div>
                        <div className="hex-column">
                            <Hexagon front={KibanaLogo} back={<p>Kibana</p>}/>
                            <Hexagon front={MuralLogo} back={<p>Mural</p>}/>
                            <Hexagon front={NextJsLogo} back={<p>Next.js</p>}/>
                            <Hexagon front={NPMLogo} back={<p>npm</p>}/>
                            <Hexagon front={OpsGenieLogo} back={<p>OpsGenie</p>}/>
                        </div>
                        <div className="hex-column-odd">
                            <Hexagon front={PostmanLogo} back={<p>Postman</p>}/>
                            <Hexagon front={PowerBILogo} back={<p>PowerBI</p>}/>
                            <Hexagon front={PuTTyLogo} back={<p>PuTTy</p>}/>
                            <Hexagon front={ReactLogo} back={<p>React</p>}/>
                            <Hexagon front={TailwindLogo} back={<p>Tailwind</p>}/>
                            <Hexagon front={VBALogo} back={<p>VBA</p>}/>
                        </div>
                    </div>
                    <div className="left"><p className="languages">Languages</p></div>
                </div>
            </div>
                
        </div>

    );
}
