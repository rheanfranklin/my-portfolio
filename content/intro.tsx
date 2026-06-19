import { ExternalLink } from 'pixelarticons/react';


// Left intro section content
export const IntroContentText: React.ReactNode = <p className="intro-text rainbow-hover">
    <span className="text-accent-pink-dark">//</span>hello, my name is
</p>;

export const Name: React.ReactNode = <p className="intro-name rainbow-hover">RHEANNON FRANKLIN</p>

export const Title: React.ReactNode = <p className="intro-job rainbow-hover">&gt; Full Stack Software Engineer</p>

export const WelcomeMessage: React.ReactNode = <p className="intro-welcome rainbow-hover">
    Welcome to my portfolio! Feel free to take a look around :D
</p>;

export const OpenToWork: React.ReactNode = <p className="rounded-container-text rainbow-hover">
    &nbsp;Open to work &middot; CT, USA &middot; In-Office/Hybrid/Remote&nbsp;
</p>;

export const OpenToRelocate: React.ReactNode = <p className="intro-open-message rainbow-hover">
    Open to relocation & branching out of software engineering.
</p>;


// Intro Cards
export const CardOne: React.ReactNode = <div>
    <p className="animated-card-text-lg">7+</p><p className="animated-card-text">YEARS PROFESSIONAL EXPERIENCE</p>
</div>;

export const CardTwo: React.ReactNode = <div>
    <p className="animated-card-text-lg">2022</ p>
    <p className="animated-card-text">GA TECH GRADUATE WTIH A BACHELORS IN COMPUTER SCIENCE</p>
</div>;

export const CardThree: React.ReactNode = <div>
    <p className="animated-card-text-lg">10+</p>
    <p className="animated-card-text">PROJECTS DELIVERED</p>
</div>;


// Resume button 
export const ResumeButtonContent: React.ReactNode = <div className="rounded-container button">
    <p>&nbsp;&middot;&nbsp;</p>
    <ExternalLink/>
    <p>&nbsp;Resume&nbsp;&middot;&nbsp;</p>
</div>;
