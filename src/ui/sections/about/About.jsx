import SectionTitle from "../../components/section-title/SectionTitle";
import profileImg from "../../../assets/img/profile-img.jpeg";

const About = () => (
  <section id="about" className="about section">
    <SectionTitle
      title="About"
      content="Lennox is a seasoned Software Engineer with over 6 years of experience building scalable and secure mobile and web applications. He specializes in creating innovative solutions for Fintech industries."
    />

    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row gy-4 justify-content-center">
        <div className="col-lg-4">
          <img src={profileImg} className="img-fluid" alt="Profile Image" />
        </div>
        <div className="col-lg-8 content">
          <h2>Full-Stack Software Engineer</h2>
          <p className="fst-italic py-3">
            Here's a record of my personal and professional details.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Birthday:</strong> <span>21 Dec 1995</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Website:</strong> <span>www.example.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Phone:</strong> <span>+254 727 253211</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                  <span>Nairobi, Kenya</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Degree:</strong> <span>Undergraduate</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Email:</strong> <span>lenibonje@gmail.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Freelance:</strong> <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="py-3">
            Feel free to reach out to me for any inquiries or collaborations. I
            am always open to new opportunities and challenges in the software
            development field.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
