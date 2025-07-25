import "./styles.css";

const Skills = () => (
  <section id="skills" className="skills section">
    <div className="container section-title" data-aos="fade-up">
      <h2>Skills</h2>
      <p>
        Here's a list of my technical skills and proficiencies in various
        programming languages, frameworks, and tools that I have mastered over
        the years. Each skill is accompanied by a percentage indicating my level
        of expertise.
      </p>
    </div>

    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row skills-content skills-animation">
        <div className="col-lg-6">
          <div className="progress">
            <span className="skill">
              <span>HTML</span> <i className="val">100%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">
              <span>CSS</span> <i className="val">90%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">
              <span>JavaScript</span> <i className="val">75%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="progress">
            <span className="skill">
              <span>PHP</span> <i className="val">80%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">
              <span>WordPress/CMS</span> <i className="val">90%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">
              <span>Photoshop</span> <i className="val">55%</i>
            </span>
            <div className="progress-bar-wrap">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row button-section">
      <div className="col-twelve">
        <a
          href="#contact"
          title="Hire Me"
          className="button stroke smoothscroll"
        >
          Hire Me
        </a>
        <a href="#" title="Download CV" className="button button-primary">
          Download CV
        </a>
      </div>
    </div>
  </section>
);

export default Skills;
