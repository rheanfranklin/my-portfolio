import { 
    Package,
    University,
    CheckDouble,
    BracesContent,
    Gps,
    File,
} from "pixelarticons/react"

import AnimatedText from "@/app/components/AnimatedText";
import { RainbowText } from "@/app/components/AnimatedText";
import AnimatedIconGrid from "@/app/components/AnimatedIconGrid"

export const WelcomeContent = () => (
  <div>
    <AnimatedText text="Hi, my name is Rheannon Franklin and welcome to my portfolio!" className="centered-paragraph rainbow-hover"/>
    <AnimatedText text="Feel free to take a look around :D" delay={1} className="centered-paragraph rainbow-hover" />
  </div>
)


export const IntroContent = () => (
    <div className="flex flex-col gap-6">
        {/* First Row */}
        <div className="two-col-grid">
            <AnimatedIconGrid
                icon={<CheckDouble />}
                text={
                    <p>
                        Currently on the <strong>look out</strong> for job opportunities. Open to <strong>relocation</strong> and working <strong>remotely/hybrid/in-office</strong>.
                    </p>
                }
            />
            <AnimatedIconGrid
                icon={<University />}
                text={
                    <p>
                        <strong>B.S.</strong> in <strong>computer science</strong> from the <strong>Georgia Institute of Technology</strong> with a focus on user interface & design.
                    </p>
                }
            />
        </div>

        {/* Second Row */}
        <div className="two-col-grid">
                        <AnimatedIconGrid
                icon={<BracesContent />}
                text={
                    <p>
                        <strong>3 years</strong> experience as a <strong>back-end software engineer</strong> at FactSet Research Systems.
                    </p>
                }
            />
            <AnimatedIconGrid
                icon={<Package />}
                text={
                    <p>
                        <strong>4 years</strong> experience working in <strong> product planning & logistics</strong> at <strong>Johnson & Johnson.</strong>
                    </p>
                }
            />
        </div> 
        <div className="two-col-grid">
        {/* Third Row */}
            <AnimatedIconGrid
                icon={<Gps />}
                text={
                    <p>
                        Open to branching outside of software development.
                    </p>
                }
            />
            <AnimatedIconGrid
                icon={<File />}
                text={
                    <p>
                        View my resume <a href="/files/resume.pdf" target="_blank" className="link">here</a>.
                    </p>
                }
            />
        </div>
    </div>
)