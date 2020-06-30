function hamburger() {
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
}

export default hamburger;