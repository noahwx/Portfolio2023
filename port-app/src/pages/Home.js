import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
    return ( 
        <>
            <div className="wrapper">
                <div className="grid-item-1">
                    <div className="Home">
                        <Typewriter
                            options={{
                                strings: ['Noah Fontenette', 'Data Analysis.', 'Front-End Developer.', 'Graphic Designer.'],
                                autoStart: true,
                                loop: true,
                                delay: "natural",
                                pauseFor: 2000,
                            }}
                        />
                        <div className="background">
                            <img src="https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="grid-item-2">
                    <div className="Experince-1">
                        <h2 className="Experince-Heading">Data Analysis</h2>
                        <p className="Experince-Paragraph">Description</p>
                    </div>
                </div>
                <div className="grid-item-3">
                    <div className="Experince-2">
                        <h2 className="Experince-Heading">Front-End Development</h2>
                        <p className="Experince-Paragraph">Description</p>
                    </div>
                </div>
                <div className="grid-item-4">
                    <div className="Experince-3">
                        <h2 className="Experince-Heading">Graphic Design</h2>
                        <p className="Experince-Paragraph">Description</p>
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
 
export default Home;