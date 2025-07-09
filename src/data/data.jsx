import { NavLink } from "react-router";
import imgApp1 from "../assets/img/portfolio/app-1.jpg";
import imgApp2 from "../assets/img/portfolio/app-2.jpg";
import imgApp3 from "../assets/img/portfolio/app-3.jpg";

export const socialLinks = [
  {
    id: "twitter",
    linkTo: "https://twitter.com",
    image: "bi bi-twitter",
  },
  {
    id: "facebook",
    linkTo: "https://facebook.com",
    image: "bi bi-facebook",
  },
  {
    id: "instagram",
    linkTo: "https://instagram.com",
    image: "bi bi-instagram",
  },
  {
    id: "linkedin",
    linkTo: "https://linkedin.com",
    image: "bi bi-linkedin",
  },
];

export const sectionLinks = [
  {
    id: "home",
    className: "current",
    linkTo: "#home",
    title: "Home",
  },
  {
    id: "about",
    className: "",
    linkTo: "#about",
    title: "About",
  },
  // {
  //   id: "stats",
  //   className: "",
  //   linkTo: "#stats",
  //   title: "Stats",
  // },
  // {
  //   id: "skills",
  //   className: "",
  //   linkTo: "#skills",
  //   title: "Skills",
  // },
  {
    id: "resume",
    className: "",
    linkTo: "#resume",
    title: "Resume",
  },
  {
    id: "portfolio",
    className: "",
    linkTo: "#portfolio",
    title: "Portfolio",
  },
  {
    id: "testimonials",
    className: "",
    linkTo: "#testimonials",
    title: "Testimonials",
  },
  {
    id: "services",
    className: "",
    linkTo: "#services",
    title: "Services",
  },
  {
    id: "blog",
    className: "",
    linkTo: "#blog",
    title: "Blog",
  },
  {
    id: "contact",
    className: "",
    linkTo: "#contact",
    title: "Contact",
  },
];

export const portfolioItems = [
  {
    id: "app-1",
    image: imgApp1,
    title: "App 1",
    description: "Lorem ipsum, dolor sit",
    filter: "app",
  },
  {
    id: "product-1",
    image: imgApp2,
    title: "Product 1",
    description: "Lorem ipsum, dolor sit",
    filter: "product",
  },
  {
    id: "brand-1",
    image: imgApp3,
    title: "Product 1",
    description: "Lorem ipsum, dolor sit",
    filter: "branding",
  },
];
