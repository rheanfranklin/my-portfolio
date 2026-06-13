export const PythonLogo: React.ReactNode = <img
    src="/images/icons/python-logo.svg"
    alt="python logo"
    className="logo-image"
/>

export const JavaLogo: React.ReactNode = <img
    src="/images/icons/java-logo.svg"
    alt="javascript logo"
    className="logo-image"
/>

export const GoLangLogo: React.ReactNode = <img
    src="/images/icons/golang-logo.svg"
    alt="python logo"
    className="go-logo"
/>

export const JavascriptLogo: React.ReactNode = <img
    src="/images/icons/javascript-logo.svg"
    alt="javascript logo"
    className="script-logo"
/>
export const TypescriptLogo: React.ReactNode = <img
    src="/images/icons/typescript-logo.svg"
    alt="typescript logo"
    className="script-logo"
/>
export const SQLLogo: React.ReactNode = <img
    src="/images/icons/sql-logo.svg"
    alt="SQL logo"
    className="sql-logo"
/>
export const GraphQLLogo: React.ReactNode = <img
    src="/images/icons/graphql-logo.svg"
    alt="graphQL logo"
    className="logo-image"
/>

export const BashLogo: React.ReactNode = <img
    src="/images/icons/bash-logo.svg"
    alt="bash logo"
    className="logo-image"
/>

export const HTMLLogo: React.ReactNode = <img
    src="/images/icons/html-logo.svg"
    alt="html logo"
    className="logo-image"
/>

export const CSSLogo: React.ReactNode = <img
    src="/images/icons/css-logo.svg"
    alt="css logo"
    className="logo-image"
/>

export const CLogo: React.ReactNode = <img
    src="/images/icons/c-logo.png"
    alt="c++ logo"
    className="logo-image"
/>

export const AWSLogo: React.ReactNode = <img
    src="/images/icons/aws-logo.png"
    alt="aws logo"
    className="logo-image"
/>

export const ClaudeLogo: React.ReactNode = <img
    src="/images/icons/claude-logo.png"
    alt="claude logo"
    className="logo-image"
/>

export const DbxLogo: React.ReactNode = <img
    src="/images/icons/databricks-logo.png"
    alt="databricks logo"
    className="logo-image"
/>

export const DockerLogo: React.ReactNode = <img
    src="/images/icons/docker-logo.png"
    alt="docker logo"
    className="logo-image"
/>

export const DBeaverLogo: React.ReactNode = <img
    src="/images/icons/dbeaver-logo.png"
    alt="dbeaver logo"
    className="logo-image"
/>

export const DrawIOLogo: React.ReactNode = <img
    src="/images/icons/drawio-logo.png"
    alt="drawio logo"
    className="logo-image"
/>

export const DremioLogo: React.ReactNode = <img
    src="/images/icons/dremio-logo.png"
    alt="dremio logo"
    className="logo-image"
/>

export const GitActionsLogo: React.ReactNode = <img
    src="/images/icons/git-actions-logo.png"
    alt="git actions logo"
    className="logo-image"
/>

export const GitLogo: React.ReactNode = <img
    src="/images/icons/git-logo.png"
    alt="git logo"
    className="logo-image"
/>

export const GrafanaLogo: React.ReactNode = <img
    src="/images/icons/grafana-logo.png"
    alt="grafana logo"
    className="logo-image"
/>

export const JiraLogo: React.ReactNode = <img
    src="/images/icons/jira-logo.svg"
    alt="jira logo"
    className="logo-image"
/>

export const KibanaLogo: React.ReactNode = <img
    src="/images/icons/kibana-logo.svg"
    alt="kibana logo"
    className="logo-image"
/>

export const MuralLogo: React.ReactNode = <img
    src="/images/icons/mural-logo.png"
    alt="mural logo"
    className="logo-image"
/>

export const NextJsLogo: React.ReactNode = <img
    src="/images/icons/next-js-logo.svg"
    alt="next.js logo"
    className="logo-image"
/>

export const NPMLogo: React.ReactNode = <img
    src="/images/icons/npm-logo.svg"
    alt="npm logo"
    className="logo-image"
/>

export const OpsGenieLogo: React.ReactNode = <img
    src="/images/icons/opsgenie-logo.png"
    alt="opsgenie logo"
    className="logo-image"
/>

export const PostmanLogo: React.ReactNode = <img
    src="/images/icons/postman-logo.svg"
    alt="postman logo"
    className="logo-image"
