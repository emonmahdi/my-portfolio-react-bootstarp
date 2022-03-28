import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import MyBlog from '../MyBlog/MyBlog';
import MyPortfolio from '../MyPortfolio/MyPortfolio';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div> 
            <Navigation />
            <HeaderBanner />
            <AboutMe />
            <Education />
            <MyPortfolio />
            <MyBlog />
            <Contact />
        </div>
    );
};

export default Home;