import "./SocialMediaDetails.css";
import { MapPin, Phone, Mail } from 'pixelarticons/react'
import { SOCIAL_LINKS, CONTACT_INFO } from "@/src/config/contacts";

export const GitLogoPixeled: React.ReactNode = <img
    src="/images/icons/git-logo-pixeled.png"
    alt="pixeled git logo"
    className="icon"
/>

export const LinkedinPixeled: React.ReactNode = <img
    src="/images/icons/linkedin-logo-pixeled.png"
    alt="pixeled linkedin logo"
    className="icon"
/>

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