import React from 'react';
import "./css/Main.css"
import Carpenter from "../images/main.jpg"


const Main = () => {
    return (
        <main className="main">
            <img src={Carpenter} alt="carpenter"/>
            <div className="main-content">
                <h1>RE-BUILD YOUR PRESENT</h1>
                <p>Handmade, Bespoke, High quality.</p>
            </div>
        </main>
    );
};

export default Main;