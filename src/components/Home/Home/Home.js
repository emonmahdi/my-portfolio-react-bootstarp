import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div> 
            <Navigation />
            <HeaderBanner />
            <AboutMe />
        </div>
    );
};

export default Home;