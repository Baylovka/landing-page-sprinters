const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.getElementById('mobile-menu-open');
const menuBtnClose = document.getElementById('mobile-menu-close');
const links = document.querySelectorAll('.mobile-menu__link');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);

links.forEach((link) => {
	link.addEventListener('click', () => {
		toggleMenu();
		disableScroll();
	});
});