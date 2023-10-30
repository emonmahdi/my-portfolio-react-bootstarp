import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import MyBlog from "../MyBlog/MyBlog";
import MyPortfolio from "../MyPortfolio/MyPortfolio";
import Navigation from "../Navigation/Navigation";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Navigation />
      <HeaderBanner />
      <AboutMe />
      <Skills />
      <Education />
      <MyPortfolio />
      <MyBlog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
