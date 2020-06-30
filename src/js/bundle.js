/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/acnhors_scroll.js":
/*!******************************************!*\
  !*** ./src/js/modules/acnhors_scroll.js ***!
  \******************************************/
/*! exports provided: anchorsNav, anchorsButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anchorsNav", function() { return anchorsNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anchorsButton", function() { return anchorsButton; });
function anchorsNav(navSelector) {
    document.querySelectorAll(navSelector).forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            const blockID = item.getAttribute('href').substr(1);
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });
}

function anchorsButton(buttonSelector, scrollToSelector) {
    document.querySelectorAll(buttonSelector).forEach(item => {
		item.addEventListener('click', () => {
			document.querySelector(scrollToSelector).scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			});
		});
	});
}



/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal_toggle */ "./src/js/modules/modal_toggle.js");


function form(formSelector, modalWindowSelector) {	
	document.querySelectorAll(formSelector).forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			Object(_modal_toggle__WEBPACK_IMPORTED_MODULE_0__["modalOpen"])(modalWindowSelector);

			document.querySelector('.modal__close').addEventListener('click', () => {
				Object(_modal_toggle__WEBPACK_IMPORTED_MODULE_0__["modalClose"])(modalWindowSelector);
			});

			const close = setTimeout(() => {
				Object(_modal_toggle__WEBPACK_IMPORTED_MODULE_0__["modalClose"])(modalWindowSelector);
			}, 3500);

			document.addEventListener('keydown', (e) => {
				if(e.code === 'Escape' &&  document.querySelector('.modal').style.display == 'block') {
					Object(_modal_toggle__WEBPACK_IMPORTED_MODULE_0__["modalClose"])(modalWindowSelector);
				}
			});

			item.reset();
		});
	});
}

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function hamburger() {
    document.querySelector('.hamburger').addEventListener('click', (e) => {
		if(e.target && e.target.classList.contains('hamburger__wrapper')) {
			if(e.target.classList.contains('hamburger__wrapper_open')) {
				e.target.classList.remove('hamburger__wrapper_open');
				e.target.classList.add('hamburger__wrapper_close');
				document.querySelector('.nav').classList.add('nav_active');
				document.body.style.overflow = 'hidden';
	
			} else if(e.target.classList.contains('hamburger__wrapper_close')) {
				e.target.classList.remove('hamburger__wrapper_close');
				e.target.classList.add('hamburger__wrapper_open');
				document.querySelector('.nav').classList.remove('nav_active');
				document.body.style.overflow = 'auto';
			}
		}
	});
}

/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/modules/modal_toggle.js":
/*!****************************************!*\
  !*** ./src/js/modules/modal_toggle.js ***!
  \****************************************/
/*! exports provided: modalOpen, modalClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalOpen", function() { return modalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalClose", function() { return modalClose; });
function modalOpen(modalWindowSelector) {
    document.querySelector(modalWindowSelector).style.display = "block";
    document.body.style.overflow = 'hidden';
}

const modalClose = function(modalWindowSelector) {
    document.querySelector(modalWindowSelector).style.display = "none";
    document.body.style.overflow = 'auto';
};



/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider(sliderItemsSelector, sliderInnerSelector, sliderWrapperSelector, sliderNextArrowSelector, sliderPrevArowSelector) {
	const sliderInner = document.querySelector(sliderInnerSelector);
	const sliderItems = document.querySelectorAll(sliderItemsSelector);
	const width = Math.floor(+window.getComputedStyle(document.querySelector(sliderWrapperSelector)).width.slice(0, -2));
	sliderInner.style.width = Math.floor(width * sliderItems.length) + 'px';
	let offset = 0;

	document.querySelector(sliderNextArrowSelector).addEventListener('click', (event) => {
		event.target.style.cssText = 'transform: scale(0.5)';
		setTimeout(function() {
			event.target.style.cssText = 'transform: scale(1)';
		}, 200);
		if(offset == width * (sliderItems.length - 1)) {
			offset = 0;
		} else {
			offset = Math.floor(offset + width);
		}	
		sliderInner.style.transform = `translateX(-${offset}px)`;
	});

	document.querySelector(sliderPrevArowSelector).addEventListener('click', (event) => {
		event.target.style.cssText = 'transform: scale(0.5)';
		setTimeout(function() {
			event.target.style.cssText = 'transform: scale(1)';
		}, 200);
		if(offset == 0) {
			offset = width * (sliderItems.length - 1);
		} else {
			offset = Math.floor(offset - width);
		}
		sliderInner.style.transform = `translateX(-${offset}px)`;
	});

}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_acnhors_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/acnhors_scroll */ "./src/js/modules/acnhors_scroll.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");





document.addEventListener('DOMContentLoaded', () => {
	Object(_modules_acnhors_scroll__WEBPACK_IMPORTED_MODULE_0__["anchorsNav"])('.nav__item a');
	Object(_modules_acnhors_scroll__WEBPACK_IMPORTED_MODULE_0__["anchorsButton"])('.button_call', '.prices__consultation');
	Object(_modules_form__WEBPACK_IMPORTED_MODULE_1__["default"])('form', '.modal');
	Object(_modules_hamburger__WEBPACK_IMPORTED_MODULE_2__["default"])();
	Object(_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])('.slider__item', '.slider__inner', '.slider', '.slider__arrow-next', '.slider__arrow-prev');

});	

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map