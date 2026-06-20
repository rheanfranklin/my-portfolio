import Link from "next/link";
//
// Welcome subsection
import AnimatedFlipCard from "@/app/components/AnimatedFlipCard";
import { NAV_LINKS } from "@/app/components/Navbar";

//
export const AboutIntroContent: React.ReactNode = <p className="section-description">
  Hello there! I'm so excited you're here! On this page you can find an in-depth description
  of who I am, both as a person and an engineer, so you can know if I match what you're looking for.
</p>;

//
// My History subsction
//
// FactSet
export const MyHistoryFactSetContent: React.ReactNode = (
  <div>
    <h3>Software Engineer</h3>
    <h4>Context:</h4>
    <p>FactSet provides its clients with a wide variety of company-level financial data (e.g. stock prices, company assets, company financial statements, etc.)
      which they use to assess risk, track earning insights, and make investment decisions for their stock portfolios.
    </p>
    <h4>Main responsibilities:</h4>
    <ul>
      <li>
        Provided support for, implemented features, and helped maintain the infrastructure for FactSet's main ETL pipeline.
        This pipeline is used by hundreds of internal employees to onboard & update hundreds of databases containing financial data
        used directly by clients.
      </li>
      <li>
        Added new infrastructure to automate & validate deployments of SQL-defined views from the dev environment to staging to production. Previously,
        users were manually copying & pasting SQL definitions from one environment to another, with little oversight or validation.
      </li>
      <li>
        Acted as a 24/7 on-call engineer & responded to support channel requests on a monthly rotation.
      </li>
    </ul>
  </div>
);
// Johnson & Johnson
export const MyHistoryJohnsonContent: React.ReactNode = (
  <div>
    <h3>Product Planning & Logistics</h3>
    <h4>Context:</h4>
    <p>
      I worked for a subsidiary company of Johnson & Johnson called <em>Ethicon</em>, which specialized in surgical technologies,
      wound closure, and medical devises. My position was located in a raw-materials manufacturing plant in Cornelia, GA. This 
      plant was used to produce dermabond, sutures, and needles. The sutures and needles were then shipped to our finishing plants
      to be attached together, sanitized, packaged, & distributed to customers.
    </p>
    <h4>Main responsibilities:</h4>
    <ul>
      <li>
        Ordered the production and shipment of nylon, prolene, and silk sutures.
      </li>
      <li>
        Responsible for processing & recording all requests for destruction of expired/damaged materials in compliance with state and  
        federal regulations. Facilitated the transfer of this process from paper format to digital.	
      </li>
      <li>
        Wrote	SQL	scripts to pull information	from company database	for	reporting	purposes,	data validation,	and	in
        support	of internal	&	external audits	
      </li>
      <li>
         Facilitated updates to	material specifications, procedures, and bill	of materials of highly regulated	medical	products.
      </li>
    </ul>
  </div>
);
// GA Tech
export const MyHistoryGATechContent: React.ReactNode = (
  <div>
    <p>
      I completed my bachelors in computer science with a specialization in user interface. My school work was written in
      Java, C++, and TypeScript.
    </p>
  </div>
);

//
// My Motivation subsection
//
export const MyMotivationFeelingAccomplishedCardBack: React.ReactNode = (
  <p>
    Nothing is more satisfying to me in my workday than clicking a checkmark on my to-do list.<br/><br/>I feel the
    most motivated  when I'm able to reflect on my work and be proud of what I've accomplished.<br/><br/> Being able to see tangible output of my efforts
    is important to me, whether it be an entire application I built from the ground up or a list of bugs
    I've resolved within the last sprint.
  </p>
);

export const MyMotivationHelpingOthersCardBack: React.ReactNode = (
    <p>
      I also love helping others and feeling like I've made someone's day easier. <br/><br/> Some of my favorite projects
      I've worked on are internal tools used by other employees to improve their workflow efficiency (see the <em>My Projects</em> page for
      some examples). <br/> <br/>I have a
      knack for seeing pain points of complex systems and coming up with solutions to ease those issues
      so my collegues can focus on feature implementation instead of damage control.
    </p>
);

//
// My Style subsection
//
// Software Development
export const StyleSDOrganized: React.ReactNode = (
  <p>
    I thrive off of structure & organization; my head is already scatterbrained enough, so the last thing I
    need is for my code to be just as chaotic.<br/><br/>Every function, class, & file is modular and has one specific purpose. 
    Every section of logic has its own inline explanation. <br/><br/>I hate looking back at my own work and having difficulty understanding what
    and why I did things.
  </p>
);

export const StyleSDScalable: React.ReactNode = (
  <p>
    Having worked on large, evolving systems, I've learned that scalability is essential if you want to build a system that lasts.<br/><br/>
    That means I'm always on the lookout for any step in a process that requires manual or tedious work and take the initiate to replace it with
    an automated process.<br/><br/>
    When designing systems or features, I focus on structuring the code so new pieces can be added or old ones removed with ease.<br/><br/>
    I rely on techniques like dependency injection, SPP, and class inheritance to keep the architecture modular, adaptable, and easy to extend.
  </p>
);

export const StyleSoftwareDevelopmentContent: React.ReactNode = (
  <div className="software-development">
      <h4>How I go about developing software:</h4>
        <div className="card-row">
          <AnimatedFlipCard
            front="Organized and Detail-Oriented"
            back={StyleSDOrganized}
            height="23rem"
            width="100%"
          />
          <AnimatedFlipCard
            front="Future Focused & Scalable"
            back={StyleSDScalable}
            height="23rem"
            width="100%"
          />
        </div>
    </div>
);

// Collaboration
export const StyleCollabPositivity: React.ReactNode = (
  <p>
    I make it a point to bring positivity wherever I go. I enjoy creating an environment 
    where people feel comfortable expressing themselves & speaking their mind. 
  </p>
);

