import Header from "../components/header/Header";
import Hero from "../sections/hero/Hero";
import About from "../sections/about/About";
import Skills from "../sections/skills/Skills";
import Resume from "../sections/resume/Resume";
import Portfolio from "../sections/portfolio/Portfolio";
import Testimonials from "../sections/Testimonials";
import Services from "../sections/services/Services";
import Blog from "../sections/blog/Blog";
import Contact from "../sections/contact/Contact";
import Footer from "../components/footer/Footer";

const Home = () => (
  <div>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Resume />
    <Portfolio />
    <Testimonials />
    <Services />
    <Blog />
    <Contact />
    <Footer />
  </div>
);

export default Home;
