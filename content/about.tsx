let AboutIntro: string = [
  "Hello there! I'm so excited you're here! On this page you can find an in-depth description",
  "of who I am, both as a person and an engineer, so you can know whether I'm the right fit for",
  "your company.",
].join("");



//
// Welcome subsection
//
export const AboutIntroContent: React.ReactNode = <p className="paragraph">
  Hello there! I'm so excited you're here! On this page you can find an in-depth description
  of who I am, both as a person and an engineer, so you can know whether I'm the right fit for
  your company.
</p>;


//
// My Motivation subsection
//
export const MyMotivationContent: React.ReactNode = (
  <div>
      <p className="paragraph">
        Nothing is more satisfying to me in my workday than clicking a checkmark on my to-do list. I feel the
        most motivated  when I'm able to reflect on my work and be proud of what I've accomplished. Being able to see tangible output of my efforts
        is important to me, whether it be an entire application I built from the ground up or a list of bugs
        I've resolved within the last sprint.
      </p>
      <p className="paragraph">
        I also love helping others and feeling like I've made someone's day easier. Some of my favorite projects
        I've worked on are internal tools used by other employees to improve their workflow efficiency (see the <em>My History</em> section for
        some examples). I have a
        knack for seeing pain points of complex systems and coming up with solutions to ease those issues
        so my collegues can focus on feature implementation instead of damage control.
      </p>
    </div>
);


// Software Development
export const StyleSoftwareDevelopmentContent: React.ReactNode = (
  <p className="paragraph">
    My priorities when developing software is writing readable, consistent, modular, & well-organized code.
    I thrive off of structure & organization; my head is already scatterbrained enough, so the last thing I
    need is for my code to be just as chaotic. Every function, class, & file is modular and has one specific purpose. 
    Every section of logic has its own inline explanation. I hate looking back at my own work and having difficulty understanding what
    and why I did things.
    <br /> 
    **consideration of future scaling here **
     
  </p>
);

// Collaboration
export const StyleCollaborationContent: React.ReactNode = (
    <p className="paragraph">
      I make it a point to bring positivity wherever I go. I enjoy creating an environment 
      where people feel comfortable expressing themselves & speaking their mind. When it comes to my
      teammates, I like keeping things casual & lighthearted. Work is more fun when you get to 
      connect with the people around you.
      <br/>
      <span className="indent"/>A key part of achieving that is being open & accepting of everyone, regardless of who they are or their walk of life. Never would I judge someone over
      something that doesn't matter. I welcome a variety of perspectives and believe diversity of thought
      creates wellroundedness.
    </p>
);

// AI
export const StyleAIContent: React.ReactNode = (
  <p className="paragraph">
    When it comes to AI, it's clear that its integration into our workflows as software engineers is inevitable.
    It is an incredibly powerful tool, and I believe it's just as incredibly important that we
    priortize using it appropriately. The last thing we want is to end up with a bunch of AI generated code of
    poor to mediocre quality in production, and then have no idea what it does when it breaks.
    <br />
    <span className="indent"></span>That's why I abide by a set of rules when using it to write code. I always take ownership of all design and
    implementation decisions. When incorporating AI into my work, I first write up single-purpose
    stubs with detailed inline comments of their purpose, the logic they implement, and how they string together. The only thing I leave up to AI is tedious
    language and package specific details. Working this way has enabled me to create well designed tools with a thorough
    understanding of how those tools work, all while expediting my output ten fold. I love that I can focus on the structure of my code instead of spending hours
    trying to debug annoying syntax errors on a programming language I'm not familiar with.
    <br />
    <span className="indent"></span>I also find AI to be great at reviewing PR descriptions, giving function/file name suggestions, generating documentation,
    and assisting me with debugging. As useful as it may be, I still make it a point to thoroughly review & understand everything that was generated with AI
    (while we're on the topic - no, none of this was written by AI LOL. My portfolio acting as a genuine reflection of myself & my skills is
     important to me).
    <br />
  </p>
);

export const StyleProblemSolvingContent: React.ReactNode = (
  <p className="paragraph">
    Test
  </p>
);


//
// My History Subsection
//
export const MyHistoryContent: React.ReactNode = (
  <p className="paragraph">
    During my time working as an engineer at FactSet, 
  </p>
);
