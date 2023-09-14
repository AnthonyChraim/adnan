import React, { useContext } from "react";
import LanguageContext from "../../../../context/LanguageContext";
import "./hero-4-style.css";

var jsonDataEn = require("./data/hero-data.en.json");
var jsonDataFr = require("./data/hero-data.fr.json");

export const Hero4 = (props) => {
  const language = useContext(LanguageContext);
  const data = language.language === "en" ? jsonDataEn.Hero4 : jsonDataFr.Hero4;

  return (
    <section class="hero-4-hero-container" id="hero-4">
      <div class="hero-4-hero-img" style={{ background: `url("${data.img}") no-repeat`, backgroundSize: "contain" }}>
        <div class="hero-4-hero-div1 container">
          <div class="hero-4-hero-div1 row">
            <div class="hero-4-hero-div2">
              <div class="hero-4-hero-div3 card">
                <span class="hero-4-hero-span1"></span>
                <div class="hero-4-hero-div4">
                  <p class="hero-4-hero-p1">{data.title}</p>
                  <h1 class="hero-4-hero-h1">{data.header}</h1>
                  <p class="hero-4-hero-p2">{data.description}</p>
                  <div class="hero-4-hero-div5">
                    <a href={data.btn1.link} class="btn btn-primary shadow-primary btn-lg hero-4-hero-btn1">
                      {data.btn1.text}
                    </a>
                    <a href={data.btn2.link} class="btn btn-lg hero-4-hero-btn2">
                      {data.btn2.text}
                      <i class="bx bx-right-arrow-alt fs-4 lh-1 ms-2 me-n1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="hero-4-hero-div6">
              <ul class="hero-4-hero-ul1">
                {Object.keys(data.info).map((key) => (
                  <li class="hero-4-hero-li1">
                    <i class={`fs-xl text-primary me-2 ${data.info[key].icon}`}></i>
                    <a href={data.info[key].link} class="nav-link fw-normal p-0">
                      {data.info[key].text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
