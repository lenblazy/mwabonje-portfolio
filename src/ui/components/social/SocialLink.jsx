const SocialLink = ({ link, image }) => (
  <a href={link}>
    <i className={`bi bi-${image}`} />
  </a>
);

export default SocialLink;
