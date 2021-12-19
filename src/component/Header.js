import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import SearchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png"
const Header = () => {
  return (
    <div className="header">
      <div className="logoContiner">
        <img src={punkLogo} className="punkLogo" alt="punkLogo" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={SearchIcon} alt="Search Icon" />
        </div>
        <input className="searchInput" placeholder="Collection, item or user.."/>
      </div>

      <div className="headerItems"> 
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
      </div>

      <div className="headerAction">
            <div className="themeSwitchContainer">
                <img src={themeSwitchIcon} alt="theme switch icon"/>
            </div>
      </div>

      <div className="loginButton">
            GET IN
      </div>
    </div>
  );
};

export default Header;
