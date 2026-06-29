//
// Personal projects
//
// portfolio
export const PortfolioProjFront = (
    <div className="portfolio">
        <h2>Portfolio</h2>
        <h3>Summary:</h3>
        <p>
            Let's start off with the project you're currently looking at - this portfolio! Built so
            recruiters could get a well-rounded understanding of who I am, both as a person and an engineer.
        </p>
    </div>
);

export const PortfolioProjBack = (
    <div>
        <h3>Tech Stack:</h3>
        <div className="tech-stack">
            {/* First col */}
            <div>
                <h4>Languages:</h4>
                <ul>
                    <li>
                        TypeScript
                    </li>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                </ul>
            </div>
            {/* Second col */}
            <div>
                <h4>Frameworks:</h4>
                <ul>
                    <li>
                        Next.js
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        npm
                    </li>
                </ul>
            </div>
        </div>
        <p>Hosted on AWS Amplify</p>
        <h3>GitHub Repo</h3>
        <p>See code <a href="https://github.com/rheanfranklin/my-portfolio" className="link" target="_blank">here</a>.</p>
    </div>
);

// Cat animation
export const CatAnimationProjFront = (
    <div className="cat-animation">
        <h2>Cat Animation</h2>
        <h3>Summary:</h3>
        <p>
            In university, I was tasked with an assignment to create any animation of our choosing, using
            JavaScript and the p5.js library. I ended up creating an animation about a cat and his owner
            that you can watch here. I enjoyed my project so much that I decided to come back after a couple
            years to refine & polish my code so that it met my current standards.
        </p>
        
    </div>
);

export const CatAnimationProjBack: React.ReactNode = (
    <div>
        <h3>Tech Stack:</h3>
        <div className="tech-stack">
            {/* First col */}
            <div>
                <h4>Languages:</h4>
                <ul>
                    <li>
                        JavaScript
                    </li>
                </ul>
            </div>
            {/* Second col */}
            <div>
                <h4>Libraries:</h4>
                <ul>
                    <li>
                        p5.js
                    </li>
                </ul>
            </div>
        </div>
        <h3>GitHub Repo:</h3>
        <p>See code <a href="https://github.com/rheanfranklin/cat-animation" className="link" target="_blank">here</a>.</p>
        <h3>View:</h3>
        <p>Watch animation <a href="" className="link" target="_blank">here</a>.</p>
    </div>
);

//
// University projects
//
// Dungeon crawler game
export const DungeonGameProjFront = (
    <div>

    </div>
);

export const DungeonGameProjBack = (
    <div>

    </div>
);

// Calendar
export const CalendarProjFront = (
    <div>
        
    </div>
);

export const CalendarProjBack = (
    <div>

    </div>
);

// ping pong game
export const PingProjFront = (
    <div>
        
    </div>
);

export const PingProjBack = (
    <div>

    </div>
);


//
// FactSet Projects
//
// Dremio view deployer
export const SQLViewDeployerFront = (
    <div className="dvd">
        {/* Title */}
        <h2>SQL View Deployer</h2>
        {/* Card description */}
        <div className="description">
            <h3>Summary:</h3>
            <h4>Problem:</h4>
            <p>
                Users (internal employees) would write SQL definitions & configure view materializaitons
                in our dev data warehouse environment. When they wanted to promote their work, they would
                have to manually copy & paste those definitions to staging and production.<br/>
                This obviously created issues
            </p>
            <h4>Fix:</h4>
            <p>
                I worked with one other engineer to add new infrastructure to automate & validate deployments
                of SQL-defined views & their materializations from our dev cluster to staging and production.
            </p>
        </div>
    </div>
);

