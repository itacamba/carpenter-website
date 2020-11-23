import React from 'react';
import "./css/Main.css"
import Carpenter from "../images/main-darker.jpeg"


const Main = () => {
    return (
        <main className="main">
            {/* <img src={Carpenter} alt="carpenter"/> */}
            <div className="main-content">
                <h3>RE-BUILD YOUR PRESENT</h3>
                <p>Handmade, Bespoke, High quality.</p>
            </div>
        </main>
    );
};

export default Main;