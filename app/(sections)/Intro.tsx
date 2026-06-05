"use client";

import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";
import Navbar from "../components/Navbar";

export default function Intro() {
    return (
        <AnimatedSection variants={fadeUp}>
            <Navbar></Navbar>
            {/* <div>
                <p
                    className="
                    min-h-screen
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    px-6
                    py-20
                "
                >
                    Hi! My name is Rheannon Franklin. Welcome to my portfolio! Feel free to look around.
                </p>
                
            </div> */}
        </AnimatedSection>
    );
}