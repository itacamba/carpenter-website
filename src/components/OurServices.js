import React,{useState} from 'react';
import "./css/Services.css"

const OurServices = () => {


    const [slide,setSlide] = useState(1)

    return (
        <div id="services">
            <h2>OUR SERVICES</h2>
            {slide === 1?
                <div className="service">
                    <h1>KITCHEN REMODEL</h1>
                    <p>We are experts in kitchen fitting, repair and
                        renovation. Our qualified kitchen installation 
                        team will fit any make of units. If your kitchen 
                        needs repair or renovation, we will work quickly 
                        to give you the perfect makeover.</p>
                </div>
            : slide === 2?
            <div className="service">
                <h1>BATHROOM REMODEL</h1>
                <p>Slide2 ipsum dolor sit amet, consectetur adipisicing elit. Optio sunt officia ipsum ut, omnis sed fugit ab totam illum corrupti, aliquid in tempora dolores id deserunt. Temporibus corrupti accusantium facilis.</p>
            </div>
            : slide === 3?
            <div className="service">
                <h1>OFFICE REMODEL</h1>
                <p>Slide3 ipsum dolor sit amet, consectetur adipisicing elit. Optio sunt officia ipsum ut, omnis sed fugit ab totam illum corrupti, aliquid in tempora dolores id deserunt. Temporibus corrupti accusantium facilis.</p>
            </div>
            : 
            <div className="service">
                <h1>LIVINGROOM REMODEL</h1>
                <p>Slide4 ipsum dolor sit amet, consectetur adipisicing elit. Optio sunt officia ipsum ut, omnis sed fugit ab totam illum corrupti, aliquid in tempora dolores id deserunt. Temporibus corrupti accusantium facilis.</p>
            </div>
            }
            <div className="services-btns">
                <button className={slide === 1? 'active':null} onClick={()=> setSlide(1)}>01.</button>
                <button className={slide === 2? 'active':null} onClick={()=> setSlide(2)}>02.</button>
                <button className={slide === 3? 'active':null} onClick={()=> setSlide(3)}>03.</button>
                <button className={slide === 4? 'active':null} onClick={()=> setSlide(4)}>04.</button>
            </div>
        </div>
    );
};

export default OurServices;