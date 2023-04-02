import React from "react";

const Blog = () => {
    return ( 
        <>
            <div className="wrapper">
                <div className="grid-item-1">
                    1
                </div>
                <div className="grid-item-2">
                    <div className="blog">
                        <h1 className="page-heading">Blog</h1>
                    </div>
                </div>
                <div className="grid-item-3">
                    <footer className="footer">Designed By Noah Fontenette © 2023</footer>
                </div>
            </div>
            <div className="mobile-wrapper">
                <div className="mobile-grid-item-1">
                    1
                </div>
                <div className="mobile-grid-item-2">
                    2
                </div>
                <div className="mobile-grid-item-3">
                    3
                </div>
            </div>
        </>
     );
}
 
export default Blog;