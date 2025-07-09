import React from "react";
import AppNav from "../components/AppNav";
import Intro from "../components/sections/Intro";
import About from "../components/sections/About";
import Stats from "../components/sections/Stats";
import Skills from "../components/sections/Skills";
import Resume from "../components/sections/Resume";
import Portfolio from "../components/sections/Portfolio";
import Testimonials from "../components/sections/Testimonials";
import Services from "../components/sections/Services";
import Blog from "../components/sections/blog/Blog";

const Home = () => (
  <div>
    <AppNav />
    <Intro />
    <About />
    <Stats />
    <Skills />
    <Resume />
    <Portfolio />
    <Testimonials />
    <Services />
    <Blog />
  </div>
);

export default Home;
