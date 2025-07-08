import React from "react";
import AppNav from "../AppNav";
import Intro from "../sections/Intro";
import About from "../sections/About";
import Stats from "../sections/Stats";
import Skills from "../sections/Skills";
import Resume from "../sections/Resume";
import Portfolio from "../sections/Portfolio";

const Home = () => (
	<div>
		<AppNav />
		<Intro />
		<About />
		<Stats />
		<Skills />
		<Resume />
		<Portfolio />
	</div>
);

export default Home;