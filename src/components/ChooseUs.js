import React from 'react';

import Slide1 from '../images/slider1.jpeg'
import Slide2 from '../images/slider2.png'
import Slide3 from '../images/slider3.jpg'

// react-slick docs  https://react-slick.neostack.com/docs/get-started
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import "./css/ChooseUs.css"

const ChooseUs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
    return (
        <div id="why-us" className="why-us">
            <h1>WHY CHOOSE US?</h1>
            <p>We meticulously plan each project we work on.
                From our initial meeting through to installation, our
                Team follows a process that allows us to ensure
                Quality and creativity.</p>
            <Slider {...settings}>
                <div className="each-slide">
                    <img src={Slide1} alt="" width="100%"  />
                </div>
                <div className="each-slide">
                    <img src={Slide2} alt="" width="100%"  />
                </div>
                <div className="each-slide">
                    <img src={Slide3} alt="" width="100%"  />
                </div>
            </Slider>
        </div>
    );
};

export default ChooseUs;