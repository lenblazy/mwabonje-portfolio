import "./styles.css";
import { NavLink, Link } from "react-router";
import { portfolioItems } from "../../../data/data";
import PortfolioItem from "../../components/portfolio-item/PortfolioItem";
import SectionTitle from "../../components/section-title/SectionTitle";

const Portfolio = () => (
  <section id="portfolio" className="portfolio section">
    <div className="container section-title" data-aos="fade-up">
      <SectionTitle
        title={"Portfolio"}
        content={
          "Explore my portfolio to see a collection of my work, including web and mobile applications that I have developed. Each project showcases my skills in software engineering, design, and problem-solving. From Fintech solutions to innovative web applications, my portfolio reflects my dedication to delivering high-quality software that meets user needs and business goals."
        }
      />
    </div>

    <div className="container">
      <div
        className="isotope-layout"
        data-default-filter="*"
        data-layout="masonry"
        data-sort="original-order"
      >
        <ul
          className="portfolio-filters isotope-filters"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <li data-filter="*" className="filter-active">
            All
          </li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-product">Card</li>
          <li data-filter=".filter-branding">Web</li>
        </ul>

        <div
          className="row gy-4 isotope-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {portfolioItems.map((portfolio) => {
            const { id, image, title, description, filter } = portfolio;
            return (
              <PortfolioItem
                key={id}
                image={image}
                title={title}
                description={description}
                filter={filter}
              />
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
