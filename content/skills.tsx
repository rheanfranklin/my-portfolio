export const CATEGORY: Record<string, string> = {
    language: "language",
    framework: "framework",
    devtool: "devtool",
    data: "data-analytics",
    ide: "ide",
    cloud: "cloud",
    package: "package",
    ai: "ai"
}

export const DEFAULT_ICON_HEIGHT = "50%";
export const DEFAULT_ICON_WIDTH = "50%";

enum Category {
    language = "language",
    framework = "framework",
    devtool = "devtool",
    data = "data",
    ide = "ide",
    cloud = "cloud",
    package = "package",
    ai = "ai",
}

enum Icon {
    aws = "aws", // should correspond to file name -> {Icon.value}-logo.png
    bash = "bash",
    claude = "claude",
    copilot = "copilot",
    cpp = "cpp",
    css = "css",
    d3js = "d3js",
    databricks = "databricks",
    dbeaver = "dbeaver",
    docker = "docker",
    drawio = "drawio",
    dremio = "dremio",
    eclipse = "eclipse",
    excel = "excel",
    fastapi = "fastapi",
    gitactions = "gitactions",
    githubcopilot = "githubcopilot",
    git = "git",
    golang = "golang",
    grafana = "grafana",
    graphql = "graphql",
    heroku = "heroku",
    html = "html",
    intellij = "intellij",
    java = "java",
    javascript = "javascript",
    jira = "jira",
    kibana = "kibana",
    linux = "linux",
    mural = "mural",
    nextjs = "nextjs",
    npm = "npm",
    opsgenie = "opsgenie",
    oracle = "oracle",
    p5js = "p5js",
    poetry = "poetry",
    postman = "postman",
    powerbi = "powerbi",
    putty = "putty",
    pytest = "pytest",
    python = "python",
    react = "react",
    sonarqube = "sonarqube",
    sql = "sql",
    tailwind = "tailwind",
    typescript = "typescript",
    vba = "vba",
    visualstudio = "visualstudio",
}

type IconSizeConfig = {
    height: string;
    width: string;
}

export type LogoItem = {
    readonly category: string;
    readonly logo: React.ReactNode;
    readonly name: string;
}

export type Tab = {
    readonly category?: string;
    readonly str?: string;
}

export type GridRow = {
    readonly rowContent: LogoConfig[];
    readonly tabs: Record<string, Tab | null>;
}

export type LogoConfig = {
    name?: string;
    readonly category: string;
    logo?: React.ReactNode;
    readonly iconSize?: IconSizeConfig;
}

export function getLogoMap(): Record<Icon, LogoConfig> {
    return ({
        aws: {
            name: "AWS", // defaults to key + first letter capitalized
            category: Category.devtool,
            iconSize: {
                height: "70px",
                width: "70px",
            }
        },
        bash: {
            category: Category.language, 
        },
        claude: {
            category: Category.devtool,
        },
        copilot: {
            category: Category.devtool,
        },
        cpp: {
            name: "C++",
            category: Category.language,
        },
        css: {
            name: "CSS",
            category: Category.language,
        },
        d3js: {
            category: Category.framework,
        },
        databricks: {
            category: Category.devtool,
        },
        dbeaver: {
            category: Category.devtool,
        },
        docker: {
            category: Category.devtool,
        },
        drawio: {
            category: Category.devtool,
            iconSize: {
                height: "45%",
                width: "45%",
            }
        },
        dremio: {
            category: Category.devtool,
        },
        eclipse: {
            category: Category.devtool,
        },
        excel: {
            category: Category.devtool,
        },
        fastapi: {
            name: "FastAPI",
            category: Category.framework,
        },
        git: {
            category: Category.devtool,
        },
        gitactions: {
            name: "GitHub Actions",
            category: Category.devtool,
        },
        githubcopilot: {
            name: "GitHub Copilot",
            category: Category.devtool,
        },
        golang: {
            category: Category.language,
            iconSize: {
                height: "70%",
                width: "70%",
            }
        },
        grafana: {
            category: Category.devtool,
        },
        graphql: {
            category: Category.language,
            iconSize: {
                height: "60%",
                width: "60%",
            }
        },
        heroku: {
            category: Category.devtool,
        },
        html: {
            name: "HTML5",
            category: Category.language,
        },
        intellij: {
            category: Category.devtool,
            iconSize: {
                height: "60%",
                width: "60%",
            }
        },
        java: {
            category: Category.language,
        },
        javascript: {
            name: "JavaScript",
            category: Category.language,
            iconSize: {
                height: "43%",
                width: "43%",
            }
        },
        jira: {
            category: Category.devtool,
        },
        kibana: {
            category: Category.devtool,
            iconSize: {
                height: "60%",
                width: "60%",
            }
        },
        linux: {
            category: Category.devtool,
        },
        mural: {
            category: Category.devtool,
            iconSize: {
                height: "100%",
                width: "100%",
            }
        },
        nextjs: {
            name: "Next.js",
            category: Category.framework,
        },
        npm: {
            name: "npm",
            category: Category.framework,
        },
        opsgenie: {
            category: Category.devtool,
        },
        oracle: {
            category: Category.devtool,
        },
        p5js: {
            name: "p5.js",
            category: Category.framework,
        },
        poetry: {
            category: Category.framework,
            iconSize: {
                height: "65%",
                width: "65%",
            }
        },
        postman: {
            category: Category.devtool,
        },
        powerbi: {
            name: "PowerBI",
            category: Category.devtool,
        },
        putty: {
            name: "PuTTy",
            category: Category.devtool,
        },
        pytest: {
            category: Category.framework,
            iconSize: {
                height: "65%",
                width: "65%",
            }
        },
        python: {
            category: Category.language,
        },
        react: {
            category: Category.framework,
        },
        sonarqube: {
            name: "SonarQube",
            category: Category.devtool,
        },
        sql: {
            name: "SQL",
            category: Category.language,
        },
        tailwind: {
            category: Category.framework,
            iconSize: {
                height: "60%",
                width: "60%",
            }
        },
        typescript: {
            name: "TypeScript",
            category: Category.language,
            iconSize: {
                height: "43%",
                width: "43%",
            }
        },
        vba: {
            name: "VBA",
            category: Category.language,
        },
        visualstudio: {
            name: "Visual Studio",
            category: Category.devtool,
        },
    });
}


