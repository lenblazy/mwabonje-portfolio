import React from "react";
import AppNav from "../AppNav";
import Intro from "../sections/Intro";
import About from "../sections/About";
import Stats from "../sections/Stats";
import Skills from "../sections/Skills";
import Resume from "../sections/Resume";
import Portfolio from "../sections/Portfolio";
import Testimonials from "../sections/Testimonials";
import Services from "../sections/Services";

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
	</div>
);

export default Home;