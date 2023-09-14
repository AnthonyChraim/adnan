import React, { useContext } from "react";
import LanguageContext from "../../../../../context/LanguageContext";
import "./properties-default-sold-style.css";

var jsonDataEn = require("./data/properties-data.en.json");
var jsonDataFr = require("./data/properties-data.fr.json");

export const PropertyDefaultSold = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.PropertiesDefaultSold : jsonDataFr.PropertiesDefaultSold;

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/properties");
  // };

  // DONT FORGET TO CHANGE THIS IF AREA PARAMETER IS DIFFERENT
  // function isArea(info) {
  //   if (info === "Area" || info === "Superficie") {
  //     return <small class="position-absolute text-xs justify-align-top mt-n0">2</small>;
  //   }
  // }

  return (
    <section id="section-property-view1-sold" className="section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">{data.title}</h2>
              </div>
              <div className="title-box">
                <a
                  href="https://remax3000.com/en/our-properties.html?forSaleForRent=all&priceMin=0&priceMax=1000000&page=1&lang=en&grid=1&uls=adnan+al-deek&limit=48"
                  className="btn btn-link px-0 title-box-crumb"
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.titleRight}
                  <i className="bx bx-right-arrow-alt fs-xl ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="property-carousel2" className="swiper" data-aos="zoom-in" data-aos-delay="100">
          <div className="swiper-wrapper">
            {/* list of all properties with address, price, links and images */}
            {Object.keys(data.properties).map((key) => (
              <div className="carousel-item-b swiper-slide margin-sold" key={key}>
                <div className="card-box-a-sold card-shadow">
                  <div className="img-box-a card_box">
                    <span className={language.language}></span>
                    {/* TODO: FIX Z-INDEX SO IMAGE BECOMES CLICKABLE (add classname and css z-index=999) */}
                    <img src={data.properties[key].images.img1} alt="sold property" className="img-a img-fluid rounded-3" />
                  </div>
                  <div className="card-overlay">
                    <div className="card-overlay-a-content">
                      <div className="card-header-a">
                        <h2 className="card-title-a">
                          {Object.keys(data.properties[key].address).map((key2) => (
                            <p key={key2} href={"/property/" + key} target="_blank">
                              {data.properties[key].address[key2]}
                            </p>
                          ))}
                        </h2>
                      </div>
                      {/* <div className="card-footer-a">
                        <ul className="card-info d-flex justify-content-around">
                          {Object.keys(data.properties[key].info).map((key2) => (
                            <li className="text-center">
                              <h4 className="card-info-title">{key2}</h4>
                              {data.properties[key].info[key2]} {isArea(key2)}
                            </li>
                          ))}
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="propery-carousel-pagination2 carousel-pagination"></div>
      </div>
    </section>
  );
};
