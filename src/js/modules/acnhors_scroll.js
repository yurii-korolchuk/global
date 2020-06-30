function anchorsNav() {
    document.querySelectorAll('.nav__item a').forEach(item => {
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

function anchorsButton() {
    document.querySelectorAll('.button_call').forEach(item => {
		item.addEventListener('click', () => {
			document.querySelector('.prices__consultation').scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			});
		});
	});
}

export {anchorsNav, anchorsButton};