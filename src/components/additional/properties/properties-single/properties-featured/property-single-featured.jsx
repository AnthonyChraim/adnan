import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LanguageContext from "../../../../../context/LanguageContext";
import "./properties-default-style.css";

var jsonDataEn = require("./data/properties-data.en.json");
var jsonDataFr = require("./data/properties-data.fr.json");

//TODO: Might be useful
function totalImages() {}

export const PropertySingleFeatured = () => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.PropertiesFeatured : jsonDataFr.PropertiesFeatured;

  return (
    // TODO: FIND SOLUTION FOR SQUARED SIGN IN AREA AND ADD TO OTHER PROPERTIES
    <section id="property-single-1" className="property-single nav-arrow-b">
      <div className="row">
        <div className="col-md-12">
          <div className="title-wrap d-flex justify-content-between">
            <div className="title-box">
              {/* <h2 className="title-a">{data.title}</h2> */}
              <h2> test </h2>
            </div>
            {/* properties title and link to all properties */}
            <div className="title-link">
              <a>
                test
                {/* <a href={data.link.link}>
                  {data.link.text} */}
                <span className="bi bi-chevron-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container intro-single">
          <div className="row">
            <div className="property-single-1-title-address">
              <div className="title-single-box">{Object.keys(data.property1.address).map((key) => displayTitle(key))}</div>
            </div>

            <div className="property-single-1-title-price">
              <div className="property-price d-flex justify-content-center">
                <div className="card-header-c d-flex">
                  <div className="card-box-ico">
                    <span className="bi bi-cash"></span>
                  </div>
                  <div className="align-self-center">
                    <h2 className="title-c">{data.property1.priceSingle}</h2>
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
                {/* all images of specific property1 */}
                {Object.keys(data.property1.images).map((key) => (
                  <div className="carousel-item-b swiper-slide" key={key}>
                    <div className="gallery-1-item">
                      <a href={data.property1.images[key]} className="gallery-lightbox" data-gall="gallery-1-item">
                        <img src={data.property1.images[key]} alt="" className="gallery-image" />
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
                    <h2 className="title-c">{data.property1.priceSingle}</h2>
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
                    <h3 className="title-d">{data.property1.description.title}</h3>
                  </div>
                </div>
              </div>
              <div className="property-description">
                {/* description of the property1 made of each paragraph */}
                {Object.keys(data.property1.description.description).map((key) => (
                  <p>{data.property1.description.description[key]}</p>
                ))}
              </div>
              <div className="row section-t3">
                <div className="col-sm-12">
                  {/* amenities */}
                  <div className="title-box-d">
                    <h3 className="title-d">{data.property1.amenity.title}</h3>
                  </div>
                </div>
              </div>
              <div className="amenities-list color-text-a">
                <ul className="list-a no-margin">
                  {Object.keys(data.property1.amenity.amenities).map((key) => (
                    <li>- {data.property1.amenity.amenities[key]}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // addresss where first line is larger than additional ones
  function displayTitle(key) {
    if (key == "line1") {
      return <h1 className="title-single">{data.property1.address[key]}</h1>;
    } else {
      return (
        <div>
          <span className="color-text-a">{data.property1.address[key]}</span>
          <br></br>
        </div>
      );
    }
  }
};
