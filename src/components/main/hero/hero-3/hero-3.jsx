import React, { useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";
import "./hero-3-style.css";

var jsonDataEn = require("./data/hero-data.en.json");
var jsonDataFr = require("./data/hero-data.fr.json");

export const Hero3 = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.Hero3 : jsonDataFr.Hero3;

  return (
    <section class="hero-3-section" id="hero-3">
      <div class="hero-3-container">
        <div class="hero-3-row">
          <div class="hero-3-column">
            <h1 class="hero-3-header">{data.title.firstHeader}</h1>
            <h2 class="hero-3-subheader">{data.title.secondHeader}</h2>
            <p class="hero-3-subheader-paragraph">
              {data.title.description.text}
              <a href={data.title.description.href} target="_blank">
                {data.title.description.link}
              </a>
            </p>
          </div>
          <div class="hero-3-card-position">
            <div class="rellax hero-3-card-content" data-rellax-speed="-1" data-disable-parallax-down="lg">
              <div class="heroLG-card-body">
                <h2 class="hero-3-card-header">{data.card.header}</h2>
                <p class="hero-3-card-text">{data.card.description} </p>
                <a href={data.card.buttonLink} class="hero-3-card-btn" target="_blank">
                  {data.card.button}
                  <i class="bx bx-right-arrow-alt hero-3-card-btn-text"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-3-left-image-block"></div>
        <div className="hero-3-left-image-align">
          <div className="hero-3-left-image">
            <img src={data.images.imageLeft} className="rellax" alt="Image" data-rellax-speed="1.35" data-disable-parallax-down="md" />
          </div>
          <div className="hero-3-appointment">
            <div className="hero-3-appointment-align">
              <i className="bx bx-time hero-3-clock-icon"></i>
              <ul className="hero-3-hours-list">
                {Object.keys(data.appointment.days).map((key) => (
                  <li>
                    <strong>{key}:</strong> {data.appointment.days[key]}
                  </li>
                ))}
              </ul>
            </div>
            <a href={data.appointment.button.link} className="hero-3-appointment-btn" target="_blank">
              {data.appointment.button.title}
            </a>
          </div>
        </div>
      </div>
      <div className="hero-3-right-image">
        <div className="hero-3-right-image-align" style={{ backgroundImage: `url(${data.images.imageRight})` }}></div>
      </div>
    </section>
  );
};
