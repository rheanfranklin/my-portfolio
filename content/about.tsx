


//
// Welcome subsection
//
export const AboutIntroContent: React.ReactNode = <p className="section-description">
  Hello there! I'm so excited you're here! On this page you can find an in-depth description
  of who I am, both as a person and an engineer, so you can know if I match what you're looking for.
</p>;


//
// My Motivation subsection
//
export const MyMotivationFeelingAccomplishedCardBack: React.ReactNode = (
  <p className="about-card-text-back">
    Nothing is more satisfying to me in my workday than clicking a checkmark on my to-do list.<br/><br/>I feel the
    most motivated  when I'm able to reflect on my work and be proud of what I've accomplished.<br/><br/> Being able to see tangible output of my efforts
    is important to me, whether it be an entire application I built from the ground up or a list of bugs
    I've resolved within the last sprint.
  </p>
);

export const MyMotivationHelpingOthersCardBack: React.ReactNode = (
    <p className="about-card-text-back">
      I also love helping others and feeling like I've made someone's day easier. <br/><br/> Some of my favorite projects
      I've worked on are internal tools used by other employees to improve their workflow efficiency (see the <em>My History</em> section for
      some examples). <br/> <br/>I have a
      knack for seeing pain points of complex systems and coming up with solutions to ease those issues
      so my collegues can focus on feature implementation instead of damage control.
    </p>
);

export const MyMotivationContent: React.ReactNode = (
  <div className="about">
      <p>
        Nothing is more satisfying to me in my workday than clicking a checkmark on my to-do list. I feel the
        most motivated  when I'm able to reflect on my work and be proud of what I've accomplished. Being able to see tangible output of my efforts
        is important to me, whether it be an entire application I built from the ground up or a list of bugs
        I've resolved within the last sprint.
      </p>
      <p>
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
  <p className="about-card-text-back">
    I thrive off of structure & organization; my head is already scatterbrained enough, so the last thing I
    need is for my code to be just as chaotic.<br/><br/>Every function, class, & file is modular and has one specific purpose. 
    Every section of logic has its own inline explanation. <br/><br/>I hate looking back at my own work and having difficulty understanding what
    and why I did things.
  </p>
);

export const StyleSDFutureFocusedContent: React.ReactNode = (
  <p className="about-card-text-back">
    Having worked on large, evolving systems, I've learned that scalability is essential if you want to build a system that lasts.<br/><br/>
    That means I'm always on the lookout for any step in a process that requires manual or tedious work and take the initiate to replace it with
    an automated process.<br/><br/>
    When designing systems or features, I focus on structuring the code so new pieces can be added or old ones removed with ease.<br/><br/>
    I rely on techniques like dependency injection, SPP, and class inheritance to keep the architecture modular, adaptable, and easy to extend.
  </p>
);

// Collaboration
export const StyleCollaborationContent: React.ReactNode = (
    <p>
      I make it a point to bring positivity wherever I go. I enjoy creating an environment 
      where people feel comfortable expressing themselves & speaking their mind. When it comes to my
      teammates, I like keeping things casual & lighthearted. Work is more fun when you get to 
      connect with the people around you.
      <br/>
      <span className="indent"/>A key part of achieving a positive & productive environment is being
      accepting of everyone, regardless of who they are or their walk of life. Never would I judge someone over
      something that doesn't matter. I welcome a variety of perspectives and believe diversity of thought
      creates wellroundedness.
    </p>
);

// AI
export const StyleAIContent: React.ReactNode = (
  <p>
    It's clear that AI's integration into our workflows as software engineers is inevitable.
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
  <p>
    Test
  </p>
);


//
// My History Subsection
//
export const MyHistoryContent: React.ReactNode = (
  <p>
    During my time working as an engineer at FactSet, 
  </p>
);


export const MyHobbiesWeightLifting: React.ReactNode = (
  <p className="about-card-text-back">
    I do a little bit of weightlifting here and there. Am I good at it ? No.
    Do I still try ? Sometimes, when I feel like it ... <br/><br/>
    My bench is 135lbs & I can do like, 10 push-ups. Fear me.
  </p>
);

export const MyHobbiesIllustration: React.ReactNode = (
  <p className="about-card-text-back">
    In my free time, I like to do a little bit of drawing, both traditional & digital.
    <br/><br/>
    See some of my work here.
  </p>
);

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