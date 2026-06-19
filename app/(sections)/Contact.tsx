 "use client";
import "./Contact.css";
import { ContactForm } from "../components/ContactForm";
import { SocialMediaDetails } from "../components/SocialMediaDetails";
import AnimatedSection from "../components/AnimatedSection";
import { fadeUp } from "@/lib/animations/fade";

function contactHeader(): React.ReactNode {
    return (
        <AnimatedSection variants={fadeUp}>
            <h1>Contact</h1>
            <p className="section-description">Feel free to reach out. I'd love to hear from you !</p>
        </AnimatedSection>
    );
}

function contactBox(): React.ReactNode {
    return (
        <AnimatedSection variants={fadeUp}>
            <div className="contact-wrapper">
                <ContactForm />
                <SocialMediaDetails />
            </div>
        </AnimatedSection>
    );
}


export function Contact(): React.ReactNode {
    return (
        <div className="container-box">
            {contactHeader()}

            {contactBox()}

            <div className="footer-padding"/>
        </div>
    );
}
