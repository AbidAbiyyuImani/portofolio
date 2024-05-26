const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
	if (window.scrollY > 1) {
		navbar.classList.add('fixed');
		navbar.classList.remove('bg-white');
		navbar.classList.add('bg-transparent');
		navbar.classList.add('shadow-md');
		navbar.classList.add('top-0');
	} else {
		navbar.classList.remove('fixed');
		navbar.classList.add('bg-white');
		navbar.classList.remove('bg-transparent');
		navbar.classList.remove('shadow-md');
		navbar.classList.remove('top-0');
	}
});