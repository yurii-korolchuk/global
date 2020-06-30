import {anchorsNav, anchorsButton} from './modules/acnhors_scroll';
import form from './modules/form';
import hamburger from './modules/hamburger';
import slider from './modules/slider';

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

	anchorsNav();
	anchorsButton();
	form();
	hamburger();
	slider();

});