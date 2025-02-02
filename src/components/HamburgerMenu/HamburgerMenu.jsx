import { useState } from "react";
import { Link } from "react-router-dom";
import "./HamburgerMenu.css";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`menu-links ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>
          ×
        </button>
        <ul>
          <li>
            <Link to="/homepage" onClick={toggleMenu}>
              Home Page
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={toggleMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/leads" onClick={toggleMenu}>
              Leads
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
