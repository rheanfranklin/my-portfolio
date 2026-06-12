"use client";
import "./Contact.css";
import { ContactForm, SocialMediaDetails } from "../components/ContactForm";
import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";

export function Contact(): React.ReactNode {
    return (
        <div className="container-box">
            <div className="p-5" />
            <AnimatedSection variants={fadeUp}>
                <h1 className="section-header">Contact</h1>
                <div className="contact-wrapper">
                    <ContactForm />
                    <SocialMediaDetails />
                </div>
                <div className="p-20" />
            </AnimatedSection>
            
        </div>
    );
}
