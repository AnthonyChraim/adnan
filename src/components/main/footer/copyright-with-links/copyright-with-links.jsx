import React, { useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";
import { Helmet } from "react-helmet";
import "./copyright-with-links-style.css";

var jsonDataEn = require("./data/copyright-with-links-data.en.json");
var jsonDataFr = require("./data/copyright-with-links-data.fr.json");
var data = jsonDataEn.CopyrightWithLinks;

// image or text as logo depending if ther is one
function isImg(img) {
  if (img === "") {
    return (
      <h1 className="logo me-auto me-lg-0">
        <a href="/#" className="footer-header-logo">
          OnePage Pro
        </a>
      </h1>
    );
  } else {
    return (
      <a href="/#" className="logo me-auto me-lg-0">
        <img src={data.img} alt="" className="img-fluid" />
      </a>
    );
  }
}

export const CopyrightWithLinks = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.CopyrightWithLinks : jsonDataFr.CopyrightWithLinks;

  return (
    <footer id="copyright-with-links">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            {/*{isImg(data.img)}*/}
            <a
              href="https://remax3000.com/en/our-properties.html?forSaleForRent=all&priceMin=0&priceMax=1000000&page=1&lang=en&grid=1&uls=adnan+al-deek&limit=48"
              target="_blank"
              rel="noreferrer"
              className="navbar-icons-brand"
            >
              <img src={data.icon2} width="43" height="39" alt="Remax logo" />
            </a>
            <a href="/" className="navbar-icons-brand">
              <img src={data.icon} width="95" height="50" alt="Adnan logo" />
            </a>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <p className="copyright">
              {data.title}
              <br />
              <span>
                <a href="https://www.onepagepro.ca" className="opp">
                  {data.description}
                </a>
              </span>
              – <a href="https://www.onepagepro.ca">{data.design}</a>
            </p>
          </div>
          <div className="social-links col-md-4 d-flex justify-content-center align-items-center">
            {Object.keys(data.socials).map((key) => (
              <a href={data.socials[key]} target="_blank" rel="noreferrer" key={key} aria-label={`Visit ${key} profile on social media`}>
                <i className={key}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* TODO: FIND SOLUTION OR PLACE IT IN A COMPONENT THAT WILL ALWAYS BE HERE */}
      <Helmet>
        <script src="/assets/js/main.js"></script>
      </Helmet>
    </footer>
  );
};
