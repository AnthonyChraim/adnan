import React, { useContext } from "react";
import LanguageContext from "../../../context/LanguageContext";
import "./error-realtor-style.css";

var jsonDataEn = require("./data/error-realtor-data.en.json");
var jsonDataFr = require("./data/error-realtor-data.fr.json");

export const PropertyNotFoundRealtor = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.ErrorRealtor.property : jsonDataFr.ErrorRealtor.property;

  return (
    <section id="realtor-notfound" className="d-flex align-items-center">
      <div className="container d-flex flex-column align-items-center justify-content-center" data-aos="fade-up">
        <h1>{data.header.title}</h1>
        <h2>{data.header.description}</h2>
        <a href={data.header.link} className="btn-get-started scrollto">
          {data.header.button}
        </a>

        <div className="col-sm-12">
          <div className="row">
            <div className="col-md-6">
              <div className="agent-avatar-box">
                <img src="/assets/img/realtor.jpg" alt="" className="agent-avatar img-fluid" />
              </div>
            </div>
            <div className="col-md-5 section-md-t3 textAlignment-left">
              <div className="agent-info-box">
                <div className="agent-title">
                  <div className="title-box-d">
                    <h3 className="title-d">{data.profile.name}</h3>
                  </div>
                </div>
                <div className="agent-content mb-3">
                  <p className="content-d color-text-a">{data.profile.description}</p>
                  {Object.keys(data.profile.contact).map((key) => (
                    <div className="info-agents color-a">
                      <p>
                        <strong>{key}: </strong>
                        <span className="color-text-a"> {data.profile.contact[key]} </span>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="social-links justify-content-center">
                  {Object.keys(data.profile.socials).map((key) => (
                    <a href={data.profile.socials[key]} target="_blank" rel="noreferrer" key={key}>
                      <i className={key}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
