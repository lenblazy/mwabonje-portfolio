import "./styles.css";

const SectionTitle = ({ title, content }) => (
  <div className="container section-title" data-aos="fade-up">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);
export default SectionTitle;
