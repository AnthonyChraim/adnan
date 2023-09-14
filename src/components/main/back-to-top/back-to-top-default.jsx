import React from "react";
import "./back-to-top-style.css";

export const BackToTopDefault = (props) => {
  return (
    <a href="#" id="back-to-top" className="back-to-top d-flex align-items-center justify-content-center">
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};
