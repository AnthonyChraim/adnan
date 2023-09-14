import React, { useContext, useState } from "react";
import LanguageContext from "../../../../context/LanguageContext";
import "./steps-3-style.css";

var jsonDataEn = require("./data/steps-data.en.json");
var jsonDataFr = require("./data/steps-data.fr.json");

export const Steps3 = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.Steps3 : jsonDataFr.Steps3;

  const [selectedOption, setSelectedOption] = useState("buy");

  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  return (
    <section className="steps-3 container" id={data.anchor}>
      {selectedOption === "buy" && (
        <div className="steps-3-steps-title-div">
          <h2 className="section-title">{data.option1.header}</h2>
          <p>{data.option1.description}</p>
        </div>
      )}

      {selectedOption === "sell" && (
        <div className="steps-3-steps-title-div">
          <h2 className="section-title">{data.option2.header}</h2>
          <p>{data.option2.description}</p>
        </div>
      )}

      <div className="center">
        <div className="radio-inputs">
          <label className={`radio ${selectedOption === "buy" ? "selected" : ""}`}>
            <input
              onClick={() => handleToggle("buy")}
              type="radio"
              name="radio"
              defaultChecked={selectedOption === "buy"} // Set defaultChecked
            />
            <span className="name">{data.option1.title}</span>
          </label>
          <label className={`radio ${selectedOption === "sell" ? "selected" : ""}`}>
            <input
              onClick={() => handleToggle("sell")}
              type="radio"
              name="radio"
              defaultChecked={selectedOption === "sell"} // This will be false
            />
            <span className="name">{data.option2.title}</span>
          </label>
        </div>
      </div>
      {selectedOption === "buy" && (
        <div className="steps-3-steps-list steps-3-steps-list-sm steps-3-steps-list-horizontal-md steps-3-steps-list-center acheteur">
          {Object.keys(data.option1.steps).map((key) => (
            <div className="steps-3-step" key={key}>
              <div className="steps-3-step-number">
                <div className="steps-3-step-number-inner" data-aos="zoom-in" data-aos-duration="500" data-aos-delay={data.option2.steps[key].delay}>
                  {data.option1.steps[key].number}
                </div>
              </div>
              <div className="steps-3-step-body" data-aos="zoom-in" data-aos-duration="500" data-aos-delay={data.option2.steps[key].delay}>
                <h3 className="fw-normal">{data.option1.steps[key].title}</h3>
                <p>{data.option1.steps[key].description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedOption === "sell" && (
        <div className="steps-3-steps-list steps-3-steps-list-sm steps-3-steps-list-horizontal-md steps-3-steps-list-center vendeur">
          {Object.keys(data.option2.steps).map((key) => (
            <div className="steps-3-step" key={key}>
              <div className="steps-3-step-number">
                <div className="steps-3-step-number-inner" data-aos="zoom-in" data-aos-duration="500" data-aos-delay={data.option2.steps[key].delay}>
                  {data.option2.steps[key].number}
                </div>
              </div>
              <div className="steps-3-step-body" data-aos="zoom-in" data-aos-duration="500" data-aos-delay={data.option2.steps[key].delay}>
                <h4 className="fw-normal">{data.option2.steps[key].title}</h4>
                <p>{data.option2.steps[key].description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
