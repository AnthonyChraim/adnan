import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import LanguageContext from "../../../../../context/LanguageContext";
import "./properties-default-style.css";

var jsonDataEn = require("./data/properties-data.en.json");
var jsonDataFr = require("./data/properties-data.fr.json");

export const PropertyGridDefaultIntro = () => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.PropertiesDefault.grid : jsonDataFr.PropertiesDefault.grid;

  const params = useParams();
  return (
    <section id="properties-grid-1-grid" className="intro-single">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            {/* title and  description*/}
            <div className="title-single-box">
              <h2 className="title-single">{data.title}</h2>
              <span className="color-text-a">{data.description}</span>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
              <ol className="breadcrumb">
                {/* links  */}
                {Object.keys(data.path).map((key) => (
                  <li className="breadcrumb-item">
                    <a href={data.path[key]}>{key}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
