import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const icons = [
    {
      src: "/home.svg",
      alt: "icon1",
    },
    {
      src:  "/bell.svg",
      alt: "icon2",
    },
    {
      src: "/cart.svg",
      alt: "icon3",
    },
    {
      src: "/worldwideweb.svg",
      alt: "icon4",
    },
  ];
  return (
    <header
      id="sidebar"
      className={isOpen ? "open" : ""}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="side-top">
        <img
          className="logo"
          src="/logo.svg"
          alt="logo"
        />
      </div>

      <div className="side-center">
        <div className={`nav-links-vertical ${isOpen ? "visible" : "hidden"}`}>
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              style={{ "--i": index }}
            />
          ))}
        </div>
      </div>

      <div className="side-bottom">
        <div className="hamburger-container" onClick={() => setIsOpen(!isOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
}
