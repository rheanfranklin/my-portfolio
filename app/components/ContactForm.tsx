"use client";
import "./ContactForm.css";
import { useState } from "react";

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

        // post to API
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        // check response status
        if (res.ok) {
            setStatus("Message sent!");
            form.reset();
        } else {
            setStatus("Something went wrong.");
        }
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name"
                className="form-control" 
                placeholder="NAME" 
                required 
            />
            <input 
                type="text" 
                name="email"
                className="form-control" 
                placeholder="EMAIL" 
                required 
            />
            <textarea 
                name="message"
                className="message"
                rows={5} 
                placeholder="MESSAGE" 
                required 
            />
            <input 
                type="text"
                name="hellobot"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
            /> {/* Hidden honeypot field to filter out bots */}
            <button type="submit" className="send-button">Send</button>
            <p className="status">{status}</p>
        </form>
    );
};
