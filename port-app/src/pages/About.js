import React from "react";

const About = () => {
    return ( 
        <>
            <div className="wrapper">
                <div className="grid-item-1">
                    <div className="About">
                        <h1 className="About-Heading">About Me</h1>
                        <p className="About-Paragraph">Hi there! My name is Noah Fontenette, and I'm a multi-talented professional with experience in data analysis, front-end development, and graphic design. I am passionate about leveraging technology to create engaging and compelling user experiences across various digital mediums.<br/>As a data analyst, I've honed my skills in collecting, organizing, and analyzing large data sets to extract meaningful insights. I'm proficient in various data analysis tools and techniques, including Excel, SQL, and Python. I love using data to drive informed decision-making and help organizations achieve their goals.<br/>As a front-end developer, I've built various websites and web applications using HTML, CSS, JavaScript, and multiple frameworks such as React. I'm dedicated to creating responsive, intuitive, and visually appealing user interfaces that deliver a seamless experience to users.<br/>Lastly, I have a strong background in graphic design, with experience creating logos, branding materials, marketing collateral, and more. I'm skilled in using design software such as Adobe Photoshop, Illustrator, and InDesign, and I have a keen eye for typography, color, and composition.<br/>I'm a creative problem-solver who enjoys tackling complex challenges and producing high-quality work that meets and exceeds client expectations. I'm excited to bring my diverse skill set to new projects and collaborate with like-minded individuals to achieve great results.</p>
                    </div>
                </div>
                <div className="grid-item-2">
                    <div className="Image">
                        <img src="https://images.unsplash.com/photo-1678854321097-6919ddad32ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80" alt=""/>
                    </div>
                </div>
                <div className="grid-item-3">
                    <div className="Image">
                        <img src="https://images.unsplash.com/photo-1678614034229-0a5b2ca59606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" alt=""/>
                    </div>
                </div>
                <div className="grid-item-4">
                    <div className="Image">
                        <img src="https://images.unsplash.com/photo-1678198628337-e0f4abe54593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80" alt=""/>
                    </div>
                </div>
            </div>
            <div className="mobile-wrapper">
                <section className="section-1">
                    <h1 className="About-Heading">About Me</h1>
                    <p className="About-Paragraph">Hi there! My name is Noah Fontenette, and I'm a multi-talented professional with experience in data analysis, front-end development, and graphic design. I am passionate about leveraging technology to create engaging and compelling user experiences across various digital mediums.</p>
                    <div className="About-Image-1">
                        <img src="https://images.unsplash.com/photo-1679403423791-91e190b4a9c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt=""/>
                    </div>
                </section>
                <section className="section-2">
                    <p className="About-Paragraph-1">As a data analyst, I've honed my skills in collecting, organizing, and analyzing large data sets to extract meaningful insights. I'm proficient in various data analysis tools and techniques, including Excel, SQL, and Python. I love using data to drive informed decision-making and help organizations achieve their goals.</p>
                    <div className="About-Image-2">
                        <img src="https://images.unsplash.com/photo-1679775912683-26e3de1d09d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt=""/>
                    </div>
                </section>
                <section className="section-3">
                    <p className="About-Paragraph-1">As a front-end developer, I've built various websites and web applications using HTML, CSS, JavaScript, and multiple frameworks such as React. I'm dedicated to creating responsive, intuitive, and visually appealing user interfaces that deliver a seamless experience to users.</p>
                    <div className="About-Image-3">
                        <img src="https://images.unsplash.com/photo-1679888669342-d37cad2050d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt=""/>
                    </div>
                </section>
                <section className="section-4">
                    <p className="About-Paragraph-1">Lastly, I have a strong background in graphic design, with experience creating logos, branding materials, marketing collateral, and more. I'm skilled in using design software such as Adobe Photoshop, Illustrator, and InDesign, and I have a keen eye for typography, color, and composition.</p>
                    <div className="About-Image-4">
                        <img src="https://images.unsplash.com/photo-1574913518252-b24f788531d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt=""/>
                    </div>
                </section>
                <section className="section-5">
                    <p className="About-Paragraph-1">I'm a creative problem-solver who enjoys tackling complex challenges and producing high-quality work that meets and exceeds client expectations. I'm excited to bring my diverse skill set to new projects and collaborate with like-minded individuals to achieve great results.</p>
                    <div className="About-Image-5">
                        <img src="https://images.unsplash.com/photo-1676776383471-dd443fc5756b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt=""/>
                    </div>
                </section>
            </div>
        </>
     );
}
 
export default About;