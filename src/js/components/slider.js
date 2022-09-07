import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

function projects() {
  const slider = document.querySelectorAll(".projects-box__slider");
  slider.forEach((el) => {
    const swiper = new Swiper(el, {
      slidesPerView: 1,
      navigation: {
        nextEl: el.querySelector(".swiper-button-next"),
        prevEl: el.querySelector(".swiper-button-prev"),
      },
    });
  });
}

function collectedSlider() {
  const slider = document.querySelectorAll(".collected__slider");
  slider.forEach((el) => {
    const swiper = new Swiper(el, {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
}

function sliderNews() {
  const slider = document.querySelectorAll(".news-slider__slider");
  slider.forEach((el) => {
    const swiper = new Swiper(el, {
      slidesPerView: "auto",
      spaceBetween: 15,

      breakpoints: {
        991: {
          spaceBetween: 40,
        },
      },
    });
  });
}

export { projects, sliderNews, collectedSlider };
