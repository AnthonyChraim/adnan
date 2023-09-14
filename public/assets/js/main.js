/**
 * Template Name: OPP - Main - v1.0.0
 * Author: OPP
 * License: N/A
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#navbar-icons-header");
    let offset = header.offsetHeight;

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "auto",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#navbar-icons-header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
        //selectHeader.style.marginTop = "0px";
      } else {
        selectHeader.classList.remove("header-scrolled");
        //selectHeader.style.marginTop = "40px";
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Menu isotope and filter
   */
  window.addEventListener("load", () => {
    let menuContainer = select(".menu-container");
    if (menuContainer) {
      let menuIsotope = new Isotope(menuContainer, {
        itemSelector: ".menu-item",
        layoutMode: "fitRows",
      });

      let menuFilters = select("#menu-flters li", true);

      on(
        "click",
        "#menu-flters li",
        function (e) {
          e.preventDefault();
          menuFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          menuIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          menuIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators");
  let heroCarouselItems = select("#heroCarousel .carousel-item", true);

  heroCarouselItems.forEach((item, index) => {
    index === 0
      ? (heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>")
      : (heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>");
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Property carousel
   */
  new Swiper("#property-carousel", {
    // speed of the transition (higher = slower)
    speed: 600,
    loop: true,
    autoplay: {
      // delay between transitions (ms)
      delay: 10000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".propery-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Property carousel
   */
  new Swiper("#property-carousel2", {
    // speed of the transition (higher = slower)
    speed: 600,
    loop: true,
    autoplay: {
      // delay between transitions (ms)
      delay: 10000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".propery-carousel-pagination2",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Property Single carousel
   */
  new Swiper("#property-single-carousel", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".property-single-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Property carousel secondary
   */
  new Swiper("#property-secondary-carousel", {
    // speed of the transition (higher = slower)
    speed: 600,
    loop: true,
    autoplay: {
      // delay between transitions (ms)
      delay: 1000000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".propery-secondary-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * default property
   */
  new Swiper(".swiper-property-default", {
    speed: 600,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    },
  });

  /**
   * Social-Proof-1 Slider
   */
  new Swiper(".social-proof-1-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120,
      },
    },
  });

  /**
   * Stats-1 slider
   */
  new Swiper(".stats-1-slider", {
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },

      800: {
        slidesPerView: 3,
      },

      1200: {
        slidesPerView: 4,
      },
    },
  });

  // let navbar = document.querySelector(".navbar-sticky");

  // if (navbar == null) return;

  // let navbarClass = navbar.classList,
  //   navbarH = navbar.offsetHeight,
  //   scrollOffset = 100;

  // if (navbarClass.contains("position-absolute")) {
  //   window.addEventListener("scroll", (e) => {
  //     if (e.currentTarget.pageYOffset > scrollOffset) {
  //       navbar.classList.add("navbar-stuck");
  //     } else {
  //       navbar.classList.remove("navbar-stuck");
  //     }
  //   });
  // } else {
  //   window.addEventListener("scroll", (e) => {
  //     if (e.currentTarget.pageYOffset > scrollOffset) {
  //       document.body.style.paddingTop = navbarH + "px";
  //       navbar.classList.add("navbar-stuck");
  //     } else {
  //       document.body.style.paddingTop = "";
  //       navbar.classList.remove("navbar-stuck");
  //     }
  //   });
  // }

  /**
   * Testimonials-2 slider
   */
  try {
    var swiperTestimonials2 = new Swiper(".testimonials-2-slider", {
      speed: 600,
      loop: false,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });

    var nextButton1 = document.getElementById("testimonials-next");
    var prevButton1 = document.getElementById("testimonials-prev");

    // Add event listeners to the buttons

    nextButton1.addEventListener("click", function () {
      swiperTestimonials2.slideNext();
    });

    prevButton1.addEventListener("click", function () {
      swiperTestimonials2.slidePrev();
    });
  } catch (err) {}

  /**
   * Testimonials-3 slider
   */
  try {
    var swiperTestimonials3 = new Swiper(".testimonials-3-testimonials-slider", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      spaceBetween: 8,
      slidesPerView: 1,
      breakpoints: {
        500: {
          slidesPerView: 2,
        },

        1000: {
          slidesPerView: 2,
        },

        1200: {
          slidesPerView: 2,
        },
      },
    });

    var nextButton2 = document.getElementById("next-testimonial");
    var prevButton2 = document.getElementById("prev-testimonial");

    // Add event listeners to the buttons
    prevButton2.addEventListener("click", function () {
      swiperTestimonials3.slidePrev();
    });

    nextButton2.addEventListener("click", function () {
      swiperTestimonials3.slideNext();
    });
  } catch (err) {}

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Testimonials-1 slider
   */
  new Swiper(".testimonials-1-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Initiate gallery lightbox
   */
  const galleryLightbox = GLightbox({
    selector: ".gallery-lightbox",
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();

/**
 * Initiate Pure Counter
 */
new PureCounter();

// Social-Proof-2
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
}
function ownKeys(t, e) {
  var r,
    a = Object.keys(t);
  return (
    Object.getOwnPropertySymbols &&
      ((r = Object.getOwnPropertySymbols(t)),
      e &&
        (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
      a.push.apply(a, r)),
    a
  );
}
function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? ownKeys(Object(r), !0).forEach(function (e) {
          _defineProperty(t, e, r[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : ownKeys(Object(r)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
  }
  return t;
}
function _defineProperty(e, t, r) {
  return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function _toPropertyKey(e) {
  e = _toPrimitive(e, "string");
  return "symbol" === _typeof(e) ? e : String(e);
}
function _toPrimitive(e, t) {
  if ("object" !== _typeof(e) || null === e) return e;
  var r = e[Symbol.toPrimitive];
  if (void 0 === r) return ("string" === t ? String : Number)(e);
  t = r.call(e, t || "default");
  if ("object" !== _typeof(t)) return t;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}

!(function () {
  "use strict";
  var t, e, r, a, n, o;
  null !== (e = document.querySelector('[data-bs-toggle="mode"]')) &&
    ((t = e.querySelector(".form-check-input")),
    "dark" === mode ? (root.classList.add("dark-mode"), (t.checked = !0)) : (root.classList.remove("dark-mode"), (t.checked = !1)),
    e.addEventListener("click", function (e) {
      t.checked ? (root.classList.add("dark-mode"), window.localStorage.setItem("mode", "dark")) : (root.classList.remove("dark-mode"), window.localStorage.setItem("mode", "light"));
    })),
    null != (a = document.querySelector(".navbar-sticky")) &&
      ((e = a.classList),
      (r = a.offsetHeight),
      e.contains("position-absolute")
        ? window.addEventListener("scroll", function (e) {
            500 < e.currentTarget.pageYOffset ? a.classList.add("navbar-stuck") : a.classList.remove("navbar-stuck");
          })
        : window.addEventListener("scroll", function (e) {
            500 < e.currentTarget.pageYOffset
              ? ((document.body.style.paddingTop = r + "px"), a.classList.add("navbar-stuck"))
              : ((document.body.style.paddingTop = ""), a.classList.remove("navbar-stuck"));
          })),
    new SmoothScroll("[data-scroll]", {
      speed: 800,
      speedAsDuration: !0,
      offset: function (e, t) {
        return t.dataset.scrollOffset || 40;
      },
      header: "[data-scroll-header]",
      updateURL: !1,
    }),
    null != (o = document.querySelector(".btn-scroll-top")) &&
      ((n = parseInt(600, 10)),
      window.addEventListener("scroll", function (e) {
        e.currentTarget.pageYOffset > n ? o.classList.add("show") : o.classList.remove("show");
      })),
    (function () {
      for (var e = document.querySelectorAll(".password-toggle"), r = 0; r < e.length; r++)
        !(function () {
          var t = e[r].querySelector(".form-control");
          e[r].querySelector(".password-toggle-btn").addEventListener(
            "click",
            function (e) {
              "checkbox" === e.target.type && (e.target.checked ? (t.type = "text") : (t.type = "password"));
            },
            !1
          );
        })();
    })(),
    null !== document.querySelector(".rellax") && new Rellax(".rellax", { horizontal: !0 }),
    (function () {
      for (var e = document.querySelectorAll(".parallax"), t = 0; t < e.length; t++) new Parallax(e[t]);
    })(),
    (function (e, t, r) {
      for (var a = 0; a < e.length; a++) t.call(r, a, e[a]);
    })(document.querySelectorAll(".swiper"), function (e, t) {
      var r;
      r = null != t.dataset.swiperOptions ? JSON.parse(t.dataset.swiperOptions) : {};

      if (r.pager) {
        var a = {
          pagination: {
            el: ".pagination .list-unstyled",
            clickable: !0,
            bulletActiveClass: "active",
            bulletClass: "page-item",
            renderBullet: function (e, t) {
              return '<li class="' + t + '"><a href="#" class="page-link btn-icon btn-sm">' + (e + 1) + "</a></li>";
            },
          },
        };

        var a = _objectSpread(_objectSpread({}, r), a);
        var a = new Swiper(t, a);
        if (r.tabs) {
          a.on("activeIndexChange", function (e) {
            var t = document.querySelector(e.slides[e.activeIndex].dataset.swiperTab);
            document.querySelector(e.slides[e.previousIndex].dataset.swiperTab).classList.remove("active");
            t.classList.add("active");
          });
        }
      }
    });
  (function () {
    var e = document.querySelectorAll(".gallery");
    if (e.length)
      for (var t = 0; t < e.length; t++) {
        var r = !!e[t].dataset.thumbnails,
          a = !!e[t].dataset.video,
          n = [lgZoom, lgFullscreen],
          a = a ? [lgVideo] : [],
          r = r ? [lgThumbnail] : [],
          r = [].concat(n, a, r);
        lightGallery(e[t], {
          selector: ".gallery-item",
          plugins: r,
          licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
          download: !1,
          autoplayVideoOnSlide: !0,
          zoomFromOrigin: !1,
          youtubePlayerParams: { modestbranding: 1, showinfo: 0, rel: 0 },
          vimeoPlayerParams: { byline: 0, portrait: 0, color: "6366f1" },
        });
      }
  })(),
    (function () {
      for (var n = document.querySelectorAll(".range-slider"), o = 0; o < n.length; o++)
        !(function () {
          var e = n[o].querySelector(".range-slider-ui"),
            r = n[o].querySelector(".range-slider-value-min"),
            a = n[o].querySelector(".range-slider-value-max"),
            t = {
              dataStartMin: parseInt(n[o].dataset.startMin, 10),
              dataStartMax: parseInt(n[o].dataset.startMax, 10),
              dataMin: parseInt(n[o].dataset.min, 10),
              dataMax: parseInt(n[o].dataset.max, 10),
              dataStep: parseInt(n[o].dataset.step, 10),
              dataPips: n[o].dataset.pips,
            };
          noUiSlider.create(e, {
            start: t.dataStartMax ? [t.dataStartMin, t.dataStartMax] : [t.dataStartMin],
            connect: !!t.dataStartMax || "lower",
            step: t.dataStep,
            pips: !!t.dataPips && { mode: "count", values: 5 },
            tooltips: !0,
            range: { min: t.dataMin, max: t.dataMax },
            format: {
              to: function (e) {
                return "$" + parseInt(e, 10);
              },
              from: function (e) {
                return Number(e);
              },
            },
          }),
            e.noUiSlider.on("update", function (e, t) {
              e = (e = e[t]).replace(/\D/g, "");
              t ? a && (a.value = Math.round(e)) : r && (r.value = Math.round(e));
            }),
            r &&
              r.addEventListener("change", function () {
                e.noUiSlider.set([this.value, null]);
              }),
            a &&
              a.addEventListener("change", function () {
                e.noUiSlider.set([null, this.value]);
              });
        })();
    })(),
    window.addEventListener(
      "load",
      function () {
        var e = document.getElementsByClassName("needs-validation");
        Array.prototype.filter.call(e, function (t) {
          t.addEventListener(
            "submit",
            function (e) {
              !1 === t.checkValidity() && (e.preventDefault(), e.stopPropagation()), t.classList.add("was-validated");
            },
            !1
          );
        });
      },
      !1
    ),
    (function () {
      var a = document.querySelectorAll("[data-format]");
      if (0 !== a.length)
        for (var n = 0; n < a.length; n++)
          !(function () {
            var e,
              t = a[n],
              r = t.parentNode.querySelector(".credit-card-icon");
            null != t.dataset.format && (e = JSON.parse(t.dataset.format)),
              r
                ? new Cleave(
                    t,
                    _objectSpread(
                      _objectSpread({}, e),
                      {},
                      {
                        onCreditCardTypeChanged: function (e) {
                          r.className = "credit-card-icon " + e;
                        },
                      }
                    )
                  )
                : new Cleave(t, e);
          })();
    })(),
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (e) {
      return new bootstrap.Tooltip(e, { trigger: "hover" });
    }),
    [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function (e) {
      return new bootstrap.Popover(e);
    }),
    [].slice.call(document.querySelectorAll(".toast")).map(function (e) {
      return new bootstrap.Toast(e);
    }),
    (function () {
      var e = document.querySelectorAll('[data-bs-toggle="video"]');
      if (e.length)
        for (var t = 0; t < e.length; t++)
          lightGallery(e[t], {
            selector: "this",
            plugins: [lgVideo],
            licenseKey: "D4194FDD-48924833-A54AECA3-D6F8E646",
            download: !1,
            youtubePlayerParams: { modestbranding: 1, showinfo: 0, rel: 0 },
            vimeoPlayerParams: { byline: 0, portrait: 0, color: "6366f1" },
          });
    })(),
    (function () {
      var e = document.querySelectorAll(".price-switch-wrapper");
      if (!(e.length <= 0))
        for (var t = 0; t < e.length; t++)
          e[t].querySelector('[data-bs-toggle="price"]').addEventListener("change", function (e) {
            for (
              var t = e.currentTarget.querySelector('input[type="checkbox"]'),
                r = e.currentTarget.closest(".price-switch-wrapper").querySelectorAll("[data-monthly-price]"),
                a = e.currentTarget.closest(".price-switch-wrapper").querySelectorAll("[data-annual-price]"),
                n = 0;
              n < r.length;
              n++
            )
              1 == t.checked ? r[n].classList.add("d-none") : r[n].classList.remove("d-none");
            for (var o = 0; o < r.length; o++) 1 == t.checked ? a[o].classList.remove("d-none") : a[o].classList.add("d-none");
          });
    })(),
    (function () {
      var n,
        r = document.querySelectorAll(".masonry-grid");
      if (null !== r)
        for (var o = 0; o < r.length; o++) {
          var e = (function () {
            (n = new Shuffle(r[o], { itemSelector: ".masonry-grid-item", sizer: ".masonry-grid-item" })),
              imagesLoaded(r[o]).on("progress", function () {
                n.layout();
              });
            var a = r[o].closest(".masonry-filterable");
            if (null === a) return { v: void 0 };
            for (var e = a.querySelectorAll(".masonry-filters [data-group]"), t = 0; t < e.length; t++)
              e[t].addEventListener("click", function (e) {
                var t = a.querySelector(".masonry-filters .active"),
                  r = this.dataset.group;
                null !== t && t.classList.remove("active"), this.classList.add("active"), n.filter(r), e.preventDefault();
              });
          })();
          if ("object" === _typeof(e)) return e.v;
        }
    })(),
    (function () {
      var e = document.querySelectorAll(".subscription-form");
      if (null !== e) {
        for (var l = 0; l < e.length; l++)
          !(function () {
            var t = e[l].querySelector('button[type="submit"]'),
              r = t.innerHTML,
              a = e[l].querySelector(".form-control"),
              n = e[l].querySelector(".subscription-form-antispam"),
              o = e[l].querySelector(".subscription-status");
            e[l].addEventListener("submit", function (e) {
              e && e.preventDefault(), "" === n.value && i(this, t, a, r, o);
            });
          })();
        var i = function (e, t, r, a, n) {
          t.innerHTML = "Sending...";
          var o = e.action.replace("/post?", "/post-json?"),
            e = "&" + r.name + "=" + encodeURIComponent(r.value),
            l = document.createElement("script");
          (l.src = o + "&c=callback" + e), document.body.appendChild(l);
          var i = "callback";
          window[i] = function (e) {
            delete window[i],
              document.body.removeChild(l),
              (t.innerHTML = a),
              "success" == e.result
                ? (r.classList.remove("is-invalid"),
                  r.classList.add("is-valid"),
                  n.classList.remove("status-error"),
                  n.classList.add("status-success"),
                  (n.innerHTML = e.msg),
                  setTimeout(function () {
                    r.classList.remove("is-valid"), (n.innerHTML = ""), n.classList.remove("status-success");
                  }, 6e3))
                : (r.classList.remove("is-valid"),
                  r.classList.add("is-invalid"),
                  n.classList.remove("status-success"),
                  n.classList.add("status-error"),
                  (n.innerHTML = e.msg.substring(4)),
                  setTimeout(function () {
                    r.classList.remove("is-invalid"), (n.innerHTML = ""), n.classList.remove("status-error");
                  }, 6e3));
          };
        };
      }
    })(),
    document.querySelectorAll(".animation-on-hover").forEach(function (e) {
      e.addEventListener("mouseover", function () {
        e.querySelectorAll("lottie-player").forEach(function (e) {
          e.setDirection(1), e.play();
        });
      }),
        e.addEventListener("mouseleave", function () {
          e.querySelectorAll("lottie-player").forEach(function (e) {
            e.setDirection(-1), e.play();
          });
        });
    }),
    (function () {
      var v = document.querySelectorAll(".audio-player");
      if (0 !== v.length)
        for (
          var e = function () {
              var t = v[y],
                r = t.querySelector("audio"),
                e = t.querySelector(".ap-play-button"),
                a = t.querySelector(".ap-seek-slider"),
                n = t.querySelector(".ap-volume-slider"),
                o = t.querySelector(".ap-duration"),
                l = t.querySelector(".ap-current-time"),
                i = "play",
                s = null;
              e.addEventListener("click", function (e) {
                i =
                  "play" === i
                    ? (e.currentTarget.classList.add("ap-pause"), r.play(), requestAnimationFrame(m), "pause")
                    : (e.currentTarget.classList.remove("ap-pause"), r.pause(), cancelAnimationFrame(s), "play");
              });
              function c(e) {
                e === a ? t.style.setProperty("--seek-before-width", (e.value / e.max) * 100 + "%") : t.style.setProperty("--volume-before-width", (e.value / e.max) * 100 + "%");
              }
              a.addEventListener("input", function (e) {
                c(e.target);
              }),
                n.addEventListener("input", function (e) {
                  c(e.target);
                });
              function u(e) {
                var t = Math.floor(e / 60),
                  e = ((e = Math.floor(e % 60)) < 10 ? "0" : "").concat(e);
                return "".concat(t, ":").concat(e);
              }
              function d() {
                o.textContent = u(r.duration);
              }
              function p() {
                a.max = Math.floor(r.duration);
              }
              function f() {
                var e = Math.floor(r.buffered.end(r.buffered.length - 1));
                t.style.setProperty("--buffered-width", "".concat((e / a.max) * 100, "%"));
              }
              var m = function e() {
                (a.value = Math.floor(r.currentTime)),
                  (l.textContent = u(a.value)),
                  t.style.setProperty("--seek-before-width", "".concat((a.value / a.max) * 100, "%")),
                  (s = requestAnimationFrame(e));
              };
              0 < r.readyState
                ? (d(), p(), f())
                : r.addEventListener("loadedmetadata", function () {
                    d(), p(), f();
                  }),
                r.addEventListener("progress", f),
                a.addEventListener("input", function () {
                  (l.textContent = u(a.value)), r.paused || cancelAnimationFrame(s);
                }),
                a.addEventListener("change", function () {
                  (r.currentTime = a.value), r.paused || requestAnimationFrame(m);
                }),
                n.addEventListener("input", function (e) {
                  e = e.target.value;
                  r.volume = e / 100;
                });
            },
            y = 0;
          y < v.length;
          y++
        )
          e();
    })();
})();
