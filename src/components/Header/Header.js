import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App/App.css";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <a href="#" className="logo-box__link">
          <FontAwesomeIcon
            icon="shipping-fast"
            className="logo-box__logo"
          />
          <span className="logo-box__text">Send-It</span>
        </a>
      </div>

      <nav className="header__nav">
        <div className="header__options">
          <a href="" >
            How it works
          </a>
        </div>
        <a href="./login.html" className="header__login">
          Log in
        </a>
      </nav>
    </header>
  );
};

export default Header;