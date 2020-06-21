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