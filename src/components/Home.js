import React from 'react';
import GrowFrom from './GrowFrom';
import FeaturedProjects from './FeaturedProjects'
import OurServices from './OurServices'
import Main from './Main';
import ServingMaryland from './ServingMaryland';
import Contact from './Contact';
import ChooseUs from './ChooseUs';

const Home = () => {
    return (
        <div>
            <Main/>
            <GrowFrom/>
            <FeaturedProjects/>
            <OurServices/>
            <ChooseUs/>  {/*slider is here */}
            <ServingMaryland/>
            <Contact/>
        </div>
    );
};

export default Home;