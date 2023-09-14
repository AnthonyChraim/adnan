import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LanguageContext from "../../../../../context/LanguageContext";
import "./properties-default-style.css";

var jsonDataEn = require("./data/properties-data.en.json");
var jsonDataFr = require("./data/properties-data.fr.json");

//TODO: Might be useful
function totalImages() {}

export const PropertySingleDefault = () => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.PropertiesDefault.properties : jsonDataFr.PropertiesDefault.properties;

  const params = useParams();
  const house = params.id;
  const property = data[house];
  const navigate = useNavigate();

  if (!property) {
    window.location.href = "/property/propertynotfound";
    return null;
  }
  return (
    // TODO: FIND SOLUTION FOR SQUARED SIGN IN AREA AND ADD TO OTHER PROPERTIES
    <section id="property-single-1" className="property-single nav-arrow-b">
      <div className="container">
        <div className="container intro-single">
          <div className="row">
            <div className="property-single-1-title-address">
              <div className="title-single-box">{Object.keys(data[house].address).map((key) => displayTitle(key, house))}</div>
            </div>

            <div className="property-single-1-title-price">
              <div className="property-price d-flex justify-content-center">
                <div className="card-header-c d-flex">
                  <div className="card-box-ico">
                    <span className="bi bi-cash"></span>
                  </div>
                  <div className="align-self-center">
                    <h2 className="title-c">{data[house].priceSingle}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="property-image">
            <div id="property-single-carousel" className="swiper">
              <div className="swiper-wrapper">
                {/* all images of specific house */}
                {Object.keys(data[house].images).map((key) => (
                  <div className="carousel-item-b swiper-slide" key={key}>
                    <div className="gallery-1-item">
                      <a href={data[house].images[key]} className="gallery-lightbox" data-gall="gallery-1-item">
                        <img src={data[house].images[key]} alt="" className="gallery-image" />
                        <div class="overlay">
                          <span class="overlay-text">See More</span>
                          <i class="overlay-icon">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASZJREFUSEu1lcuNwkAQRJ8T2Bt3yGSJBBARQAJAArshACIQyAQC4MJ1L6BCM8ge5tP24pEsS4ipqq7uLlf0fKqe8bEQDIEt8B2IOQEz4JITWSJIgXtMgY9zJDmCEriJpE4gC1YRK9q2SdZtAL0bPTgDUv2JI3BZ1yC4Z5B1Ye9VOSFqfE7Q0526RSmCnZuWGL8sXSeEmQg0JSMH8APMgT/gACzd7ylrTQTyUfYIfBEo/XUkU7cnYSEmAm/hDfgKEK7AwPVBVXQikD2yqTcCRYGanLNI+3PsWkE9b1JNFniYU68JtYypxlA7EAs17YKaHDumJvuLfv1Fokegk0KstCLoEh9vBJ/MoteChmlayhdLJck0tVxu/Z/SF601YHSd/42SAei9ggcDGUQZypNSoAAAAABJRU5ErkJggg==" />
                          </i>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="property-single-carousel-pagination carousel-pagination"></div>
            <div className="property-single-title-price-mobile">
              <div className="property-price d-flex">
                <div className="card-header-c d-flex">
                  <div className="card-box-ico">
                    <span className="bi bi-cash"></span>
                  </div>
                  <div className="align-self-center">
                    <h2 className="title-c">{data[house].priceSingle}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 property-description">
            <div className="row justify-content-between">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box-d">
                    <h3 className="title-d">{data[house].description.title}</h3>
                  </div>
                </div>
              </div>
              <div className="property-description">
                {/* description of the house made of each paragraph */}
                {Object.keys(data[house].description.description).map((key) => (
                  <p>{data[house].description.description[key]}</p>
                ))}
              </div>
              <div className="row section-t3">
                <div className="col-sm-12">
                  {/* amenities */}
                  <div className="title-box-d">
                    <h3 className="title-d">{data[house].amenity.title}</h3>
                  </div>
                </div>
              </div>
              <div className="amenities-list color-text-a">
                <ul className="list-a no-margin">
                  {Object.keys(data[house].amenity.amenities).map((key) => (
                    <li>- {data[house].amenity.amenities[key]}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div className="col-md-5 col-lg-4 quick-summary">
              <div className="property-summary">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="title-box-d section-t4">
                      <h3 className="title-d">{data[house].summary.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="summary-list">
                  <ul className="list">
                    {/* quick summary containing additional information about the house */}
                    {Object.keys(data[house].summary.quickSummary).map((key) => (
                      <li className="d-flex justify-content-between">
                        <strong>{key}:</strong>
                        <span>{data[house].summary.quickSummary[key]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* TODO: ADD OTHER STUFF IF NEEDED */}
            <div className="col-md-7 col-lg-8 video-tabs">
              <ul className="nav nav-pills-a nav-pills mb-3 section-t3" id="pills-tab" role="tablist">
                {Object.keys(data[house].additional).map((key2) => (
                  <li className="nav-item">
                    <a
                      className={"nav-link " + data[house].additional[key2].active}
                      data-bs-toggle="pill"
                      href={"#" + data[house].additional[key2].href}
                      role="tab"
                      aria-controls={data[house].additional[key2].href}
                    >
                      {data[house].additional[key2].title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="tab-content" id="pills-tabContent">
                {/* scrolling is depricated but works, overflow:hidden also works in style tag */}
                {Object.keys(data[house].additional).map((key2) => (
                  <div
                    className={"tab-pane fade show " + data[house].additional[key2].active}
                    id={data[house].additional[key2].href}
                    role="tabpanel"
                    aria-labelledby={data[house].additional[key2].href + "-tab"}
                  >
                    <iframe
                      src={data[house].additional[key2].link}
                      width="100%"
                      height="460"
                      frameborder="0"
                      webkitallowfullscreen
                      mozallowfullscreen
                      allowfullscreen
                      style={{ border: 0 }}
                      scrolling="no"
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // addresss where first line is larger than additional ones
  function displayTitle(key, house) {
    if (key == "line1") {
      return <h1 className="title-single">{data[house].address[key]}</h1>;
    } else {
      return (
        <div>
          <span className="color-text-a">{data[house].address[key]}</span>
          <br></br>
        </div>
      );
    }
  }
};
