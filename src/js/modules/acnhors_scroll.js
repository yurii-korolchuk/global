function anchorsNav(navSelector) {
    document.querySelectorAll(navSelector).forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            const blockID = item.getAttribute('href').substr(1);
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
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