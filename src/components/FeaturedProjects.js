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
                    <h3>01. LIVING ROOM REMODEL</h3>
                    <p>A contemporary property was fitted with
                    made-to-measure storage and furniture, which
                    helped turn a work of art into an idyllic home for
                    our family client.
                    </p>
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
                    <h3>02. KITCHEN REMODELING</h3>
                    <p>Kitchen remodeling is considered one of the
                    most desirable remodeling projects for its
                    potential impact on daily living and increase
                    in property value.
                    </p>
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