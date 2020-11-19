import React from 'react';
import GrowFrom from './GrowFrom';
import FeaturedProjects from './FeaturedProjects'
import OurServices from './OurServices'
import Main from './Main';
import ServingMaryland from './ServingMaryland';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Main/>
            <GrowFrom/>
            <FeaturedProjects/>
            <OurServices/>
            <ServingMaryland/>
            <Contact/>
        </div>
    );
};

export default Home;