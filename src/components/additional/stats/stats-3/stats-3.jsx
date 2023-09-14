import React, { useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";
import "./stats-3-style.css";

var jsonDataEn = require("./data/stats-data.en.json");
var jsonDataFr = require("./data/stats-data.fr.json");

export const Stats3 = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.Stats3 : jsonDataFr.Stats3;

  return (
    <section id="stats3" className="stats3">
      <img src="assets/img/CTA/sell-or-buy-houses-laval.jpg" alt="house for sale" />

      <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="3" className="purecounter plus"></span>
              <p className="stats3-p">{data.Item1}</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="3" className="purecounter dollar"></span>
              <p className="stats3-p">{data.Item2}</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="3" className={`purecounter ${data.day}`}></span>
              <p className="stats3-p">{data.Item3}</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="104" data-purecounter-duration="3" className="purecounter percent"></span>
              <p className="stats3-p">{data.Item4}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-right-text">
        <p>{data.asterix}</p>
      </div>
    </section>
  );
};