/>

export const PowerBILogo: React.ReactNode = <img
    src="/images/icons/power-bi-logo.png"
    alt="powerbi logo"
    className="logo-image"
/>

export const PuTTyLogo: React.ReactNode = <img
    src="/images/icons/putty-logo.png"
    alt="putty logo"
    className="logo-image"
/>
export const ReactLogo: React.ReactNode = <img
    src="/images/icons/react-logo.svg"
    alt="react logo"
    className="logo-image"
/>
export const TailwindLogo: React.ReactNode = <img
    src="/images/icons/tailwind-css-logo.png"
    alt="tailwind logo"
    className="logo-image"
/>
export const VBALogo: React.ReactNode = <img
    src="/images/icons/vba-logo.png"
    alt="vba logo"
    className="logo-image"
/>


export type LogoItem = {
    readonly category: string;
    readonly logo: React.ReactNode;
    readonly name: string;
}

export const LOGO_MAP: Record<string, LogoItem> = {
    bash: {
        category: "language",
        logo: BashLogo,
        name: "Bash"
    },
    cpp: {
        category: "language",
        logo: CLogo,
        name: "C++"
    },
    css: {
        category: "language",
        logo: CSSLogo,
        name: "CSS"
    },
    golang: {
        category: "language",
        logo: GoLangLogo,
        name: "Golang"
    },
    graphql: {
        category: "language",
        logo: GraphQLLogo,
        name: "Graphql"
    },

    html: {
        category: "language",
        logo: HTMLLogo,
        name: "HTML5"
    },
    java: {
        category: "language",
        logo: JavaLogo,
        name: "Java"
    },
    javascript: {
        category: "language",
        logo: JavascriptLogo,
        name: "JavaScript"
    },
    python: {
        category: "language",
        logo: PythonLogo,
        name: "Python"
    },
    sql: {
        category: "language",
        logo: SQLLogo,
        name: "SQL"
    },
    typescirpt: {
        category: "language",
        logo: TypescriptLogo,
        name: "TypeScript"
    },

    vba: {
        category: "language",
        logo: VBALogo,
        name: "VBA"
    },
    // d3js: {
    //     logo: D3Logo,
    //     name: "D3js",
    //     category: "framework",
    // },
    nextjs: {
        logo: NextJsLogo,
        name: "Next.js",
        category: "framework",
    },
    // p5js: {
    //     logo: P5Logo,
    //     name: "P5js",
    //     category: "framework",
    // },
    react: {
        logo: ReactLogo,
        name: "React",
        category: "framework",
    },
    tailwind: {
        logo: TailwindLogo,
        name: "Tailwind",
        category: "framework",
    },
    // pytest: {
    //     logo: PytestLogo,
    //     name: "Pytest",
    //     category: "framework",
    // },

    
    // // Data / Analytics Tools
    dremio: {
        logo: DremioLogo,
        name: "Dremio",
        category: "devtool",
    },
    databricks: {
        logo: DbxLogo,
        name: "Databricks",
        category: "devtool",
    },
    // powerbi: {
    //     logo: PowerBiLogo,
    //     name: "Power BI",
    //     category: "data",
    // },
    grafana: {
        logo: GrafanaLogo,
        name: "Grafana",
        category: "data",
    },
    kibana: {
        logo: KibanaLogo,
        name: "Kibana",
        category: "data",
    },
    // excel: {
    //     logo: ExcelLogo,
    //     name: "Excel",
    //     category: "data",
    // },
    dbeaver: {
        logo: DBeaverLogo,
        name: "DBeaver",
        category: "data",
    },
    // oracle: {
    //     logo: OracleLogo,
    //     name: "Oracle",
    //     category: "data",
    // },

    
    // IDEs
    // intellij: {
    //     logo: IntellijLogo,
    //     name: "IntelliJ",
    //     category: "ide",
    // },
    // eclipse: {
    //     logo: EclipseLogo,
    //     name: "Eclipse",
    //     category: "ide",
    // },
    // visualStudio: {
    //     logo: VisualStudioLogo,
    //     name: "Visual Studio",
    //     category: "ide",
    // },

    // Developer Tools
    git: {
        logo: GitLogo,
        name: "Git",
        category: "devtool",
    },
    github_actions: {
        logo: GitActionsLogo,
        name: "GitHub Actions",
        category: "devtool",
    },
    docker: {
        logo: DockerLogo,
        name: "Docker",
        category: "devtool",
    },
    // linux: {
    //     logo: LinuxLogo,
    //     name: "Linux",
    //     category: "devtool",
    // },
    postman: {
        logo: PostmanLogo,
        name: "Postman",
        category: "devtool",
    },
    putty: {
        logo: PuTTyLogo,
        name: "PuTTY",
        category: "devtool",
    },
    // drawio: {
    //     logo: DrawioLogo,
    //     name: "Draw.io",
    //     category: "devtool",
    // },
    mural: {
        logo: MuralLogo,
        name: "Mural",
        category: "devtool",
    },
    opsgenie: {
        logo: OpsGenieLogo,
        name: "Opsgenie",
        category: "devtool",
    },
    // heroku: {
    //     logo: HerokuLogo,
    //     name: "Heroku",
    //     category: "devtool",
    // },

    
    // Cloud
    aws: {
        logo: AWSLogo,
        name: "AWS",
        category: "cloud",
    },


    // Package / Dependency Tools
    npm: {
        logo: NPMLogo,
        name: "npm",
        category: "package",
    },
    // poetry: {
    //     logo: PoetryLogo,
    //     name: "Poetry",
    //     category: "package",
    // },

    


    // AI / Code Assistance
    claude: {
        logo: ClaudeLogo,
        name: "Claude",
        category: "ai",
    },
    // copilot: {
    //     logo: SonarQubeLogo,
    //     name: "SonarQube",
    //     category: "ai",
    // },
    // sonarqube: {
    //     logo: SonarQubeLogo,
    //     name: "SonarQube",
    //     category: "ai",
    // },
};

