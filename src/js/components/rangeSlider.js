// * ===== Slider Handle
import noUiSlider from "noUiSlider";
import wNumb from "wNumb";

function handlesSlider() {
  let handlesSlider = document.querySelector("#slider-handles");
  let minStep = document.querySelector(".range-slider__min");
  let maxStep = document.querySelector(".range-slider__max");
  if (handlesSlider) {
    noUiSlider.create(handlesSlider, {
      start: [10000, 100000000],
      connect: true,
      padding: [10, 10],
      range: {
        min: [0],
        max: [100000000],
      },
      format: wNumb({
        decimals: 0,
        thousand: " ",
        suffix: " ",
      }),
    });

    handlesSlider.noUiSlider.on("update", function (values, handle) {
      // if (handle) {
      //   maxStep.innerHTML = values[handle];
      // } else {
      //   minStep.innerHTML = values[handle];
      // }
    });
  }
}
// handlesSlider();
function handlesSliderProfit() {
  let handlesSlider = document.querySelector("#slider-profit");
  let minStep = document.querySelector(".range-slider__min");
  let maxStep = document.querySelector(".range-slider__max");
  if (handlesSlider) {
    noUiSlider.create(handlesSlider, {
      start: [10000, 100000000],
      connect: true,
      padding: [10, 10],
      range: {
        min: [0],
        max: [100000000],
      },
      format: wNumb({
        decimals: 0,
        thousand: " ",
        suffix: " ",
      }),
    });

    handlesSlider.noUiSlider.on("update", function (values, handle) {
      // if (handle) {
      //   maxStep.innerHTML = values[handle];
      // } else {
      //   minStep.innerHTML = values[handle];
      // }
    });
  }
}

export { handlesSlider, handlesSliderProfit };
// handlesSliderProfit()
