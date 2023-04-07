import React from "react";
import Typewriter from "typewriter-effect";
import ContactForm from "../components/ContactForm";

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
                        <p className="Experince-Paragraph">As a data analyst, I've honed my skills in collecting, organizing, and analyzing large data sets to extract meaningful insights. I'm proficient in various data analysis tools and techniques, including Excel, SQL, and Python. I love using data to drive informed decision-making and help organizations achieve their goals.</p>
                    </div>
                </div>
                <div className="grid-item-3">
                    <div className="Experince-2">
                        <h2 className="Experince-Heading">Front-End Development</h2>
                        <p className="Experince-Paragraph">As a front-end developer, I've built various websites and web applications using HTML, CSS, JavaScript, and multiple frameworks such as React. I'm dedicated to creating responsive, intuitive, and visually appealing user interfaces that deliver a seamless experience to users.</p>
                    </div>
                </div>
                <div className="grid-item-4">
                    <div className="Experince-3">
                        <h2 className="Experince-Heading">Graphic Design</h2>
                        <p className="Experince-Paragraph">Lastly, I have a strong background in graphic design, with experience creating logos, branding materials, marketing collateral, and more. I'm skilled in using design software such as Adobe Photoshop, Illustrator, and InDesign, and I have a keen eye for typography, color, and composition.</p>
                    </div>
                </div>
            </div>

            <div className="mobile-wrapper">
                <section className="section-1">
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
                </section>
                <section className="section-2">
                    <div className="Experince">
                        <div className="Experince-Item">
                            <h2 className="Experince-Heading">Data Analysis</h2>
                            <p className="Experince-Paragraph">As a data analyst, I've honed my skills in collecting, organizing, and analyzing large data sets to extract meaningful insights. I'm proficient in various data analysis tools and techniques, including Excel, SQL, and Python. I love using data to drive informed decision-making and help organizations achieve their goals.</p>
                        </div>
                    </div>
                </section>
                <section className="section-3">
                    <div className="Experince">
                        <div className="Experince-Item">
                            <h2 className="Experince-Heading">Front-End Development</h2>
                            <p className="Experince-Paragraph">As a front-end developer, I've built various websites and web applications using HTML, CSS, JavaScript, and multiple frameworks such as React. I'm dedicated to creating responsive, intuitive, and visually appealing user interfaces that deliver a seamless experience to users.</p>
                        </div>
                    </div>
                </section>
                <section className="section-4">
                    <div className="Experince">
                        <div className="Experince-Item">
                            <h2 className="Experince-Heading">Graphic Design</h2>
                            <p className="Experince-Paragraph">Lastly, I have a strong background in graphic design, with experience creating logos, branding materials, marketing collateral, and more. I'm skilled in using design software such as Adobe Photoshop, Illustrator, and InDesign, and I have a keen eye for typography, color, and composition.</p>
                        </div>
                    </div>
                </section>
                <section className="section-5">
                    <div className="Contact">
                        <h2 className="Contact-Heading">Let's Work</h2>
                        <ContactForm />
                    </div>
                </section>
            </div>
        
        </>
    );
}
 
export default Home;