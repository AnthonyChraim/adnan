//Default
import React from "react";
import { Routes, Route } from "react-router-dom";
import LanguageProvider from "./context/LanguageProvided";

//Error
import { PageNotFoundRealtor } from "./components/error/error-realtor/page-not-found-realtor";

//Main
import { NavigationBar2 } from "./components/main/navbar/navigation-bar-2/navigation-bar-2";
import { Hero2 } from "./components/main/hero/hero-2/hero-2";
import { CopyrightWithLinks } from "./components/main/footer/copyright-with-links/copyright-with-links";
import { BackToTopDefault } from "./components/main/back-to-top/back-to-top-default";

//Additional
import { About1 } from "./components/additional/about/about-1/about-1";
import { Contact2 } from "./components/additional/contact/contact-2/contact-2";
import { CTA2 } from "./components/additional/cta/cta-2/cta-2";
import { FAQ2 } from "./components/additional/faq/faq-2/faq-2";
import { PropertyDefaultSold } from "./components/additional/properties/properties-view/properties-view-1-sold/properties-default-sold";
import { Services2 } from "./components/additional/services/services-2/services-2";
import { Stats1 } from "./components/additional/stats/stats-1/stats-1";
import { Stats3 } from "./components/additional/stats/stats-3/stats-3";
import { Testimonials3 } from "./components/additional/testimonials/testimonials-3/testimonials-3";
import { Steps3 } from "./components/additional/steps/steps-3/steps-3";

const App = () => {
  return (
    <>
      <LanguageProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavigationBar2 />
                <Hero2 />
                <PropertyDefaultSold />
                <Stats3 />
                <Stats1 />
                <About1 />
                <Steps3 />
                <CTA2 />
                <Services2 />
                <Testimonials3 />
                <FAQ2 />
                <Contact2 />
              </>
            }
          />
          <Route path="/*" element={<PageNotFoundRealtor></PageNotFoundRealtor>}></Route>
        </Routes>
        <CopyrightWithLinks />
        <BackToTopDefault />
      </LanguageProvider>
    </>
  );
};

export default App;
