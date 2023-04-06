import React from "react";

const ContactForm = () => {
    return ( 
        <form>
            <label For="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name.."></input>
            <label For="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email.."></input>
            <label For="message">Message</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            <input type="submit" value="Submit"></input>
        </form>
    );
}
 
export default ContactForm;