import React from "react";
import Jottype from "../Assets/Jottype.png";

const Work = () => {
    return ( 
        <>
            <div className="wrapper">
                <div className="grid-item-1">
                    <div className="Work">
                        <h1 className="Work-Heading">Work</h1>
                        <div className="Work-Content">
                            <a href="https://jottype.com/" target="_blank" rel="noreferrer" className="Work-Link">
                                <div className="Work-Item">
                                    <div className="Work-Item-Content">
                                        <h2 className="Work-Item-Heading">Jottype</h2>
                                        <p className="Work-Item-Text">A swift and reliable note taking React app.</p>
                                    </div>
                                    <div className="Work-Item-Image">
                                        <img src={Jottype} alt="Jottype" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-wrapper">
                <section className="section-1">
                    <h1 className="Work-Heading">Work</h1>
                    <a href="https://jottype.com/" target="_blank" rel="noreferrer" className="Work-Link">
                        <div className="Work-Item">
                            <div className="Work-Item-Content">
                                <h2 className="Work-Item-Heading">Jottype</h2>
                                <p className="Work-Item-Text">A swift and reliable note taking React app.</p>
                            </div>
                            <div className="Work-Item-Image">
                                <img src={Jottype} alt="Jottype" />
                            </div>
                        </div>
                    </a>
                </section>
                <section className="section-2">
                    
                </section>
                <section className="section-3">
                    
                </section>
                <section className="section-4">
                    
                </section>
            </div>
        </>
     );
}
 
export default Work;