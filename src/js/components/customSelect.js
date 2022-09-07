import Choices from "choices.js";

export default function customSelect() {
  const element = document.querySelectorAll("select");
  element.forEach((el) => {
    const choices = new Choices(el, {
      itemSelectText: "",
      searchEnabled: false,
    });
  });
}
