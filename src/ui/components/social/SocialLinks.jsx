const SocialLinks = ({ socialLinks }) => {
  return (
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
  );
};
export default SocialLinks;
