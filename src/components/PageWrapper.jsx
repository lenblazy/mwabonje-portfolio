import React from "react";
import AppNav from "./AppNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Stats from "./pages/Stats";
import Skills from "./pages/Skills";

const PageWrapper = () => (
	<div>
		<AppNav />
		<Home />
		<About />
		<Stats />
		<Skills />
	</div>
);

export default PageWrapper;