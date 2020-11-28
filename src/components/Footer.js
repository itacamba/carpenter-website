import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import "../App.css"
import "./css/Footer.css"
import { Link} from "react-scroll";

const Footer = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <footer id="footer">
            <div className="logo">
                {/* <img src={Logo} alt=""/> */}
            </div>
            <div className="footer-nav">
                <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-125}
                    >WORK</Link>

                <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-125}
                >SERVICES</Link>

                <Link
                    activeClass="active"
                    to="why-us"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-125}
                >WHY US</Link>

                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-125}
                >CONTACT US</Link>
            </div>
            <div className="copyright">
            ©Copyright 2020 weigerremodeling.com
            </div>
            <div className="to-top-btn" onClick={scrollToTop}>
                <i className="fas fa-arrow-up"></i>
            </div>
        </footer>
    );
};

export default Footer;