export function gridRows(logoMap: Record<string, LogoConfig>): Record<number, GridRow> {
    return ({
        1: {
            rowContent: [
                logoMap[Icon.python],
                logoMap[Icon.javascript],
                logoMap[Icon.typescript],
                logoMap[Icon.java],
            ],
            tabs: {
                left: null,
                right: null,
            }
        },
        2: {
            rowContent: [
                logoMap[Icon.html],
                logoMap[Icon.css],
                logoMap[Icon.cpp],
                logoMap[Icon.golang],
            ],
            tabs: {
                left: null,
                right: {
                    category: Category.language,
                    str: "Languages",
                },
            }
        },
        3: {
            rowContent: [
                
                logoMap[Icon.bash],
                logoMap[Icon.graphql],
                logoMap[Icon.sql],
                logoMap[Icon.vba],
                
            ],
            tabs: {
                left: null,
                right: null,
            },
        },
        4: {
            rowContent: [
                logoMap[Icon.nextjs],
                logoMap[Icon.react],
                logoMap[Icon.fastapi],
                logoMap[Icon.pytest],
            ],
            tabs: {
                right: {
                    category: CATEGORY.framework,
                    str: "Frameworks / Packages",
                },
            },
        },
        5: {
            rowContent: [
                logoMap[Icon.dremio],
                logoMap[Icon.databricks],
                logoMap[Icon.git],
                logoMap[Icon.gitactions],
            ],
            tabs: {
                left: null,
                right: null,
            }
        },
        6: {
            rowContent: [
                logoMap[Icon.postman],
                logoMap[Icon.visualstudio],
                logoMap[Icon.putty],
                logoMap[Icon.aws],
                
            ],
            tabs: {
                left: null,
                right: {
                    category: CATEGORY.devtool,
                    str: "Dev tools",
                },
            },
        },
        7: {
            rowContent: [
                logoMap[Icon.claude],
                logoMap[Icon.githubcopilot],
                logoMap[Icon.sonarqube],
                logoMap[Icon.excel],
                
            ],
            tabs: {
                left: null,
                right: null,
            }
        },
    });
}

export const DataAnalyticsContent: React.ReactNode = (
    <div className="skills-expandable-box-content grid grid-cols-1 md:grid-cols-2">
        <ul>
            <li>Big Data</li>
            <li>Relational databases</li>
            <li>Data analytics</li>
            <li>Data governance</li>
        </ul>
        <ul>
            <li>ETL pipelines</li>
            <li>Data visualization</li>
            <li>Central logging</li>
            <li>View materializations</li>
        </ul>
    </div>
);

export const SoftwareDeliveryAndQualityContent: React.ReactNode = (
    <div className="grid grid-cols-1 md:grid-cols-2">
        <ul>
            <li>Unit, integration, and end-to-end testing</li>
            <li>User testing and research</li>
            <li>CI/CD</li>
            <li>OOD/OOP</li>
            
        </ul>
        <ul>
            <li>UML</li>
            <li>Agile software development</li>
            <li>API develpoment</li>
            <li>Web development</li>
        </ul>
    </div>
);

export const SystemsAndInfrastructureContent: React.ReactNode = (
    <div>
        <ul>
            <li>Maintenance of and developmnent upon complex distributed systems</li>
            <li>Cloud computing</li>
            <li>Enterprise resource planning & disposal</li>
        </ul>
    </div>
);

export const OperationsAndSupportContent: React.ReactNode = (
    <div>
        <ul>
            <li>24/7 on-call rota</li>
            <li>Handling support requests</li>
        </ul>
    </div>
);