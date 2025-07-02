import React from "react";
import AppNav from "../AppNav";

const Home = () => (
	<div>
		<AppNav />
		<section id="hero" className="hero section dark-background">
			<img src="assets/img/home-bg.jpg" alt="" data-aos="fade-in" className="" />
			<div className="container" data-aos="fade-up" data-aos-delay="100">
				<h2>Lennox Mwabonje</h2>
				<p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Designer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
			</div>

		</section>
	</div>

);

export default Home;