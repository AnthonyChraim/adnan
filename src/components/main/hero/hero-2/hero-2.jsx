import React, { useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";
import "./hero-2-style.css";

var jsonDataEn = require("./data/hero-data.en.json");
var jsonDataFr = require("./data/hero-data.fr.json");

export const Hero2 = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.Hero2 : jsonDataFr.Hero2;

  return (
    // TODO: add iframe to display photo and video
    <section
      id="hero-2"
      className="d-flex align-items-center"
      // background image
      style={{ background: `linear-gradient(45deg, rgba(34, 39, 43, 0.8) 0%, rgba(34, 39, 43, 0.8) 100%), url("${data.imgBackground}") center center no-repeat` }}
    >
      <div className="container-fluid" data-aos="fade-up">
        <div className="row justify-content-center">
          {/* title description and button */}
          <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>
              {data.title}
              <br />
              {data.title2}
            </h1>
            <h2>
              {data.description1}
              <a href="https://goo.gl/maps/uArMhaoWSYYyXCd29" target="_blank" rel="noreferrer">
                <span>{data.descriptionLaval}</span>
              </a>
              {data.description2}

              <br></br>
              {data.description3}
            </h2>
            <div>
              <a className="btn-get-started" href={data.button.link}>
                {data.button.content}
              </a>
            </div>
            {/* <a className="btn-get-started" href={data.button.link}>
              {data.button.content}
            </a> */}
          </div>
          {/* image floating on the right */}
          <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
            <img src={data.imgRight} className="img-fluid animated" alt="adnan al-deek realtor laval" height="525" width="525" />
          </div>
        </div>
      </div>
    </section>
  );
};
