import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

function categoriesSlisder() {
  const swiper3 = new Swiper(".categories__slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      991: {
        spaceBetween: 48,
      },
    },
  });
}

function productSlider() {
  const swiper3 = new Swiper(".product__slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function someBusiness() {
  const swiper3 = new Swiper(".some-business__slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      991: {
        spaceBetween: 40,
      },
    },
  });
}

export { categoriesSlisder, productSlider, someBusiness };
