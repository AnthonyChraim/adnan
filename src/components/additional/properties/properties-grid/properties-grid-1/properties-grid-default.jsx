import React, { useContext } from "react";
import LanguageContext from "../../../../../context/LanguageContext";
import "./properties-default-style.css";

var jsonDataEn = require("./data/properties-data.en.json");
var jsonDataFr = require("./data/properties-data.fr.json");

export const PropertiesGridDefault = () => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.PropertiesDefault : jsonDataFr.PropertiesDefault;

  // DONT FORGET TO CHANGE THIS IF AREA PARAMETER IS DIFFERENT
  function isArea(info) {
    if (info === "Area" || info === "Superficie") {
      return <small class="position-absolute text-xs justify-align-top mt-n0">2</small>;
    }
  }

  return (
    <section id="properties-grid-1-grid" class="property-grid grid">
      {/* TODO: fix space between nav and rest of site */}
      <div class="container">
        <div class="row">
          {/* all houses displayed 3x3 */}
          {Object.keys(data.properties).map((key) => (
            <div class="col-md-4">
              <div className="card-box-a card-shadow">
                <div className="img-box-a">
                  <img src={data.properties[key].images.img1} alt="" className="img-a img-fluid" />
                </div>
                <div className="card-overlay">
                  <div className="card-overlay-a-content">
                    <div className="card-header-a">
                      <h2 className="card-title-a">
                        {Object.keys(data.properties[key].address).map((key2) => (
                          <a href={key} target="_blank">
                            {data.properties[key].address[key2]}
                            <br></br>
                          </a>
                        ))}
                      </h2>
                    </div>
                    <div className="card-body-a">
                      <div className="price-box d-flex">
                        <span className="price-a">{data.properties[key].price}</span>
                      </div>
                      <a href={"/property/" + key} className="link-a" target="_blank">
                        {data.properties[key].seeMore}
                        <span className="bi bi-chevron-right"></span>
                      </a>
                    </div>
                    <div className="card-footer-a">
                      <ul className="card-info d-flex justify-content-around">
                        {Object.keys(data.properties[key].info).map((key2) => (
                          <li className="text-center">
                            <h4 className="card-info-title">{key2}</h4>
                            <span>
                              {data.properties[key].info[key2]}
                              {isArea(key2)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
