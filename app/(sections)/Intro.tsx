"use client";

import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";
import Image from "next/image"

export default function Intro() {
    return (
        <div className="container-box">
            <AnimatedSection variants={fadeUp}>
                {/* Welcome message */}
                <p className="centered-paragraph">
                    Hi! My name is Rheannon Franklin. <br /> 
                    Welcome to my portfolio! Feel free to take a look around.
                </p>

                {/* Divider */}
                <hr className="divider-dark" />

                {/* Intro */}
                <p className="subheader">
                    Intro
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Image
                        src="/images/icons/icon1.png"
                        alt="My photo"
                        width={250}
                        height={250}
                        loading="eager"
                        className="w-75 h-auto justify-self-center"
                    />
                    <p className="paragraph">
                        - Currently on the look out for job opportunities. <br /><br />
                        - B.S. in computer science from the Georgia Institute of Technology with a focus on user interface & design. <br /><br />
                        - 3 years experience as a back-end software engineer at FactSet Research Systems. <br /><br />
                        - 4 year experience working in product planning & logistics at Johnson & Johnson. <br /><br />
                        - View my resume <a href="/files/resume.pdf" target="_blank" className="link">here</a>
                    </p>
                </div>
                
                {/* Padding */}
                <div className="p-6"></div>

                {/* Divider */}
                <hr className="divider-dark" />
            </AnimatedSection>
        </div>
    );
}