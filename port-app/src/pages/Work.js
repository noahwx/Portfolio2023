import React from "react";

const Work = () => {
    return ( 
        <>
            <div className="wrapper">
                <div className="grid-item-1">
                    <div className="Work">
                        <h1 className="Work-Heading">Work</h1>
                        <div className="Work-Content">
                            <a href="/pages/Work" className="Work-Link">
                                <div className="Work-Item">
                                    <div className="Work-Item-Content">
                                        <h2 className="Work-Item-Heading">Heading</h2>
                                        <p className="Work-Item-Text">Text</p>
                                    </div>
                                    <div className="Work-Item-Image">
                                        <img src="https://images.unsplash.com/photo-1679590373888-9363db416357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80" alt="" />
                                    </div>
                                </div>
                            </a>
                            <a href="/pages/Work" className="Work-Link">
                                <div className="Work-Item">
                                    <div className="Work-Item-Content">
                                        <h2 className="Work-Item-Heading">Heading</h2>
                                        <p className="Work-Item-Text">Text</p>
                                    </div>
                                    <div className="Work-Item-Image">
                                        <img src="https://images.unsplash.com/photo-1679590373888-9363db416357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80" alt="" />
                                    </div>
                                </div>
                            </a>
                            <a href="/pages/Work" className="Work-Link">
                                <div className="Work-Item">
                                    <div className="Work-Item-Content">
                                        <h2 className="Work-Item-Heading">Heading</h2>
                                        <p className="Work-Item-Text">Text</p>
                                    </div>
                                    <div className="Work-Item-Image">
                                        <img src="https://images.unsplash.com/photo-1679590373888-9363db416357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80" alt="" />
                                    </div>
                                </div>
                            </a>
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
 
export default Work;