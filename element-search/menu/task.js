const menuLink = document.querySelectorAll(".menu__link");
const arrayLink = Array.from(menuLink);


arrayLink.forEach((menuLink) => {
	menuLink.onclick = function () { // ф-ия срабатывает при клике на пункт меню-ссылку
		if (menuLink.closest('.menu__item').querySelector('.menu_sub')) { // если у ближайшего родителя  нажатой ссылки есть класс menu_sub, то значит это нажали на меню с подменю, а не просто ссылка
			menuLink.closest('.menu__item').querySelector('.menu_sub').classList.toggle('menu_active'); // переключаем класс чтобы меню то появлялось, то убиралось
		  return false; // это отмена стандартного поведения браузера при клике на ссылке, чтобы не перезагружалась страница
		};
  };
});

