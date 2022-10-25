const menuLink = document.querySelectorAll(".menu__link");
const arrayLink = Array.from(menuLink);


arrayLink.forEach((menuLink) => {
	menuLink.onclick = function () { 
		if (menuLink.closest('.menu__item').querySelector('.menu_sub')) { 
			menuLink.closest('.menu__item').querySelector('.menu_sub').classList.toggle('menu_active'); 
		  return false; 
		};
  };
});

