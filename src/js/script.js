import {anchorsNav, anchorsButton} from './modules/acnhors_scroll';
import form from './modules/form';
import {hamburger} from './modules/hamburger';
import slider from './modules/slider';

document.addEventListener('DOMContentLoaded', () => {
	anchorsNav('.nav__item a');
	anchorsButton('.button_call', '.prices__consultation');
	form('form', '.modal');
	hamburger('.hamburger', 'hamburger__wrapper_open', 'hamburger__wrapper_close');
	slider('.slider__item', '.slider__inner', '.slider', '.slider__arrow-next', '.slider__arrow-prev');

});	