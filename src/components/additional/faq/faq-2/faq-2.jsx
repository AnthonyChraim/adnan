import React, { useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";
import "./faq-2-style.css";

var jsonDataEn = require("./data/faq-data.en.json");
var jsonDataFr = require("./data/faq-data.fr.json");

export const FAQ2 = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.FAQ2 : jsonDataFr.FAQ2;

  return (
    <section className="faq-2-section" id="faq-2">
      <div className="faq-2-row">
        <div className="faq-2-left" data-aos="fade-right" data-aos-delay="100">
          <h2 className="faq-2-left-header">
            {Object.keys(data.left.header).map((key) => (
              <span key={key}>
                {data.left.header[key]} <br />
              </span>
            ))}
          </h2>
          <p className="faq-2-left-description">{data.left.description}</p>
          <div className="faq-2-left-contact-row">
            <div className="faq-2-left-column">
              <div className="faq-2-left-card">
                <div className="faq-2-left-card-body">
                  <i className="bx bxs-phone-call faq-2-left-phone-icon"></i>
                  <p className="faq-2-left-text">{data.left.cards.phone.title}</p>
                  <a href={data.left.cards.phone.link} className="faq-2-left-btn">
                    {data.left.cards.phone.text}
                    <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="faq-2-left-column">
              <div className="faq-2-left-card">
                <div className="faq-2-left-card-body">
                  <i className="bx bx-message-rounded-dots faq-2-left-message-icon"></i>
                  <p className="faq-2-left-text">{data.left.cards.chat.title}</p>
                  <a href={data.left.cards.chat.link} className="faq-2-left-btn faq-2-green">
                    {data.left.cards.chat.text}
                    <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-2-right" data-aos="fade-left" data-aos-delay="100">
          <div className="faq-2-right-inner">
            <ul className="faq-2-accrodion-items">
              {Object.keys(data.right.questions).map((key) => (
                <li className="faq-2-right-accordion-item" key={key}>
                  <h2 id={key + "-heading"}>
                    <button className="faq-2-right-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + key} aria-expanded="false" aria-controls={key}>
                      {data.right.questions[key].question}
                    </button>
                  </h2>
                  <div id={key} className="faq-2-right-accordion-collapse collapse" data-bs-parent=".faq-2-right-accordion" aria-labelledby={key + "-heading"}>
                    <div className="faq-2-right-accordion-body">
                      <p className="faq-2-p mb-0">{data.right.questions[key].answer} </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="container mb-md-2 mb-lg-4">
        <hr />
      </div>
    </section>
  );
};
