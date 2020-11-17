import React from 'react';
import GrowFrom from './GrowFrom';
import FeaturedProjects from './FeaturedProjects'
import OurServices from './OurServices'
import Main from './Main';
import ServingMaryland from './ServingMaryland';

const Home = () => {
    return (
        <div>
            <Main/>
            <GrowFrom/>
            <FeaturedProjects/>
            <OurServices/>
            <ServingMaryland/>
        </div>
    );
};

export default Home;