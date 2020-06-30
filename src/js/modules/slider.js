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

export default slider;