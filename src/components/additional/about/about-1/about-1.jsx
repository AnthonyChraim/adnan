import React, { useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";
import "./about-1-style.css";

var jsonDataEn = require("./data/about-data.en.json");
var jsonDataFr = require("./data/about-data.fr.json");

export const About1 = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.About1 : jsonDataFr.About1;

  return (
    <section className="about-1 section-bg" id={data.anchor} style={{ scrollMarginTop: "10vh" }}>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2 about-1-center" data-aos="fade-left">
            {/* image */}
            <img src={data.img} className="img-fluid about-1-img" alt="adnan al-deek realtor laval" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            {/* title and description */}
            <h2 className="about-1-title">{data.title}</h2>
            <p>{data.description}</p>
            <p>{data.description2}</p>
            <ul>
              {/* loop through bulletpoints */}
              {Object.keys(data.bulletpoints).map((key) => (
                <li key={key}>
                  <p>
                    {/* href={data.bulletpoints[key].link} */}
                    <i className={data.bulletpoints[key].style}></i>
                  </p>
                  {data.bulletpoints[key].content}
                </li>
              ))}
            </ul>
            {/* conclusion paragraph */}
            <p>{data.conclusion}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
