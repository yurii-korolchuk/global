
document.addEventListener('DOMContentLoaded', () => {
	$('.slider').slick({
		centerMode: true,
  		slidesToShow: 3,
		prevArrow: $('.reviews-prev'),
		nextArrow: $('.reviews-next')
	});
	document.querySelectorAll('.reviews button').forEach(item => {
		item.addEventListener('click', (e) => {
			e.target.classList.add('active');
			setTimeout(() => {
				e.target.classList.remove('active');
			}, 300);
		});
	});
});