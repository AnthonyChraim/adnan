import React, { useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";
import "./stats-1-style.css";

var jsonDataEn = require("./data/stats-data.en.json");
var jsonDataFr = require("./data/stats-data.fr.json");

export const Stats1 = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.Stats1 : jsonDataFr.Stats1;

  return (
    <section id="stats-1" className="stats-1-container container">
      <h2 className="stats-1-h2">{data.header}</h2>
      <div className="stats-1-slider swiper">
        <div className="swiper-wrapper" data-aos="zoom-in" data-aos-delay="100">
          {Object.keys(data.cards).map((key) => (
            <div key={key} className="swiper-slide">
              <div className="stats-1-div1 card card-body card-hover">
                <i className={`stats-1-i1 display-5 card-icon ${data.cards[key].icon}`}></i>
                <h3 className="stats-1-h3">{data.cards[key].title}</h3>
                <p className="stats-1-p1">{data.cards[key].description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div> */}
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};
