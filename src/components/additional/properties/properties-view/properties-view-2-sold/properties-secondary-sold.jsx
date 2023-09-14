import React, { useContext } from "react";
import LanguageContext from "../../../../../context/LanguageContext";
import "./properties-secondary-sold-style.css";

var jsonDataEn = require("./data/properties-data.en.json");
var jsonDataFr = require("./data/properties-data.fr.json");

export const PropertiesSecondarySold = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.PropertiesSecondarySold : jsonDataFr.PropertiesSecondarySold;

  // TODO: ADD navigation, add slider, add color to icon, simplify css

  function isSurface(info) {
    if (info === "Surface") {
      return <small class="position-absolute text-xs justify-align-top mt-n0">2</small>;
    }
  }
  return (
    <section id="property-secondary-view2" className="property-secondary">
      <div className="properties-secondary-container">
        <div className="row">
          <div className="property-secondary-title">
            <h2 spellcheck="false">{data.header}</h2>
          </div>
          <div id="property-secondary-carousel" className="swiper">
            <div className="swiper-wrapper">
              {Object.keys(data.properties).map((key) => (
                <div className="properties-secondary-single swiper-slide">
                  <div className="properties-secondary-single-card property-secondary-card_box">
                    <div className="properties-secondary-single-card-header ">
                      <a href="#" className="d-block ">
                        <div className="image-container">
                          <span className={language.language}></span>

                          <img src={data.properties[key].img} className="properties-secondary-single-card-img" />
                        </div>
                      </a>
                    </div>

                    <div className="properties-secondary-single-card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <a href="" className="properties-secondary-single-card-body-price">
                            {data.properties[key].price}
                          </a>
                          <p className="properties-secondary-single-card-body-description">{data.properties[key].address}</p>
                        </div>
                        <div className="ms-auto">
                          <a href="#" className="properties-secondary-single-card-body-details-btn">
                            {data.properties[key].details}
                          </a>
                        </div>
                      </div>
                      <div className="properties-secondary-single-card-body-details-row">
                        {Object.keys(data.properties[key].info).map((key2) => (
                          <div className="col-4">
                            <div className="d-flex align-items-end">
                              <i className={`${data.properties[key].info[key2].icon} properties-grid-secondary-icons`} />

                              <div className="ms-3">
                                <p className="text-xs mb-0">{key2}</p>
                                <h6 className="font-weight-bolder mb-0">
                                  {data.properties[key].info[key2].value}
                                  {isSurface(key2)}

                                  {/* <small className="position-absolute text-xs justify-align-top mt-n0">2</small> */}
                                </h6>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="shadow"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="propery-secondary-carousel-pagination carousel-pagination"></div>
        </div>

        <div className="col-12 mt-5 text-center">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">{data.btn}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
