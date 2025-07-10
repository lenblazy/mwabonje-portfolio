import { useState, useEffect } from "react";
import { sectionLinks } from "../../../data/data.jsx";
import "./styles.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleClick = (e) => {
    e.preventDefault();
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header>
      <div className="top-bar">
        <a
          href="#"
          className={`menu-toggle ${menuOpen ? "is-clicked" : ""}`}
          onClick={handleToggleClick}
        >
          <span>Menu</span>
        </a>

        <div className="logo">
          <a href="#">Lennox Mwabonje</a>
        </div>

        <nav id="main-nav-wrap">
          <ul
            className="main-navigation"
            style={{ display: menuOpen ? "block" : "none" }}
          >
            {sectionLinks.map((link) => {
              const { id, className, linkTo, title } = link;
              return (
                <li key={id} className={className}>
                  <a href={linkTo} onClick={handleLinkClick}>
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
