import {modalOpen, modalClose} from './modal_toggle';

function form(formSelector, modalWindowSelector) {	
	document.querySelectorAll(formSelector).forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			modalOpen(modalWindowSelector);

			document.querySelector('.modal__close').addEventListener('click', () => {
				modalClose(modalWindowSelector);
			});

			const close = setTimeout(() => {
				modalClose(modalWindowSelector);
			}, 3500);

			document.addEventListener('keydown', (e) => {
				if(e.code === 'Escape' &&  document.querySelector('.modal').style.display == 'block') {
					modalClose(modalWindowSelector);
				}
			});

			item.reset();
		});
	});
}

export default form;