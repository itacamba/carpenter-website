import React from 'react';
import "./css/FeaturedProjects.css"
import LivingRoom from "../images/living-room.png"
import Kitchen2 from "../images/kitchen-remodel.jpg"

const FeaturedProjects = () => {
    return (
        <div id="projects" >
            <h2 className="left-pad-10 top-pad">FEATURED PROJECTS</h2>

            <div className="two-full-columns">
                <div className="column-40 project" >
                    <h3>01.LIVING ROOM REMODEL</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus reiciendis fuga eligendi sunt! Rerum officiis minima assumenda inventore eaque?</p>
                    <div className="project-detail">
                        <div className="yellow-line"></div>
                        <a className="font-ital" href="">View Project</a>
                    </div>
                </div>
                <div className="column-50">
                    <img src={LivingRoom} alt=""/>
                </div>
            </div>

            <div className="two-full-columns">
                <div className="column-50">
                    <img src={Kitchen2} alt=""/>
                </div>
                <div className="column-40  project">
                    <h3>01.LIVING ROOM REMODEL</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus reiciendis fuga eligendi sunt! Rerum officiis minima assumenda inventore eaque?</p>
                    <div className="project-detail">
                        <div className="yellow-line"></div>
                        <a className="font-ital" href="">View Project</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeaturedProjects;