import React, { useState } from 'react';
import "./css/Header.css"
import Logo from "../images/logo.png"
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

                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                >WORK</Link>

                <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={500}
                >SERVICES</Link>


                <Link
                    activeClass="active"
                    to="why-us"
                    spy={true}
                    smooth={true}
                    duration={500}
                >WHY US</Link>

                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                >CONTACT US</Link>

            </div>
            <div className="logo">
                <img src={Logo} alt="weiger_logo"/>
            </div>
            <nav className="nav">

                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                >WORK</Link>

                <Link
                    activeClass="active"
                    to="services" 
                    spy={true}
                    smooth={true}
                    duration={500}
                >SERVICES</Link>


                <Link
                    activeClass="active"
                    to="why-us"
                    spy={true}
                    smooth={true}
                    duration={500}
                >WHY US</Link>

                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                >CONTACT US</Link>
                
            </nav>
            <div className="call-to-action">
                <a href="tel:5712016904"><i className="fas fa-phone"></i></a>
            </div>

            <div className="to-top-btn" onClick={scrollToTop}>
                <i className="fas fa-arrow-up"></i>
            </div>
        </header>
        
    );
};

export default Navigation;