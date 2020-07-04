import {anchorsNav, anchorsButton} from './modules/acnhors_scroll';
import form from './modules/form';
import {hamburger} from './modules/hamburger';
import slider from './modules/slider';
import saveFormInfo from './modules/save_form_info';
import getFormInfo from './modules/get_form_info';

document.addEventListener('DOMContentLoaded', () => {
	anchorsNav('.nav__item a');
	anchorsButton('.button_call', '.prices__consultation');
	form('form', '.modal');
	hamburger('.nav', 'nav_active', '.hamburger__wrapper', 'hamburger__wrapper_open', 'hamburger__wrapper_close');
	slider('.slider__item', '.slider__inner', '.slider', '.slider__arrow-next', '.slider__arrow-prev');
	saveFormInfo('.questions__form input', 'questions');
	getFormInfo('.questions__form input', 'questions');

});	