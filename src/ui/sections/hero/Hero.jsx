import heroBgImg from "../../../assets/img/home-bg.jpg";

import "./styles.css";
import { socialLinks } from "../../../data/data";
import SocialLinks from "../../components/social/SocialLinks";

const Hero = () => (
  <section id="home" className="hero section light-background">
    <img src={heroBgImg} alt="Lennox" data-aos="fade-in" />
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <h5>Hello, World.</h5>
      <h1>I'm Lennox Mwabonje</h1>
      <p class="intro-position">
        <span>Full-Stack Software Engineer</span>
      </p>

      <SocialLinks socialLinks={socialLinks} />
    </div>
  </section>
);

export default Hero;
