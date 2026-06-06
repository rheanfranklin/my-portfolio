"use client";

import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";
import Image from "next/image"
import { Welcome, IntroParagraph } from "@/content/intro"

export default function Intro() {
    return (
        <div className="container-box">
            <AnimatedSection variants={fadeUp}>
                {/* Welcome message */}
                < Welcome />

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
                    <IntroParagraph />
                </div>
                
                {/* Padding */}
                <div className="p-6"></div>

                {/* Divider */}
                <hr className="divider-dark" />
            </AnimatedSection>
        </div>
    );
}