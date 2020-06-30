function slider() {
	const sliderInner = document.querySelector('.slider__inner');
	const sliderItems = document.querySelectorAll('.slider__item');
	const width = Math.floor(+window.getComputedStyle(document.querySelector('.slider')).width.slice(0, -2));
	sliderInner.style.width = Math.floor(width * sliderItems.length) + 'px';
	let offset = 0;

	document.querySelector('.slider__arrow-next').addEventListener('click', (e) => {
		if(offset == width * (sliderItems.length - 1)) {
			offset = 0;
		} else {
			offset = Math.floor(offset + width);
		}	
		sliderInner.style.transform = `translateX(-${offset}px)`;
	});

	document.querySelector('.slider__arrow-prev').addEventListener('click', (e) => {
		if(offset == 0) {
			offset = width * (sliderItems.length - 1);
		} else {
			offset = Math.floor(offset - width);
		}
		sliderInner.style.transform = `translateX(-${offset}px)`;
	});

}

export default slider;