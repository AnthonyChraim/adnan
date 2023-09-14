import React, { useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";
import "./navigation-bar-2-style.css";

var jsonDataEn = require("./data/navigation-bar-data.en.json");
var jsonDataFr = require("./data/navigation-bar-data.fr.json");
var data = jsonDataEn.NavigationBar2;

// recursively generate dropdown
function generateNavbar(content) {
  return Object.keys(content).map((key, index) => {
    if (typeof content[key] === "object") {
      return (
        <li className="nav-item dropdown" key={key + index} role="menu">
          <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false" aria-label={key}>
            {key}
          </span>
          <ul className="dropdown-menu" aria-label="Options" aria-labelledby={key}>
            {generateNavbar(content[key].content)}
          </ul>
        </li>
      );
    } else {
      return (
        <li className="nav-item" key={key + index}>
          <a href={content[key]} className="nav-link" aria-label="Go to section">
            {key}
          </a>
        </li>
      );
    }
  });
}

export const NavigationBar2 = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const data = language === "en" ? jsonDataEn.NavigationBar2 : jsonDataFr.NavigationBar2;

  return (
    <header className="navbar-icons navbar-icons-expand-lg navbar-icons-stuck" id="navbar-icons-header">
      <div className="container-navbar-icons">
        <a
          href="https://remax3000.com/en/our-properties.html?forSaleForRent=all&priceMin=0&priceMax=1000000&page=1&lang=en&grid=1&uls=adnan+al-deek&limit=48"
          target="_blank"
          rel="noreferrer"
          className="navbar-icons-brand"
          aria-label="Go to Home"
        >
          <img src={data.icon2} width="44" height="40" alt="Remax logo" />
          <img src={data.icon} width="70" height="40" alt="Adnan al-deek logo" />
        </a>
        <div className="navbar-icons-icons">
          {/* Burger Menu for Mobile */}
          <button
            className="navbar-icons-toggler ms-auto nav-link px-2 ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-expanded="false"
            aria-label="Collapsed navbar-icons"
          >
            <span className="navbar-icons-toggler-icon">
              <i className="bx bx-menu"></i>
            </span>
          </button>
          {/* Phone and Chat Icons */}
          {Object.keys(data.contacts).map((key, index) => (
            <a href={data.contacts[key].link} className="nav-link px-2 ms-2" key={key + index} aria-label="Contact me">
              <i className={`${data.contacts[key].icon} fs-2`}></i>
            </a>
          ))}
        </div>
        <div className="navbar-icons-contacts">
          {Object.keys(data.contacts).map((key, index) => (
            <a href={data.contacts[key].link} className="navbar-icons-contact" key={key + index} aria-label="Contact me">
              <i className={`${data.contacts[key].icon} navbar-icons-contact-icon`}></i>
              <div className="navbar-icons-contact-title-position">
                <h6 className="navbar-icons-contact-title">{data.contacts[key].text}</h6>
                <span className="navbar-icons-contact-text">{data.contacts[key].info}</span>
              </div>
            </a>
          ))}
        </div>
        <nav id="navbarCollapse" className="collapse navbar-icons-collapse order-lg-2">
          <hr className="navbar-icon-break" />
          <ul className="navbar-icons-nav me-auto">
            {generateNavbar(data.content)}
            <div className="language-switch">
              <span className={language === "en" ? "inactive" : "active"} onClick={() => setLanguage("en")}>
                EN
              </span>
              <span className={language === "fr" ? "inactive" : "active"} onClick={() => setLanguage("fr")}>
                FR
              </span>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};
