import React from "react";

const Contact = () => {
    return ( 
        <>
            <div className="wrapper">
                <div className="grid-item-1">
                    <div className="Contact">
                        <h1 className="Contact-Heading">Contact Me</h1>
                        <div className="Contact-Content">
                            <a href="mailto:noahfontenette@outlook.com" target="_blank" rel="noopener noreferrer" className="Contact-Link">Email</a>
                            <a href="https://twitter.com/Noahf97" target="_blank" rel="noopener noreferrer" className="Contact-Link">Twitter</a>
                            <a href="https://instagram.com/Noahf.97" target="_blank" rel="noopener noreferrer" className="Contact-Link">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-wrapper">
                <div className="grid-item-1">1</div>
                <div className="grid-item-2">2</div>
                <div className="grid-item-3">3</div>
            </div>
        </>
     );
}
 
export default Contact;