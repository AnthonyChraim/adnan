import React, { useContext, useRef, useState } from "react";
import LanguageContext from "../../../../context/LanguageContext";
import emailjs from "@emailjs/browser";
import "./contact-2-style.css";

var jsonDataEn = require("./data/contact-data.en.json");
var jsonDataFr = require("./data/contact-data.fr.json");

export const Contact2 = (props) => {
  const language = useContext(LanguageContext);

  const data = language.language === "en" ? jsonDataEn.Contact2 : jsonDataFr.Contact2;

  const honeypot = "none";
  const form = useRef();

  function removeValidationClass() {
    // Code to remove the "was-validated" class
    const formElement = document.getElementById("modernForm");
    formElement.classList.remove("was-validated");
  }

  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    if (e.target.elements.password_email.value !== "") {
      return;
    }
    // put in environment variables
    emailjs.sendForm(data.emailjs.serviceId, data.emailjs.templateId, form.current, data.emailjs.publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    showResult(true);
    removeValidationClass();
  };
  // hide result
  setTimeout(() => {
    showResult(false);
  }, 6000);

  const Result = () => {
    return <h5 className="success-form-modern">{data.form.success}</h5>;
  };

  return (
    <section className="contact-2-section" id="contact-adnan-al-deek">
      <div className="contact-2-container" data-aos="fade-up" data-aos-delay="100">
        <div className="contact-2-row-header">
          <h2 className="contact-2-title">{data.header}</h2>
          <p className="contact-2-description">
            {data.description}
            <br />
            {data.description2}
          </p>
        </div>
        <div className="contact-2-row-body">
          <div className="contact-2-width ">
            <form id="modernForm" ref={form} onSubmit={sendEmail} role="form" className="contact-2-row-form needs-validation" noValidate>
              <div className="col-sm-6 mb-4">
                <label htmlFor="first_name" className="form-label required">
                  {data.form.firstName.title}
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="form-control"
                  required
                  placeholder={data.form.firstName.placeholder}
                  pattern="^[\p{L}'][ \p{L}'-]*[\p{L}]$"
                  onInvalid={(e) => e.target.setCustomValidity(data.form.invalid)}
                  onInput={(e) => e.target.setCustomValidity("")}
                  autoComplete="given-name"
                />
                <div className="invalid-feedback">{data.form.firstName.invalidFeedback}</div>
              </div>
              <div className="col-sm-6 mb-4">
                <label htmlFor="last_name" className="form-label required">
                  {data.form.lastName.title}
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="form-control"
                  required
                  placeholder={data.form.lastName.placeholder}
                  pattern="^[\p{L}'][ \p{L}'-]*[\p{L}]$"
                  onInvalid={(e) => e.target.setCustomValidity(data.form.invalid)}
                  onInput={(e) => e.target.setCustomValidity("")}
                  autoComplete="family-name"
                />
                <div className="invalid-feedback">{data.form.lastName.invalidFeedback}</div>
              </div>
              <div className="col-sm-6 mb-4">
                <label htmlFor="email" className="form-label required">
                  {data.form.email.title}
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="user_email"
                  id="email"
                  required
                  placeholder={data.form.email.placeholder}
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  onInvalid={(e) => e.target.setCustomValidity(data.form.invalid)}
                  onInput={(e) => e.target.setCustomValidity("")}
                  autoComplete="email"
                />
                <div className="invalid-feedback">{data.form.email.invalidFeedback}</div>
              </div>
              <div className="col-sm-6 mb-4">
                <label htmlFor="phone" className="form-label">
                  {data.form.phone.title}
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  name="phone"
                  pattern="^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
                  placeholder={data.form.phone.placeholder}
                  onInvalid={(e) => e.target.setCustomValidity(data.form.invalidEmaillid)}
                  onInput={(e) => e.target.setCustomValidity("")}
                  autoComplete="tel"
                />
                <div className="invalid-feedback">{data.form.phone.invalidFeedback}</div>
              </div>

              <div className="col-12 mb-4">
                <label htmlFor="message" className="form-label required">
                  {data.form.message.title}
                </label>
                <textarea name="message" id="message" className="form-control" rows="4" required placeholder={data.form.message.placeholder}></textarea>
                <div className="invalid-feedback">{data.form.message.invalidFeedback}</div>
              </div>
              {/* h o n e y p o t */}
              <div className="email-name-message">
                {/* might need to render display none dynamically or to css file */}
                <input type="text" name="password_email" style={{ display: `${honeypot}` }} tabIndex="-1" autoComplete="new-password" />
              </div>
              <div className="contact-2-btn-position">
                <button type="submit" className="contact-2-btn">
                  {data.btn}
                </button>
              </div>
            </form>
            <div className="my-3">
              <div>{result ? <Result /> : null}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-absolute end-0 bottom-0 text-primary">
        <svg width="469" height="343" viewBox="0 0 469 343" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.08"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M273.631 680.872C442.436 768.853 639.315 708.216 717.593 558.212C795.871 408.208 732.941 212.157 564.137 124.176C395.333 36.195 198.453 96.8326 120.175 246.836C41.8972 396.84 104.827 592.891 273.631 680.872ZM236.335 752.344C440.804 858.914 688.289 788.686 789.109 595.486C889.928 402.286 805.903 159.274 601.433 52.7043C396.964 -53.8654 149.479 16.3623 48.6595 209.562C-52.1598 402.762 31.8652 645.774 236.335 752.344Z"
            fill="var(--main-accent-color)"
          />
          <path
            opacity="0.08"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M298.401 633.404C434.98 704.59 598.31 656.971 664.332 530.451C730.355 403.932 675.946 242.827 539.367 171.642C402.787 100.457 239.458 148.076 173.435 274.595C107.413 401.114 161.822 562.219 298.401 633.404ZM288.455 652.464C434.545 728.606 611.369 678.429 683.403 540.391C755.437 402.353 695.402 228.725 549.312 152.583C403.222 76.4404 226.398 126.617 154.365 264.655C82.331 402.693 142.365 576.321 288.455 652.464Z"
            fill="var(--main-accent-color)"
          />
        </svg>
      </div>
    </section>
  );
};
