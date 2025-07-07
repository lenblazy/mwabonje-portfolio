import React from "react";
import AppNav from "./AppNav";
import Home from "./pages/Home";
import About from "./pages/About";

const PageWrapper = () => (
	<div>
		<AppNav />
		<Home />
		<About />
	</div>
);

export default PageWrapper;