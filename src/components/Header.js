import React, { useState } from 'react';
import "./css/Header.css"
// import Logo from "../images/logo.png"
import { Link} from "react-scroll";
import PhoneIcon from "../images/phone-icon.png"

const Navigation = () => {
    // the following state controls the mobile menu when opened
    const [open, setOpen] = useState(false)

    // Hide and show header on scroll 
    const [navbar, setNavbar] = useState(false)
    const [prevY, setPrevY] = useState(0)

    const toggleNavbar = () => {
        let currentY = window.pageYOffset
        if(currentY > 200){
            if(prevY < currentY){ // going down
                setPrevY(currentY)
                setNavbar(true)
            } else { // going up
                setNavbar(false)
            } 
            setPrevY(currentY)    
        }
    }

    window.addEventListener('scroll', toggleNavbar)


    return (
        <header className={navbar? 'header hide' : 'header'} id="header">
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
                {/* <img src={Logo} alt="weiger_logo"/> */}
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
                {/* <a href="tel:5712016904"><i className="fas fa-phone"></i></a> */}
                <a href="tel:5712016904">
                    <img src={PhoneIcon} alt="phone"/>
                </a>
            </div>

        </header>
        
    );
};

export default Navigation;