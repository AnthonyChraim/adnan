import React, { useContext } from "react";
import LanguageContext from "../../../../../context/LanguageContext";
import "./properties-secondary-style.css";

var jsonDataEn = require("./data/properties-data.en.json");
var jsonDataFr = require("./data/properties-data.fr.json");

export const PropertiesGridSecondary = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.PropertiesSecondary : jsonDataFr.PropertiesSecondary;

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/properties");
  // };

  // TODO: ADD navigation, add slider, add color to icon, simplify css

  function isSurface(info) {
    if (info === "Surface") {
      return <small class="position-absolute text-xs justify-align-top mt-n0">2</small>;
    }
  }

  return (
    <section id="property-secondary-grid" class="property-secondary">
      <div class="properties-secondary-container">
        <div class="properties-secondary-row">
          <div class="property-secondary-title">
            <h2 spellcheck="false">{data.header}</h2>
          </div>
          {Object.keys(data.properties).map((key) => (
            <div class="properties-secondary-single">
              <div class="properties-secondary-single-card">
                <div class="properties-secondary-single-card-header">
                  <a href="#" class="d-block">
                    <div class="image-container">
                      <img src={data.properties[key].img} class="properties-secondary-single-card-img" />
                    </div>
                  </a>
                </div>

                <div class="properties-secondary-single-card-body">
                  <div class="d-flex align-items-center">
                    <div>
                      <a href="" class="properties-secondary-single-card-body-price">
                        {data.properties[key].price}
                      </a>
                      <p class="properties-secondary-single-card-body-description">{data.properties[key].address}</p>
                    </div>
                    <div class="ms-auto">
                      <a href="#" class="properties-secondary-single-card-body-details-btn">
                        {data.properties[key].details}
                      </a>
                    </div>
                  </div>
                  <div class="properties-secondary-single-card-body-details-row">
                    {Object.keys(data.properties[key].info).map((key2) => (
                      <div class="col-4">
                        <div class="d-flex align-items-end">
                          <i className={`${data.properties[key].info[key2].icon} properties-grid-secondary-icons`} />

                          <div class="ms-3">
                            <p class="text-xs mb-0 font-weight-bolder">{key2}</p>
                            <h6 class=" mb-0">
                              {data.properties[key].info[key2].value}
                              {isSurface(key2)}
                              {/* <small class="position-absolute text-xs justify-align-top mt-n0">2</small> */}
                            </h6>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div class="shadow"></div>
              </div>
            </div>
          ))}
        </div>
        <div class="col-12 mt-5 text-center">
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">{data.btn}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
