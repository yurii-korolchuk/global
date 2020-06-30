function hamburger() {
    document.querySelector('.hamburger').addEventListener('click', (e) => {
		if(e.target && e.target.classList.contains('hamburger__wrapper')) {
			if(e.target.classList.contains('hamburger__wrapper_open')) {
				e.target.classList.remove('hamburger__wrapper_open');
				e.target.classList.add('hamburger__wrapper_close');
				document.querySelector('.nav').classList.add('nav_active');
				document.body.style.overflow = 'hidden';
	
			} else if(e.target.classList.contains('hamburger__wrapper_close')) {
				e.target.classList.remove('hamburger__wrapper_close');
				e.target.classList.add('hamburger__wrapper_open');
				document.querySelector('.nav').classList.remove('nav_active');
				document.body.style.overflow = 'auto';
			}
		}
	});
}

export default hamburger;