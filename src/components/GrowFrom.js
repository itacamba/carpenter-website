import React from 'react';
import Kitchen1 from "../images/kitchen1.jpeg"
import "./css/GrowFrom.css"

const GrowFrom = () => {
    return (
        <div id="grow-from" className="two-columns">
            <div className="column-40">
                <h2>GROW FROM THE INSIDE OUT</h2>
                <p>Lorem ipsum e tempora facilis mollitia natus nisi soluta temporibus deserunt. Cupiditate eligendi rem tenetur possimus, placeat est inventore nemo qui nihil odio architecto esse minus quibusdam accusamus libero quo blanditiis ipsa a dolore eos autem dicta facilis ea! Voluptatum et enim rem iste temporibus! Neque sint et sapiente enim temporibus beatae deserunt placeat consectetur, sequi maiores.</p>
            </div>
            <div className="column-50">
                <img src={Kitchen1} alt=""/>
            </div>
        </div>
    );
};

export default GrowFrom;