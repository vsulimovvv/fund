import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

function projects() {
  const slider = document.querySelectorAll(".projects-box__slider");
  slider.forEach((el) => {
    const swiper3 = new Swiper(el, {
      slidesPerView: 1,
      navigation: {
        nextEl: el.querySelector(".swiper-button-next"),
        prevEl: el.querySelector(".swiper-button-prev"),
      },
    });
  });
}

export { projects };
