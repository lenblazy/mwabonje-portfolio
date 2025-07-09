import Header from "../components/header/Header";
import Hero from "../sections/hero/Hero";
import About from "../sections/About";
import Stats from "../sections/Stats";
import Skills from "../sections/Skills";
import Resume from "../sections/Resume";
import Portfolio from "../sections/Portfolio";
import Testimonials from "../sections/Testimonials";
import Services from "../sections/Services";
import Blog from "../sections/blog/Blog";
import Contact from "../sections/contact/Contact";
import Footer from "../components/footer/Footer";

const Home = () => (
  <div>
    <Header />
    <Hero />
    <About />
    <Stats />
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
