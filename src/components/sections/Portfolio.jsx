import React from "react";
import { NavLink, Link } from "react-router";

const Portfolio = () => (
	 <section id="portfolio" className="portfolio section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="container">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Card</li>
            <li data-filter=".filter-branding">Web</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <Link to="/portfolio" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/portfolio/app-2.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <Link to="/portfolio" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/portfolio/app-3.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <Link to="/portfolio" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/portfolio/books-1.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <Link to="/portfolio" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
);

export default Portfolio;