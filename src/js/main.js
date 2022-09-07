import IMask from "imask";
import { projects, sliderNews, collectedSlider } from "./components/slider";

// import toggleAccordion from "./components/accordion";

// categoriesSlisder();

// toggleAccordion(".accordion__control", ".accordion__content", ".accordion");

import fixedHeader from "./components/fixedHeader";
import showMenu from "./components/showMenu";
import modals from "./components/modals";
import tabs from "./components/tabs";

tabs(
  ".donation-block__top",
  ".donation-block__btn",
  ".donation-block__content",
  "active"
);
tabs(
  ".tabs-projects__nav",
  ".tabs-projects__nav-btn",
  ".tabs-projects__panel",
  "active"
);
fixedHeader();
function maskInput() {
  const elements = document.querySelectorAll('input[type="tel"]');
  elements.forEach((el) => {
    const maskOptions = {
      mask: "+{7} (000) 000-00-00",
    };
    IMask(el, maskOptions);
  });
}
maskInput();

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
projects();
sliderNews();
collectedSlider();
showMenu();
modals();

function sum() {
  const sumNow = document.querySelector(".sum-block__left span");
  const sumTarget = document.querySelector(".sum-block__right span");

  console.log(sumNow.textContent);
}

sum();
