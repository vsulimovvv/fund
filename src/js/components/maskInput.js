import IMask from "imask";

export default function maskInput() {
  const elements = document.querySelectorAll('input[type="tel"]');
  elements.forEach((el) => {
    const maskOptions = {
      mask: "+{7} (000) 000-00-00",
    };
    IMask(el, maskOptions);
  });
}
