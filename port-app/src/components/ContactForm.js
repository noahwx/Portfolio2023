import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/eaada180-cf59-11ed-bffe-d5e6f853e30c";

const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
        setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
        <>
            <h2 className="submit-text">Thank you!</h2>
            <div className="submit-text">We'll be in touch soon.</div>
        </>
        );
    }

    return ( 
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <label For="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name.."></input>
            <label For="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email.."></input>
            <label For="message">Message</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            <input type="submit" value="Send Message"></input>
        </form>
    );
}
 
export default ContactForm;