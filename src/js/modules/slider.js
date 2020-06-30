function slider() {
    document.querySelectorAll('.reviews button').forEach(item => {
		item.addEventListener('click', (e) => {
			e.target.classList.add('active');
			setTimeout(() => {
				e.target.classList.remove('active');
			}, 300);
		});
	});
}

export default slider;