import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import "./css/Footer.css"

const Footer = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <footer id="footer">
            <div className="to-top-btn" onClick={scrollToTop}>
                <i className="fas fa-arrow-up"></i>
            </div>
        </footer>
    );
};

export default Footer;