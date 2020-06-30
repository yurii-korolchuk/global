function form() {
    const modalClose = function() {
		document.querySelector('.modal').style.display = "none";
		document.body.style.overflow = 'auto';
	};
	
	document.querySelectorAll('form').forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			document.querySelector('.modal').style.display = "block";
			document.body.style.overflow = 'hidden';

			document.querySelector('.modal__close').addEventListener('click', () => {
				modalClose();
			});

			const close = setTimeout(() => {
				modalClose();
			}, 3500);

			document.addEventListener('keydown', (e) => {
				if(e.code === 'Escape' &&  document.querySelector('.modal').style.display == 'block') {
					modalClose();
				}
			});

			item.reset();
		});
	});
}

export default form;