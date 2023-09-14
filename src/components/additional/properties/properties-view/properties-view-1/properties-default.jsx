import React, { useContext } from "react";
import LanguageContext from "../../../../../context/LanguageContext";
import "./properties-default-style.css";

var jsonDataEn = require("./data/properties-data.en.json");
var jsonDataFr = require("./data/properties-data.fr.json");

export const PropertyDefault = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.PropertiesDefault : jsonDataFr.PropertiesDefault;

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/properties");
  // };

  // DONT FORGET TO CHANGE THIS IF AREA PARAMETER IS DIFFERENT
  function isArea(info) {
    if (info === "Area" || info === "Superficie") {
      return <small class="position-absolute text-xs justify-align-top mt-n0">2</small>;
    }
  }

  return (
    <section id="section-property-view1" className="section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">{data.title}</h2>
              </div>
              {/* properties title and link to all properties */}
              <div className="title-link">
                <a href={data.link.link}>
                  {data.link.text}
                  <span className="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="property-carousel" className="swiper">
          <div className="swiper-wrapper">
            {/* list of all properties with address, price, links and images */}
            {Object.keys(data.properties).map((key) => (
              <div className="carousel-item-b swiper-slide" key={key}>
                <div className="card-box-a card-shadow">
                  <div className="img-box-a">
                    {/* TODO: FIX Z-INDEX SO IMAGE BECOMES CLICKABLE (add classname and css z-index=999) */}
                    <a href={key} target="_blank">
                      <img src={data.properties[key].images.img1} alt="" className="img-a img-fluid" />
                    </a>
                  </div>
                  <div className="card-overlay">
                    <div className="card-overlay-a-content">
                      <div className="card-header-a">
                        <h2 className="card-title-a">
                          {Object.keys(data.properties[key].address).map((key2) => (
                            <a href={"/property/" + key} target="_blank">
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
                          {/* additional info about properties when you hover */}
                          {Object.keys(data.properties[key].info).map((key2) => (
                            <li className="text-center">
                              <h4 className="card-info-title">{key2}</h4>
                              <span>
                                {data.properties[key].info[key2]} {isArea(key2)}
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
        <div className="propery-carousel-pagination carousel-pagination"></div>
      </div>
    </section>
  );
};
