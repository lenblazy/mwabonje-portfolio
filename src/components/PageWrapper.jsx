import React from "react";
import AppNav from "./AppNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Stats from "./pages/Stats";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";

const PageWrapper = () => (
	<div>
		<AppNav />
		<Home />
		<About />
		<Stats />
		<Skills />
		<Resume />
	</div>
);

export default PageWrapper;