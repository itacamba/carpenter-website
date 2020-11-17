import React from 'react';
import Kitchen1 from "../images/kitchen1.jpeg"
import "./css/GrowFrom.css"

const GrowFrom = () => {
    return (
        <div id="grow-from" className="two-columns">
            <div className="column-40">
                <h2>GROW FROM THE INSIDE OUT</h2>
                <p>We don’t leave your vision up 
                to interpretation. As both architect and builder,
                we don’t need a translator to understand your design. 
                Our team will ensure your details are never lost.</p>
            </div>
            <div className="column-50">
                <img src={Kitchen1} alt=""/>
            </div>
        </div>
    );
};

export default GrowFrom;