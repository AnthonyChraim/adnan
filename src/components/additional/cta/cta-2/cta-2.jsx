import React, { useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";
import "./cta-2-style.css";

var jsonDataEn = require("./data/cta-data.en.json");
var jsonDataFr = require("./data/cta-data.fr.json");

export const CTA2 = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.CTA2 : jsonDataFr.CTA2;

  return (
    <section id="cta2" className="call-to-action">
      <div className="gradient-img">
        <img src="/assets/img/CTA/buy-or-sell-houses-laval.jpg" alt="house for sale" />
      </div>
      <div className="container">
        <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-10">
            <div className="text-center">
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <a className="cta-btn" href={data.button.link}>
                {data.button.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
