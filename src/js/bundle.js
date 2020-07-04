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
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburger */ "./src/js/modules/hamburger.js");


function anchorsNav(navSelector) {
    document.querySelectorAll(navSelector).forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const blockID = item.getAttribute('href').substr(1);
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            try {
                if(document.querySelector('.nav').classList.contains('nav_active')) {
                    Object(_hamburger__WEBPACK_IMPORTED_MODULE_0__["closeNavMenu"])('.nav', 'nav_active', '.hamburger__wrapper', 'hamburger__wrapper_open', 'hamburger__wrapper_close');
                }
            } catch(e) {}
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

/***/ "./src/js/modules/get_form_info.js":
/*!*****************************************!*\
  !*** ./src/js/modules/get_form_info.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getFormInfo(inputsSelector, formName) {
    document.querySelectorAll(inputsSelector).forEach(item => {
        if(formName) {
            const tmp = localStorage.getItem(`${formName}${item.getAttribute('name').charAt(0).toUpperCase() + 
            item.getAttribute('name').slice(1)}`);
            if(tmp) {
                item.value = tmp;
            }
        } else {
            const tmp = localStorage.getItem(`${item.getAttribute('name').charAt(0).toUpperCase() + item.getAttribute('name').slice(1)}`);
            if(tmp) {
                item.value = tmp;
            }
        }
    });
}

/* harmony default export */ __webpack_exports__["default"] = (getFormInfo);

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/*! exports provided: hamburger, closeNavMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hamburger", function() { return hamburger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeNavMenu", function() { return closeNavMenu; });
function openNavMenu(navMenuSelector, navMenuActiveClassSelector, hamburgerSelector, hamburgerOpenedClass, hamburgerClosedClass) {
	document.querySelector(navMenuSelector).classList.add(navMenuActiveClassSelector);
	document.body.style.overflow = 'hidden';
	document.querySelector(hamburgerSelector).classList.remove(hamburgerOpenedClass);
	document.querySelector(hamburgerSelector).classList.add(hamburgerClosedClass);
}

function closeNavMenu(navMenuSelector, navMenuActiveClassSelector, hamburgerSelector, hamburgerOpenedClass, hamburgerClosedClass) {
	document.querySelector(navMenuSelector).classList.remove(navMenuActiveClassSelector);
	document.body.style.overflow = 'auto';
	document.querySelector(hamburgerSelector).classList.remove(hamburgerClosedClass);
	document.querySelector(hamburgerSelector).classList.add(hamburgerOpenedClass);
}

function hamburger(navMenuSelector, navMenuActiveClassSelector, hamburgerSelector, hamburgerOpenedClass, hamburgerClosedClass) {
    document.querySelector(hamburgerSelector).addEventListener('click', (e) => {
		if(e.target && e.target.classList.contains('hamburger__wrapper')) {
			if(e.target.classList.contains(hamburgerOpenedClass)) {
				openNavMenu(navMenuSelector, navMenuActiveClassSelector, hamburgerSelector, hamburgerOpenedClass, hamburgerClosedClass);
			} else if(e.target.classList.contains(hamburgerClosedClass)) {
				closeNavMenu(navMenuSelector, navMenuActiveClassSelector, hamburgerSelector, hamburgerOpenedClass, hamburgerClosedClass);
			}
		}
	});
}



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

/***/ "./src/js/modules/save_form_info.js":
/*!******************************************!*\
  !*** ./src/js/modules/save_form_info.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function saveFormInfo(inputsSelector, formName) {
    document.querySelectorAll(inputsSelector).forEach(item => {
        item.addEventListener('input', () => {
            if(item.value) {
                if(formName) {
                    localStorage.setItem(`${formName}${item.getAttribute('name').charAt(0).toUpperCase() + 
                    item.getAttribute('name').slice(1)}`, item.value);
                } else {
                    localStorage.setItem(`${item.getAttribute('name').charAt(0).toUpperCase() + 
                    item.getAttribute('name').slice(1)}`, item.value);
                }
            }
        });
    });
}

/* harmony default export */ __webpack_exports__["default"] = (saveFormInfo);

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
/* harmony import */ var _modules_save_form_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/save_form_info */ "./src/js/modules/save_form_info.js");
/* harmony import */ var _modules_get_form_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/get_form_info */ "./src/js/modules/get_form_info.js");







document.addEventListener('DOMContentLoaded', () => {
	Object(_modules_acnhors_scroll__WEBPACK_IMPORTED_MODULE_0__["anchorsNav"])('.nav__item a');
	Object(_modules_acnhors_scroll__WEBPACK_IMPORTED_MODULE_0__["anchorsButton"])('.button_call', '.prices__consultation');
	Object(_modules_form__WEBPACK_IMPORTED_MODULE_1__["default"])('form', '.modal');
	Object(_modules_hamburger__WEBPACK_IMPORTED_MODULE_2__["hamburger"])('.nav', 'nav_active', '.hamburger__wrapper', 'hamburger__wrapper_open', 'hamburger__wrapper_close');
	Object(_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])('.slider__item', '.slider__inner', '.slider', '.slider__arrow-next', '.slider__arrow-prev');
	Object(_modules_save_form_info__WEBPACK_IMPORTED_MODULE_4__["default"])('.questions__form input', 'questions');
	Object(_modules_get_form_info__WEBPACK_IMPORTED_MODULE_5__["default"])('.questions__form input', 'questions');

});	

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map