export const StyleCollabOpen: React.ReactNode = (
  <p>
    A key part of achieving a positive & productive environment is being
    accepting of everyone, regardless of who they are or their walk of life.
    <br/><br/>I would never judge someone over something that doesn't matter.
    I welcome a variety of perspectives and believe diversity of thought
    creates wellroundedness.
  </p>
);

export const StyleCollabCommunication: React.ReactNode = (
  <p>
    I think the best way to learn or figure something out is to reach out to an expert.
    I've learned my leason from spending hours on an problem and then getting an immediate
    solution once I talk to someone with more experience.
    <br/><br/>I also value thorough communication of my work so any of my colleagues can pick up
    where I left off if I ever need to shift my focus or they need to build upon/debug my code.
  </p>
);

export const StyleCollabConnection: React.ReactNode = (
  <p>
    When it comes to my teammates, I like keeping things casual & lighthearted. Work is more fun when you get to 
    connect with the people around you.
  </p>
);

export const StyleCollaborationContent: React.ReactNode = (
  <div className="collaboration">
      <h4>How I go about collaboration:</h4>
      <div className="card-grid">
        {/* First col */}
        <div className="card-col">
          <AnimatedFlipCard
              front="Positivity"
              back={StyleCollabPositivity}
              height="12rem"
              width="100%"
          />
          <AnimatedFlipCard
            front="Open & Accepting"
            back={StyleCollabOpen}
            height="22rem"
            width="100%"
          />
        </div>
        {/* Second row */}
        <div className="card-col">
          <AnimatedFlipCard
            front="Communication"
            back={StyleCollabCommunication}
            height="22rem"
            width="100%"
          />
          <AnimatedFlipCard
            front="Connection"
            back={StyleCollabConnection}
            height="12rem"
            width="100%"
          />
        </div>
      </div>
    </div>
);

// AI
export const StyleAIIntro: React.ReactNode = (
  <p>
    It's clear that AI's integration into our workflows as software engineers is inevitable.
    It is an incredibly powerful tool, and I believe it's just as incredibly important that we
    priortize using it appropriately. The last thing we want is to end up with a bunch of AI generated code of
    poor to mediocre quality in production, and then have no idea what it does when it breaks.
    <br/><br/>
    That's why I'm mindful of when & how I use AI.
  </p>
);

export const StyleAIOwnership: React.ReactNode = (
  <p>
    I always take ownership of all design and implementation decisions for any code I put on a PR.
    <br/><br/>When incorporating AI into my work, I first write up single-purpose
    stubs with detailed inline comments of their purpose, the logic they implement, and how they string together. The only thing I leave up to AI is tedious
    language and package specific details.
    <br/><br/>Working this way has enabled me to create well designed tools with a thorough
    understanding of how those tools work, all while expediting my output ten fold. I love that I can focus on the structure of my code instead of spending hours
    trying to debug annoying syntax errors on a programming language I'm not familiar with.
  </p>
);

export const StyleAILittleThings: React.ReactNode = (
  <p>
    I find AI to be great at reviewing PR descriptions, giving function/file name suggestions, generating documentation,
    and assisting me with debugging (while we're on the topic - no, none of this was written by AI LOL).
  </p>
);

export const StyleAIReview: React.ReactNode = (
  <p>
    As useful as it may be, I still make it a point to thoroughly review & understand everything that was generated with AI.
    <br/><br/>
    I never want to push some changes to production, be asked what I did or why I did something a certain way, and then not have an answer.
  </p>
);

export const StyleAIContent: React.ReactNode = (
    <div className="ai">
      <h4>How I go about using AI:</h4>
      {StyleAIIntro}
        <div className="card-col">
            {/* First row */}
            <div className="card-row">
              <AnimatedFlipCard
                front="Taking ownership"
                back={StyleAIOwnership}
                height="23rem"
                width="50%"
              />
            </div>
            
            {/* Second row */}
            <div className="card-row">
              <AnimatedFlipCard
                front="Use it for the little things"
                back={StyleAILittleThings}
                height="13rem"
                width="100%"
              />
              <AnimatedFlipCard
                front="Thorough review of generated code"
                back={StyleAIReview}
                height="13rem"
                width="100%"
              />
            </div>
          </div>
    </div>
);

// Propblem solving
export const StyleProblemSolvingContent: React.ReactNode = (
  <p>
    Test
  </p>
);

//
// My Hobbies subsection
//
// weightlifting
export const MyHobbiesWeightLifting: React.ReactNode = (
  <p>
    I do a little bit of weightlifting here and there. Am I good at it ? No.
    Do I still try ? Sometimes, when I feel like it ... <br/><br/>
    My bench is 135lbs & I can do like, 10 push-ups. Fear me.
  </p>
);
// illustration
export const MyHobbiesIllustration: React.ReactNode = (
  <p>
    In my free time, I like to do a little bit of drawing, both traditional & digital.
    <br/><br/>
    See some of my work <Link href={NAV_LINKS.illustration} className="link">here</Link>.
  </p>
);

//
// Fun Facts subsection
//
export const FunFacts: React.ReactNode = (
  <ul>
    <li>- My favorite food is garlic noodles dipped in cinnamon applesauce.</li>
    <li>- I ate ramen noodles everyday for 3 years straight as an adult.</li>
    <li>- I had two pet squirrels growing up. The first one drowned in our toilet & the second one bit me :,(</li>
    <li>- I'm an emerald Briar OTP in League of Legends.</li>
    <li>- I will fight anyone who asks for a duel.</li>
    <li>- I was the salutatorian at my highschool (is this still impressive when you're almost 30 ?).</li>
  </ul>
);