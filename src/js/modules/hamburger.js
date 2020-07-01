function openNavMenu(navMenuSelector, navMenuActiveClassSelector) {
	document.querySelector(navMenuSelector).classList.add(navMenuActiveClassSelector);
	document.body.style.overflow = 'hidden';
}

function closeNavMenu(navMenuSelector, navMenuActiveClassSelector) {
	document.querySelector(navMenuSelector).classList.remove(navMenuActiveClassSelector);
	document.body.style.overflow = 'auto';
}

function hamburger() {
    document.querySelector('.hamburger').addEventListener('click', (e) => {
		if(e.target && e.target.classList.contains('hamburger__wrapper')) {
			if(e.target.classList.contains('hamburger__wrapper_open')) {
				e.target.classList.remove('hamburger__wrapper_open');
				e.target.classList.add('hamburger__wrapper_close');
				openNavMenu('.nav', 'nav_active');
				
	
			} else if(e.target.classList.contains('hamburger__wrapper_close')) {
				e.target.classList.remove('hamburger__wrapper_close');
				e.target.classList.add('hamburger__wrapper_open');
				closeNavMenu('.nav', 'nav_active');
			}
		}
	});
}

export default hamburger;