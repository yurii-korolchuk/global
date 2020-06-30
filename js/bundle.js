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

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', () => {
	$('.slider').slick({
		centerMode: true,
  		slidesToShow: 3,
		prevArrow: $('.reviews-prev'),
		nextArrow: $('.reviews-next'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	document.querySelectorAll('.reviews button').forEach(item => {
		item.addEventListener('click', (e) => {
			e.target.classList.add('active');
			setTimeout(() => {
				e.target.classList.remove('active');
			}, 300);
		});
	});

	const anchors = document.querySelectorAll('.nav__item a');
	for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		
		const blockID = anchor.getAttribute('href').substr(1);
		document.getElementById(blockID).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
		});
	});

	document.querySelectorAll('.button_call').forEach(item => {
		item.addEventListener('click', () => {
			document.querySelector('.prices__consultation').scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			});
		});
	});

	const modalClose = function() {
		document.querySelector('.modal').style.display = "none";
		document.body.style.overflow = 'auto';
	};
	
	document.querySelectorAll('form').forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			document.querySelector('.modal').style.display = "block";
			document.body.style.overflow = 'hidden';

			document.querySelector('.modal__close').addEventListener('click', () => {
				modalClose();
			});

			const close = setTimeout(() => {
				modalClose();
			}, 3500);

			document.addEventListener('keydown', (e) => {
				if(e.code === 'Escape' &&  document.querySelector('.modal').style.display == 'block') {
					modalClose();
				}
			});

			item.reset();
		});
	});
	document.querySelector('.hamburger__wrapper').addEventListener('click', (e) => {
		if(e.target.parentNode.classList.contains('hamburger__wrapper_close')) {
			e.target.parentNode.classList.remove('hamburger__wrapper_close');
			document.querySelector('.nav').classList.remove('nav_active');
			document.body.style.overflow = 'auto';
		} else {
			e.target.parentNode.classList.add('hamburger__wrapper_close');
			document.querySelector('.nav').classList.add('nav_active');
			document.body.style.overflow = 'hidden';
		}
	});
}});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map