import React from "react";

const Contact = () => {
    return ( 
        <>
            <div className="wrapper">
            <div className="grid-item-1">
                    1
                </div>
                <div className="grid-item-2">
                    <div className="contact">
                        <h1 className="page-heading">Contact</h1>
                        <div className="contact-items">
                            <a href="mailto:noahfontenette@outlook.com" className="contact-item">Email</a>
                            <a href="https://twitter.com/noahf97" className="contact-item" target="_blank" rel="noopener noreferrer">Twitter</a> 
                            <a href="https://www.instagram.com/noahf.97/" className="contact-item" target="_blank" rel="noopener noreferrer">Instagram</a> 
                        </div>
                    </div>
                </div>
                <div className="grid-item-3">
                    <footer className="footer">Designed By Noah Fontenette © 2023</footer>
                </div>
            </div>
            <div className="mobile-wrapper">
                <div className="mobile-grid-item-1">
                    <h1 className="contact-mobile-heading">Contact</h1>
                </div>
                <div className="mobile-grid-item-2">
                    <div className="mobile-contact-items">
                        <a href="mailto:noahfontenette@outlook.com" className="contact-item">Email</a>
                        <a href="https://twitter.com/noahf97" className="contact-item" target="_blank" rel="noopener noreferrer">Twitter</a> 
                        <a href="https://www.instagram.com/noahf.97/" className="contact-item" target="_blank" rel="noopener noreferrer">Instagram</a> 
                    </div>
                </div>
                <div className="mobile-grid-item-3">
                    <footer className="footer">Designed By Noah Fontenette © 2023</footer>
                </div>
            </div>
        </>
     );
}
 
export default Contact;