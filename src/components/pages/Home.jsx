import React from "react";
import AppNav from "../AppNav";

const Home = () => (
	<section id="hero" className="hero section dark-background">
		<img src="assets/img/home-bg.jpg" alt="" data-aos="fade-in" className="" />
		<div className="container" data-aos="fade-up" data-aos-delay="100">
			<h2>Lennox Mwabonje</h2>
			<p>I'm a <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Designer</span>
				<span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
				<span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
			</p>
			<div className="social-links">
				<a href="#"><i className="bi bi-twitter-x"></i></a>
				<a href="#"><i className="bi bi-facebook"></i></a>
				<a href="#"><i className="bi bi-instagram"></i></a>
				<a href="#"><i className="bi bi-linkedin"></i></a>
			</div>
		</div>

	</section>
);

export default Home;