import React from "react";

const About = () => {
    return ( 
        <>
            <div className="wrapper">
                <div className="grid-item-1">
                    <div className="About">
                        <h1 className="About-Heading">About Me</h1>
                        <p className="About-Paragraph">Description</p>
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
                <div className="grid-item-1">1</div>
                <div className="grid-item-2">2</div>
                <div className="grid-item-3">3</div>
            </div>
        </>
     );
}
 
export default About;