import React, { useState } from 'react';
import "./css/Header.css"
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
    // Declare a new state variable, which we'll call "count"
    const [open, setOpen] = useState(false)

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <header className="header">
            <div className="mobile-icon" onClick={() => setOpen(!open)}>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>
            <div id="mobile-menu" className={open? "open" : null}>
                <div className="x-icon" onClick={() => setOpen(!open)}>
                    <i className="fas fa-times"></i>
                </div>
                <a href="">SERVICES</a>
                <a href="">WORK</a>
                <a href="">TESTIMONIALS</a>
                <a href="">CONTACT</a>
            </div>
            <div className="logo">
                <h1>A1CARPENTRY</h1>
            </div>
            <nav className="nav">
                <a href="">SERVICES</a>
                <a href="">WORK</a>
                <a href="">TESTIMONIALS</a>
                <a href="">CONTACT</a>
            </nav>
            <div className="call-to-action">
                <a href="tel:5712016904"><i className="fas fa-phone"></i></a>
            </div>

            {/* <div className="to-top-btn" onClick={scrollToTop}>
                <i className="fas fa-arrow-up"></i>
            </div> */}
        </header>
    );
};

export default Navigation;