import { ExternalLink } from 'pixelarticons/react';


// Left intro section content
export const IntroContentText: React.ReactNode = <p className="caption rainbow-hover">
    <span className="text-accent-pink-dark">//</span>hello, my name is
</p>;

export const Name: React.ReactNode = <p className="name-format rainbow-hover">RHEANNON FRANKLIN</p>

export const Title: React.ReactNode = <p className="job-title rainbow-hover">Full Stack Software Engineer</p>

export const WelcomeMessage: React.ReactNode = <p className="rainbow-hover">
    Welcome to my portfolio! Feel free to take a look around :D
</p>;

export const OpenToWork: React.ReactNode = <p className="rounded-container-text">
    &nbsp;Open to work &middot; CT, USA &middot; In-Office/Hybrid/Remote&nbsp;
</p>;

export const OpenToRelocate: React.ReactNode = <p className="open-message rainbow-hover">
    Open to relocation & branching out of software engineering.
</p>;

// Intro Cards
export const IntroCardOneContent: React.ReactNode = <div>
    <p className="card-text-bold">7+</p><p className="card-text">YEARS PROFESSIONAL EXPERIENCE</p>
</div>;

export const IntroCardTwoContent: React.ReactNode = <div>
    <p className="card-text-bold">2022</p>
    <p className="card-text">GA TECH GRADUATE WTIH A BACHELORS IN COMPUTER SCIENCE</p>
</div>;

export const IntroCardThreeContent: React.ReactNode = <div>
    <p className="card-text-bold">10+</p>
    <p className="card-text">PROJECTS DELIVERED</p>
</div>;

// Resume button 
export const ResumeButtonContent: React.ReactNode = <div className="rounded-container button">
    <p>&nbsp;&middot;&nbsp;</p>
    <ExternalLink/>
    <p>&nbsp;Resume&nbsp;&middot;&nbsp;</p>
</div>;