export type GridRow = {
    readonly rowContent: LogoItem[];
    readonly tabs: Record<string, string | null>;
}

export const GRID_ROWS: Record<number, GridRow> = {
    1: {
        rowContent: [
            LOGO_MAP.bash,
            LOGO_MAP.cpp,
            LOGO_MAP.css,
            LOGO_MAP.golang,
            LOGO_MAP.graphql,
        ],
        tabs: {
            left: "Languages",
            right: null
        }
    },
    2: {
        rowContent: [
            LOGO_MAP.html,
            LOGO_MAP.java,
            LOGO_MAP.javascript,
            LOGO_MAP.typescirpt,
            LOGO_MAP.python,
            LOGO_MAP.sql,
        ],
        tabs: {
            left: null,
            right: null,
        }
    },
    3: {
        rowContent: [
            LOGO_MAP.nextjs,
            LOGO_MAP.react,
            LOGO_MAP.tailwind,
            // LOGO_MAP.pytest,
            // LOGO_MAP.d3js
        ],
        tabs: {
            left: null,
            right: "Frameworks",
        }
    },
    4: {
        rowContent: [
            LOGO_MAP.dremio,
            LOGO_MAP.databricks,
            // LOGO_MAP.powerbi,
            LOGO_MAP.grafana,
            LOGO_MAP.kibana,
            // LOGO_MAP.excel,
        ],
        tabs: {
            left: "Data / Analytics",
            right: null,
        }
    },
    5: {
        rowContent: [
            LOGO_MAP.dbeaver,
            // LOGO_MAP.oracle,
            // LOGO_MAP.intellij,
            // LOGO_MAP.eclipse,
            // LOGO_MAP.visualStudio

        ],
        tabs: {
            left: null,
            right: "IDEs",
        }
    },
    6: {
        rowContent: [
            LOGO_MAP.git,
            LOGO_MAP.github_actions,
            LOGO_MAP.docker,
            // LOGO_MAP.linux,
            LOGO_MAP.postman,
            LOGO_MAP.putty,
        ],
        tabs: {
            left: "DevTools",
            right: null,
        }
    },
    7: {
        rowContent: [
            // LOGO_MAP.drawio,
            LOGO_MAP.mural,
            LOGO_MAP.opsgenie,
            // LOGO_MAP.heroku,
            LOGO_MAP.aws,
        ],
        tabs: {
            left: null,
            right: "Cloud",
        }
    },
    8: {
        rowContent: [
            LOGO_MAP.npm,
            // LOGO_MAP.poetry,
            LOGO_MAP.claude,
            // LOGO_MAP.copilot,
            // LOGO_MAP.sonarqube,
        ],
        tabs: {
            left: "Package / Dependency Tools",
            right: "AI / Code Assistance",
        }
    }
};

