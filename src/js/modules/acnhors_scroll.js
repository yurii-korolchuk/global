function anchorsNav(navSelector) {
    document.querySelectorAll(navSelector).forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const blockID = item.getAttribute('href').substr(1);
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            try {
                if(document.querySelector('.nav').classList.contains('nav_active')) {
                    document.querySelector('.nav').classList.remove('nav_active');
                    document.querySelector('.hamburger__wrapper').classList.remove('hamburger__wrapper_close');
                    document.querySelector('.hamburger__wrapper').classList.add('hamburger__wrapper_open');
                }
            } catch(e) {}
        });
    });
}

function anchorsButton(buttonSelector, scrollToSelector) {
    document.querySelectorAll(buttonSelector).forEach(item => {
		item.addEventListener('click', () => {
			document.querySelector(scrollToSelector).scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			});
		});
	});
}

export {anchorsNav, anchorsButton};