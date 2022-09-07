// import IMask from "imask";
// import {
//   categoriesSlisder,
//   productSlider,
//   someBusiness,
// } from "./components/slider";
// import fixedHeader from "./components/fixedHeader";
// import showMenu from "./components/showMenu";
// import toggleAccordion from "./components/accordion";
// import { handlesSlider, handlesSliderProfit } from "./components/rangeSlider";
// import modals from "./components/modals";
import tabs from "./components/tabs";

// handlesSlider();
// handlesSliderProfit();
// showMenu();
// categoriesSlisder();
// fixedHeader();
// toggleAccordion(".accordion__control", ".accordion__content", ".accordion");
// modals();
// showFilters();
// productSlider();
// someBusiness();
tabs(
  ".donation-block__top",
  ".donation-block__btn",
  ".donation-block__content",
  "active"
);

// function maskInput() {
//   const elements = document.querySelectorAll('input[type="tel"]');
//   elements.forEach((el) => {
//     const maskOptions = {
//       mask: "+{7} (000) 000-00-00",
//     };
//     IMask(el, maskOptions);
//   });
// }
// maskInput();

import Choices from "choices.js";
const element = document.querySelectorAll("select");
element.forEach((el) => {
  const choices = new Choices(el, {
    itemSelectText: "",
    searchEnabled: false,
  });
});

import { Fancybox } from "@fancyapps/ui";
import loadForm from "./components/formUpload";

loadForm();