export const SQLViewDeployerBack = (
    <div>
        <h3>Implementation details:</h3>
        <p>
            I set up a GitHub repository and used it to store all the SQL definitions 
            loaded in all our environments. When a user wanted to promote the changes they made to their views,
            they would go to an app, select which views they wanted to promote, click a button to validate the SQL,
            and then click "Promote". 
            The app would then create a PR into the "development" branch in the GitHub
            repo with the users changes and run various validations against the views on the PR.
            Once that was merged into development, a new PR would be automatically opened with those same changes
            into our "staging" branch and again for production. When a PR was merged into the staging or production
            branches, the changes were deployed to the corresponding data warehouse cluster.
        </p>
        <h3>Tech Stack:</h3>
        <div className="tech-stack">
            {/* First col */}
            <div>
                <h4>Languages:</h4>
                <ul>
                    <li>
                        Python
                    </li>
                </ul>
                <h4>Tooling:</h4>
                <ul className="grid grid-cols-2">
                    <div>
                        <li>
                            Dremio
                        </li>
                        <li>
                            GitHub
                        </li>
                    </div>
                    <div>
                        <li>
                            GitHub Actions
                        </li>
                    </div>
                </ul>
            </div>
            {/* Second col */}
            <div>
                <h4>Libraries:</h4>
                <ul>
                    <li>
                        Pytest
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

// CIF rework

export const InfrastructureReworkProjFront = (
    <div className="infrastructure-rework">
        <h2>Infrastructure Rework</h2>
        <h3>Summary:</h3>
        <h4>Problem:</h4>
        <p>
            The infrastructure we used to recieve files of data, load them into databases, and connect those databases
            to our data warehouse was poorly written, difficult to maintain, and prone to errors. 
        </p>
        <h4>Fix:</h4>
        <p>
            I worked on an engineering team to re-write the entire infrastructure from stratch using best coding practices.
        </p>
    </div>
);

export const InfrastructureReworkProjBack = (
    <div>
        <h3>Tech Stack:</h3>
        
        <div className="tech-stack">
            {/* First col */}
            <div>
                <h4>Languages:</h4>
                <ul>
                    <li>
                        Python
                    </li>
                    <li>
                        Bash
                    </li>
                </ul>
                <h4>Tooling:</h4>
                <ul>
                    <li>
                        GitHub
                    </li>
                    <li>
                        GitHub Actions
                    </li>
                    <li>
                        SonarQube
                    </li>
                    <li>
                        AWS
                    </li>
                </ul>
            </div>
            {/* Second col */}
            <div>
                <h4>Libraries:</h4>
                <ul>
                    <li>
                        FastAPI
                    </li>
                    <li>
                        Celery
                    </li>
                    <li>
                        Pytest
                    </li>
                    <li>
                        dependency-injector
                    </li>
                    <li>
                        SQLModel
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

// Dremio to Databricks Transition
export const TransitionProjFront = (
    <div>
        <h2>Data warehouse transition</h2>
        <h3>Summary:</h3>
        <h4>Problem:</h4>
        <p>
            The initial data warehouse we were using was not sufficiently scaling with the number of
            databases we were connecting to it. Instances of the warehouse would go down often,
            making the entire environment unavailable so we could no longer query data
            from that instance. The materializations generated by the warehouse would also break often
            for no apparent reason and would have to be manually restarted.
        </p>
        <h4>Fix:</h4>
        <p>
            I worked as part of a two-team effort to refactor +100,000 lines of code in multiple
            respoitories to support the transition from one warehouse to another for the entire ETL
            pipeline. I also helped replaced the built-in materialization functionality with dbt.
            
        </p>
    </div>
);

export const TransitionProjBack = (
    <div>
        <h3>Implementation details:</h3>
        <p>
            We updated our codebases so that our ETL pipeline could support the use of both warehouses.
            Once all transitional code was written, we would perform benchmarking tests against
            our databases for each warehouse. When we felt comfortable with the test results for a
            subset of those databases, we would update our API so data would be pulled from the new
            warehouse for that subset and continue to monitor its performance. We repeated this process until we 
            transitioned all databases to the new warehouse. Once that was all done, we removed the deprecateed
            code associated with the old warehouse and the project was considered finished.
        </p>
        <h3>Tech Stack:</h3>
        <div className="tech-stack">
                {/* First col */}
                <div>
                    <h4>Languages:</h4>
                    <ul className="grid grid-cols-2">
                        <li>
                            Python
                        </li>
                        <li>
                            Golang
                        </li>
                        <li>
                            Bash
                        </li>
                        <li>
                            SQL
                        </li>
                        <li>
                            GraphQL
                        </li>
                    </ul>
                </div>
                
        </div>
    </div>
);

// CAP
export const CAPProjFront = (
    <div className="cap">
        <h2>CAP</h2>
        <h3>Summary:</h3>
        <p>
            Users (internal employees) were promoting individual groups of views & materializations
            to staging and production. Occasionally, those users wouldn't finish promoting their changes all the way
            up to production.
            Over time, this created a large disparity between what was in staging and what was in
            production. We started running into errors where the SQL definition of a view would work
            in staging, but not production because it relied on had changes that weren't in
            production.
        </p>
        <h3>Fix:</h3>
        <p>
            I wrote CAP as part of a hackathon project, which stands for CIF (content integration framework)
            automated promotions. Instead of deploying a group of views at a time, all changes
            pushed into the development branch would be promoted all at once to staging and production
            on a schedule.
        </p>
    </div>
);

export const CAPProjBack = (
    <div className="cap">
        <h3>Implementation details:</h3>
        <p>
            The CAP workflow would start off my comparing the development and staging branches in GitHub and
            extract any SQL files were changed. It validated that all the columns referenced in the SQL
            views existed in the table that it was referencing. The updated views were loaded into our staging
            data warehouse in order of dependency (so parent views were deployed before child views to avoid
            errors). If any view failed to deploy, then all changes were reverted. An engineer would run another workflow that would remove the
            changes causing the error, and re-run the deployment. If the deployment was successful, then we'd merge the
            development branch into the staging branch. This same process would occur for staging into production
            the next day.
        </p>
        <h3>Tech Stack:</h3>
        <div className="tech-stack">
            {/* First col */}
            <div>
                <h4>Languages:</h4>
                <ul>
                    <li>Python</li>
                    <li>Bash</li>
                </ul>
            </div>
            <div>
                <h4>Libraries:</h4>
                <ul>
                    <li>PyGithub</li>
                </ul>
            </div>
        </div>
    </div>
);

// Other small projects
export const OtherThingsProjFront = (
    <div className="other">
        <h2>And some other small solo-projects</h2>
        <div className="other-grid">
            {/* First col */}
            <div>
                <h3>PR Daemon</h3>
                <h4>Problem:</h4>
                <p>
                    Since we had hundreds of users all using the same repository that contained SQL defintions,
                    materialization configurations, and metadata specifications, we opted to not give them all
                    admin priviledges to the repo. This meant that a user had to create a support channel request (which
                    was handled by my team) every time they wanted to merge in a PR to our development branch.
                </p>
                <h4>Fix:</h4>
                <p>
                    I proposed and implemented a daemon that would routinely pull all the PRs from GitHub
                    that contained some label, iterate over them, confirm that all checks passed and that it was
                    approved by a codeowner of the changed files, and automatically merged it into the base
                    branch (usually development). Now users just have to add that label to their PR when they're ready to merge. 
                </p>
            </div>
            {/* Second col */}
            <div>
                <h3>Stale PR GitHub Action</h3>
                <h4>Problem:</h4>
                <p>
                    Users would create review apps against their PRs in the view/metadata repo to test their
                    metadata changes. Over time, we ended up with a 100+ open review apps at once, all of
                    which were hosted on AWS and therefore eating into our budget.
                </p>
                <h4>Fix:</h4>
                <p>
                    I wrote a GitHub action that would iterate through all open PRs in the view/metadata repo
                    and add a "stale" label if there was no recent activity on the PR and there were no logs in our
                    central logging platform for the associated review app for X number of days. Once the label
                    was added, a comment was made on the PR notifying the user of it's imminent closure. If the
                    stale PR still had no review app logs or PR activity after another 7 days, the PR would be
                    closed automatically, which would trigger the closure of the review app.
                </p>
            </div>
        </div>
    </div>
)

export const OtherThingsProjBack = (
    <div className="other">
        <div className="other-grid">
            {/* First col */}
            <div>
                <h3>Updating GitHub's codeowners file</h3>
                <h4>Problem:</h4>
                <p>
                    Users needed to get their PR approved by a codeowner before it could be merged by the PR daemon.
                    In order for someone to be considered a codeowner, their GitHub username would have to be added
                    to the CODEOWNERS file for whatever directory they want to have approval permissions for. This
                    task would have to be handled by my engineering team. 
                </p>
                <h4>Fix</h4>
                <p>
                    In my downtime, I wrote a GitHub workflow that would automatically create a PR adding a user to our
                    CODEOWNERS file. That PR would then be approved and merged in by one of our bots with
                    admin privileges. The workflow would have to be triggered by someone other than the user that was
                    being added as codeowner, just to make sure we didn't have users mass adding themselves as codeowners
                    with no oversight.
                </p>
            </div>
            {/* Second col */}
            <div>
            </div>
        </div>
    </div>
)
