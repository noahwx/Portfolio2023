import React from "react";

const Home = () => {
    return ( 
        <>
            <div className="wrapper">
                <div className="grid-item-1">
                    1
                </div>
                <div className="grid-item-2">
                    <div className="heading-items">
                        <h1 className="heading">Development.</h1>
                        <h1 className="heading">Analysis.</h1>
                        <h1 className="heading">Design.</h1>
                    </div>
                    <section className="experience-section">
                        <div className="shape"></div>
                        <div className="shape"></div>
                        <div className="shape"></div>
                        <h1 className="experience-heading">Experience</h1>
                        <div className="experience-items">
                            <h1 className="experience-item">Data Analysis</h1>
                            <h1 className="experience-item">Web Development</h1>
                            <h1 className="experience-item">Graphic Design</h1>
                        </div>
                    </section>
                    <div className="background">
                        <img className="background" src="https://images.unsplash.com/photo-1614522562493-455408036ea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt=""/>
                    </div>
                </div>
                <div className="grid-item-3">
                    <footer className="footer">Designed By Noah Fontenette © 2023</footer>
                </div>
            </div>
            <div className="mobile-wrapper">
                <div className="mobile-grid-item-1">
                   <div className="mobile-heading-items">
                        <h1 className="mobile-heading">Development.</h1>
                        <h1 className="mobile-heading">Analysis.</h1>
                        <h1 className="mobile-heading">Design.</h1>
                   </div>
                   <div className="background">
                        <img className="background" src="https://images.unsplash.com/photo-1614522562493-455408036ea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt=""/>
                    </div>
                </div>
                <div className="mobile-grid-item-2">
                    <section className="mobile-experience-section">
                        <h1 className="experience-heading">Experience</h1>
                        <div className="experience-items">
                            <h1 className="experience-item">Data Analysis</h1>
                            <h1 className="experience-item">Web Development</h1>
                            <h1 className="experience-item">Graphic Design</h1>
                        </div>
                    </section>
                </div>
                <div className="mobile-grid-item-3">
                    <footer className="footer">Designed By Noah Fontenette © 2023</footer>
                </div>
            </div>
        </>
    );
}
 
export default Home;