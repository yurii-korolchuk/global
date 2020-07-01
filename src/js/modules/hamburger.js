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

export {hamburger, closeNavMenu};