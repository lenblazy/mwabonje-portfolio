import React from "react";

const About = () => (
	
	<section id="about" className="about section">

		<div className="container section-title" data-aos="fade-up">
			<h2>About</h2>
			<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
		</div>

		<div className="container" data-aos="fade-up" data-aos-delay="100">

			<div className="row gy-4 justify-content-center">
				<div className="col-lg-4">
					<img src="assets/img/profile-img.jpeg" className="img-fluid" alt="" /> 
				</div>
				<div className="col-lg-8 content">
					<h2>Full-Stack Software Engineer</h2>
					<p className="fst-italic py-3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<div className="row">
						<div className="col-lg-6">
							<ul>
								<li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>21 Dec 1995</span></li>
								<li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
								<li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+254 727 253211</span></li>
								<li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Nairobi, Kenya</span></li>
							</ul>
						</div>
						<div className="col-lg-6">
							<ul>
								<li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>29</span></li>
								<li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Undergraduate</span></li>
								<li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>lenibonje@gmail.com</span></li>
								<li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
							</ul>
						</div>
					</div>
					<p className="py-3">
						Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
						Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
					</p>
				</div>
			</div>
		</div>
	</section>

);

export default About;