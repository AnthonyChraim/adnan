import React, { useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";
import "./testimonials-3-style.css";

var jsonDataEn = require("./data/testimonials-data.en.json");
var jsonDataFr = require("./data/testimonials-data.fr.json");

export const Testimonials3 = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.Testimonials3 : jsonDataFr.Testimonials3;

  return (
    <section className="testimonials-3-testimonials-container container" id="testimonials-3">
      <div className="testimonials-3-testimonials-div1 row" data-aos="zoom-in">
        <div className="testimonials-3-testimonials-div2">
          <h2 className="testimonials-3-testimonials-h2">
            {Object.keys(data.title).map((key) => (
              <div className="testimonials-3-h2-mobile" key={key}>
                {data.title[key]} <br className="testimonials-3-testimonials-br1" />
              </div>
            ))}
          </h2>

          <div className="testimonials-3-testimonials-div3">
            <button
              type="button"
              role="button"
              aria-label="previous"
              aria-labelledby="labeldiv"
              id="prev-testimonial"
              className="testimonials-3-testimonials-btn testimonials-3-testimonials-btn-prev btn btn-prev btn-icon btn-sm"
            >
              <i className="testimonials-arrows bx bx-chevron-left"></i>
            </button>
            <button
              type="button"
              role="button"
              aria-label="next"
              aria-labelledby="labeldiv"
              id="next-testimonial"
              className="testimonials-3-testimonials-btn testimonials-3-testimonials-btn-next btn btn-next btn-icon btn-sm"
            >
              <i className="testimonials-arrows bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="testimonials-3-testimonials-div4">
          <div className="testimonials-3-testimonials-slider swiper">
            <div className="swiper-wrapper">
              {Object.keys(data.cards).map((key) => (
                <div className="swiper-slide" key={key}>
                  <figure className="testimonials-3-testimonials-figure1">
                    <div className="testimonials-3-testimonials-div5">
                      <span className="testimonials-3-testimonials-span1 btn btn-icon btn-primary shadow-primary">
                        <i className={data.cards[key].icon}></i>
                      </span>
                      <blockquote className="testimonials-3-testimonials-blockquote1">
                        <p className="testimonials-3-testimonials-p1">{data.cards[key].text}</p>
                      </blockquote>
                    </div>
                    <figcaption className="testimonials-3-testimonials-figcaption1">
                      <img src={data.cards[key].img} width="48" className="rounded-circle" alt="adnan al-deek client review avatar" />
                      <div className="testimonials-3-testimonials-div6">
                        <h3 className="testimonials-3-testimonials-h6">{data.cards[key].name}</h3>
                        <span className="testimonials-3-testimonials-span2">{data.cards[key].position}</span>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
