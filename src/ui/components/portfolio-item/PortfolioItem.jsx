import { NavLink, Link } from "react-router";

const PortfolioItem = ({ filter, image, title, description }) => {
  return (
    <div
      className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${filter}`}
    >
      <img src={image} className="img-fluid" alt={title} />
      <div className="portfolio-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <a
          href={image}
          title="App 1"
          data-gallery="portfolio-gallery-app"
          className="glightbox preview-link"
        >
          <i className="bi bi-zoom-in"></i>
        </a>
        <Link to="/portfolio" title="More Details" className="details-link">
          <i className="bi bi-link-45deg"></i>
        </Link>
      </div>
    </div>
  );
};
export default PortfolioItem;
