import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div> 
            <Navigation />
            <HeaderBanner />
            <AboutMe />
            <Education />
        </div>
    );
};

export default Home;