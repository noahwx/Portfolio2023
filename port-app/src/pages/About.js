import React from "react";

const About = () => {
    return ( 
        <>
            <div className="wrapper">
                <div className="grid-item-1">
                    1
                </div>
                <div className="grid-item-2">
                    <div className="about">
                        <h1 className="page-heading">About Me</h1>
                        <p className="page-para">Hi, my name is Noah Fontenette. I'm a focused and driven person with five years of experience in Data Analysis, Front-End Development, and Graphic Design. I enjoy working with others and always strive to learn more than I know today. Contact me today so we can get to work.</p>
                    </div>
                    <div className="about-imgs">
                        <a href="/pages/About" className="about-img-link">
                            <div className="about-img-c">
                                <img className="about-img1" src="https://images.unsplash.com/photo-1679329614246-f099ba78c6aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt=""/>
                            </div>
                        </a>
                        <a href="/pages/About" className="about-img-link">
                            <div className="about-img-c">
                                <img className="about-img2" src="https://images.unsplash.com/photo-1679082631306-80b31a10f086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt=""/>
                            </div>
                        </a>
                        <a href="/pages/About" className="about-img-link">
                            <div className="about-img-c">
                                <img className="about-img3" src="https://images.unsplash.com/photo-1679640034489-a6db1f096b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzOHxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60" alt=""/>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="grid-item-3">
                    <footer className="footer">Designed By Noah Fontenette © 2023</footer>
                </div>
            </div>
            <div className="mobile-wrapper">
                <div className="mobile-grid-item-1">
                    <div className="mobile-about-heading">
                        <h1 className="page-heading">About Me</h1>
                    </div>
                    <div className="about">
                        <p className="page-para">Hi, my name is Noah Fontenette. I'm a focused and driven person with five years of experience in Data Analysis, Front-End Development, and Graphic Design. I enjoy working with others and always strive to learn more than I know today. Contact me today so we can get to work.</p>
                    </div>
                </div>
                <div className="mobile-grid-item-2">
                    <div className="about-imgs">
                        <a href="/pages/About" className="about-img-link">
                            <div className="about-img-c">
                                <img className="about-img1" src="https://images.unsplash.com/photo-1679329614246-f099ba78c6aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt=""/>
                            </div>
                        </a>
                        <a href="/pages/About" className="about-img-link">
                            <div className="about-img-c">
                                <img className="about-img2" src="https://images.unsplash.com/photo-1679082631306-80b31a10f086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt=""/>
                            </div>
                        </a>
                        <a href="/pages/About" className="about-img-link">
                            <div className="about-img-c">
                                <img className="about-img3" src="https://images.unsplash.com/photo-1679640034489-a6db1f096b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzOHxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60" alt=""/>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="mobile-grid-item-3">
                    <footer className="footer">Designed By Noah Fontenette © 2023</footer>
                </div>
            </div>
        </>
     );
}
 
export default About;