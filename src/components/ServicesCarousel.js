import React from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

import "./css/Services.css"
const ServicesCarousel = () => { // https://react-slick.neostack.com/docs/example/custom-paging/
    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        customPaging: function(i) {
            return (
              <a href="!#" className="slider-number">
                {(i+1)+'.0'}
              </a>
            );
        }
      };
      
    return (
        <div id="services">
                <h2>OUR SERVICES</h2>
                <div className="vertical-line"></div>
            <Slider {...settings} class="slider">
                    <div className="each-slide service" >
                        <h1>KITCHEN REMODELING</h1>
                        <p>We are experts in kitchen fitting, repair and
                            renovation. Our qualified kitchen installation 
                            team will fit any make of units. If your kitchen 
                            needs repair or renovation, we will work quickly 
                            to give you the perfect makeover.</p>
                    </div>
                    <div className="each-slide service" >
                        <h1>BATHROOM REMODEL</h1>
                        <p>Bathrooms are one of the most important rooms in any house.
                        You spend time in them every day, so why not create a space you’ll love.
                        Our talented team of specialists has over 10 years of experience creating stunning 
                        bathrooms throughout Maryland and Virginia.</p>
                    </div>
                    <div className="each-slide service" >
                    <h1>BASEMENT REMODEL</h1>
                    <p>Finishing your basement is a great way to expand the square footage to 
                        Your home without the cost of an addition. Your basement project might be starting
                        as an unfinished space or it could be an existing finished basement that needs to
                        go to the next level.</p>                        
                    </div>
            </Slider>
        </div>
    );
};

export default ServicesCarousel;