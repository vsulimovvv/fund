import { Fancybox } from "@fancyapps/ui";
import { projects, sliderNews, collectedSlider } from "./components/slider";
import fixedHeader from "./components/fixedHeader";
import showMenu from "./components/showMenu";
import modals from "./components/modals";
import tabs from "./components/tabs";
import loadForm from "./components/formUpload";
import maskInput from "./components/maskInput";
import customSelect from "./components/customSelect";

fixedHeader();
maskInput();
customSelect();
loadForm();
projects();
sliderNews();
collectedSlider();
showMenu();
modals();
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
