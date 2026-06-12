"use client";
import { useState } from "react";
import { MapPin, Phone, Mail } from 'pixelarticons/react'
import { GitLogoPixeled, LinkedinPixeled } from "@/content/contact";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/src/config/contacts";

export const ContactForm = () => {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("Sending...");

        const form = e.currentTarget;
        const nameInput = form.elements.namedItem("name") as HTMLInputElement | null;
        const emailInput = form.elements.namedItem("email") as HTMLInputElement | null;
        const messageInput = form.elements.namedItem("message") as HTMLTextAreaElement | null;

        const data = {
            name: nameInput?.value || "",
            email: emailInput?.value || "",
            message: messageInput?.value || "",
        };

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            setStatus("Message sent!");
            form.reset();
        } else {
            setStatus("Something went wrong.");
        }
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" className="form-control" placeholder=" NAME" required />
            <input type="text" className="form-control" placeholder=" EMAIL" required />
            <textarea className="message" rows={5} placeholder=" MESSAGE" required />
            <button type="submit">Send</button>
            <p className="status">{status}</p>
        </form>
    );
};

export const SocialMediaDetails = () => {
    return (
        <div className="direct-contact-container">

            <div className="contact-me">
                <li className="social-media-list-item">
                    <MapPin/>
                    <p className="contact-text">Norwalk, CT</p>
                </li>
                <li className="social-media-list-item">
                    <Phone/>
                    <p><span className="contact-text"><a href={`tel:${CONTACT_INFO.phone}`} title="Give me a call">{CONTACT_INFO.phoneDisplay}</a></span></p>
                </li>
                <li className="social-media-list-item">
                    <Mail/>
                    <span className="contact-text"><a href={`mailto:${CONTACT_INFO.email}`} title="Send me an email">{CONTACT_INFO.email}</a></span>
                </li>
                <li className="social-media-list-item">
                    {GitLogoPixeled}
                    <span className="contact-text"><a href={SOCIAL_LINKS.github} target="_blank" title="Look at my stuff on github">{CONTACT_INFO.github}</a></span>
                </li>
                <li className="social-media-list-item">
                    {LinkedinPixeled}
                    <span className="contact-text"><a href={SOCIAL_LINKS.linkedin} target="_blank" title="Message me on linkedin">{CONTACT_INFO.linkedin}</a></span>
                </li>
            </div>
        </div>
    );
};