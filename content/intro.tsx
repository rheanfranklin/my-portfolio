import AnimatedText from "@/app/components/AnimatedText";
import AnimatedSection from "@/app/components/AnimatedSection";
import AnimatedIconGrid from "@/app/components/AnimatedIconGrid";
import { fadeUp } from "@/lib/animations/fade";
import Link from "next/link";
import { ExternalLink } from 'pixelarticons/react';


export const IntroContent = () => (
    <div>
        {/* Intro + Image */}
        <div className="two-col-grid">
            {/* Left column */}
            <div className="left">
                <div className="left-section-padding-lg" />

                {/* Intro */}
                <AnimatedText>
                    <p className="caption rainbow-hover"><span className="text-accent-pink-dark">//</span>hello, my name is</p>
                </AnimatedText>

                {/* Name */}
                <AnimatedText>
                    <p className="name-format rainbow-hover">RHEANNON FRANKLIN</p>
                </AnimatedText>

                {/* Profession title */}
                <AnimatedText>
                    <p className="job-title rainbow-hover">Full Stack Software Engineer</p>
                </AnimatedText>

                {/* Spacing */}
                <div className="left-section-padding-lg" />

                {/* Welcome message */}
                <AnimatedText>
                    <p className="rainbow-hover">Welcome to my portfolio! Feel free to take a look around :D</p>
                </AnimatedText>

                {/* Spacing */}
                <div className="left-section-padding-md" />

                {/* Open to Work */}
                <AnimatedSection variants={fadeUp}>
                    <div className="rounded-container">
                        <p className="rounded-container-text">&nbsp;Open to work &middot; CT, USA &middot; In-Office/Hybrid/Remote&nbsp;</p>
                    </div>
                </AnimatedSection>
                <AnimatedText>
                    <p className="open-message rainbow-hover">Open to relocation & branching out of software engineering.</p>
                </AnimatedText>
            </div>

            {/* Second column */}
            <AnimatedSection variants={fadeUp} className="right">
                <div>
                    <img
                        src="/images/icons/icon1.png"
                        alt="woman sitting on computer"
                        className="intro-image"
                    />
            </div>
            </AnimatedSection>
        </div>
    </div>
)

export const IntroCardOne = () => (
    <AnimatedIconGrid
        icon={
            <div>
                <p className="card-text-bold">7+</p><p className="card-text">YEARS PROFESSIONAL EXPERIENCE</p>
            </div>
        }
    />
)

export const IntroCardTwo = () => (
    <AnimatedIconGrid
        icon={
            <div>
                <p className="card-text-bold">2022</p>
                <p className="card-text">GA TECH GRADUATE WTIH A BACHELORS IN COMPUTER SCIENCE</p>
            </div>
        }
    />
)

export const IntroCardThree = () => (
    <AnimatedIconGrid
        icon={
            <div>
                <p className="card-text-bold">10+</p>
                <p className="card-text">PROJECTS DELIVERED</p>
            </div>
        }
    />
)

export const ResumeButton = () => (
    <AnimatedSection variants={fadeUp} className="self-center">
        <Link href="/files/resume.pdf" target="_blank">
            <div className="rounded-container button">
                <p>&nbsp;&middot;&nbsp;</p>
                <ExternalLink/>
                <p>&nbsp;Resume&nbsp;&middot;&nbsp;</p>
            </div>
        </Link>
    </AnimatedSection>
)