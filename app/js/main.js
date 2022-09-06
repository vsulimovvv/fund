/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/formUpload.js":
/*!*****************************************!*\
  !*** ./src/js/components/formUpload.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadForm)
/* harmony export */ });
function loadForm() {
  let inputs = document.querySelectorAll(".input-file-upload");
  Array.prototype.forEach.call(inputs, function (input) {
    let label = input.previousElementSibling,
        labelVal = label.querySelector(".custom-file-upload span").innerText;
    input.addEventListener("change", function (e) {
      let countFiles = "";
      if (this.files && this.files.length >= 1) countFiles = this.files.length;
      if (countFiles) label.querySelector(".custom-file-upload span").innerText = "Выбрано файлов: " + countFiles;else label.querySelector(".custom-file-upload span").innerText = labelVal;
    });
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_formUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/formUpload */ "./src/js/components/formUpload.js");
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
// import showFilters from "./components/showFilters";
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
// import Choices from "choices.js";
// const element = document.querySelectorAll("select");
// element.forEach((el) => {
//   const choices = new Choices(el, {
//     itemSelectText: "",
//     searchEnabled: false,
//   });
// });

(0,_components_formUpload__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map