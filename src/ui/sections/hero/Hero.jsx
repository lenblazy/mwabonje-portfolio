import heroBgImg from "../../../assets/img/home-bg.jpg";
import "./styles.css";
import { socialLinks } from "../../../data/data";

const Hero = () => (
  <section id="hero" className="hero section dark-background">
    <img src={heroBgImg} alt="Lennox" data-aos="fade-in" />
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <h2>Lennox Mwabonje</h2>
      <p>
        I'm a{" "}
        <span
          className="typed"
          data-typed-items="Designer, Developer, Freelancer, Photographer"
        >
          Designer
        </span>
        <span
          className="typed-cursor typed-cursor--blink"
          aria-hidden="true"
        ></span>
        <span
          className="typed-cursor typed-cursor--blink"
          aria-hidden="true"
        ></span>
      </p>
      <div className="social-links">
        {socialLinks.map((link) => {
          const { id, linkTo, image } = link;
          return (
            <a href={linkTo} key={id}>
              <i className={`bi bi-${image}`}></i>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

export default Hero;
