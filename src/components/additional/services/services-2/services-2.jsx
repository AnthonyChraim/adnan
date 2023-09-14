import React, { useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";
import "./services-2-style.css";

var jsonDataEn = require("./data/services-data.en.json");
var jsonDataFr = require("./data/services-data.fr.json");

export const Services2 = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.Services2 : jsonDataFr.Services2;

  return (
    <section className="services-2" id="guide-adnan-al-deek">
      <h2 className="section-title">{data.header}</h2>
      <p className="services-2-p1">{data.description}</p>
      <div className="services-2-services-container">
        {Object.keys(data.services).map((key) => (
          <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay={data.services[key].delay} key={key}>
            <div class="service-content">
              <img className="services-2-img rounded-3" src={data.services[key].img} alt={data.services[key].alt} />
            </div>

            <div className="service-text pt-4">
              <h3>{data.services[key].name}</h3>
              <ul className="list-unstyled">
                {Object.keys(data.services[key].bulletpoints).map((key2) => (
                  <li key={key2}>
                    <i className={`text-primary me-2 fs-xl ${data.services[key].icon}`}></i>
                    {data.services[key].bulletpoints[key2]}
                  </li>
                ))}
              </ul>
            </div>
            <a href={data.services[key].btn.link} className="btn btn-link px-0" target="_blank">
              {data.services[key].btn.text}
              <i className="bx bx-right-arrow-alt fs-xl ms-2"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
