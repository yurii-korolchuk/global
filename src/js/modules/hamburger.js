function openNavMenu(navMenuSelector, navMenuActiveClassSelector) {
	document.querySelector(navMenuSelector).classList.add(navMenuActiveClassSelector);
	document.body.style.overflow = 'hidden';
}

function closeNavMenu(navMenuSelector, navMenuActiveClassSelector) {
	document.querySelector(navMenuSelector).classList.remove(navMenuActiveClassSelector);
	document.body.style.overflow = 'auto';
}

function hamburger(hamburgerSelector, hamburgerOpenedClass, hamburgerClosedClass) {
    document.querySelector(hamburgerSelector).addEventListener('click', (e) => {
		if(e.target && e.target.classList.contains('hamburger__wrapper')) {
			if(e.target.classList.contains(hamburgerOpenedClass)) {
				e.target.classList.remove(hamburgerOpenedClass);
				e.target.classList.add(hamburgerClosedClass);
				openNavMenu('.nav', 'nav_active');
			} else if(e.target.classList.contains(hamburgerClosedClass)) {
				e.target.classList.remove(hamburgerClosedClass);
				e.target.classList.add(hamburgerOpenedClass);
				closeNavMenu('.nav', 'nav_active');
			}
		}
	});
}

export {hamburger, closeNavMenu};