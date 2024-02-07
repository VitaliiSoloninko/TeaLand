// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
//========================================================================================================================================================
// Gallery movies
const furniture = document.querySelector('.gallery__body');
if (furniture && !isMobile.any()) {
	const furnitureItems = document.querySelector('.gallery__items');
	const furnitureColumn = document.querySelectorAll('.gallery__item');
	const speed = furniture.dataset.speed; // Скорость анимации
	let positionX = 0;
	let coordXprocent = 0;
	function setMouseGalleryStyle() {
		let furnitureItemsWidth = 0;
		furnitureColumn.forEach(element => {
			furnitureItemsWidth += element.offsetWidth;
		});
		const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
		const distX = Math.floor(coordXprocent - positionX);
		positionX = positionX + (distX * speed);
		let position = furnitureDifferent / 200 * positionX;
		furnitureItems.style.cssText = `transform: translate3d(${-position}px,0,0);`;
		if (Math.abs(distX) > 0) {
			requestAnimationFrame(setMouseGalleryStyle);
		} else {
			furniture.classList.remove('_init');
		}
	}
	furniture.addEventListener("mousemove", function (e) {
		const furnitureWidth = furniture.offsetWidth; // Получение ширины
		const coordX = e.pageX - furnitureWidth / 2; // Ноль по середине
		coordXprocent = coordX / furnitureWidth * 50; // Получаем проценты
		if (!furniture.classList.contains('_init')) {
			requestAnimationFrame(setMouseGalleryStyle);
			furniture.classList.add('_init');
		}
	});
}
//========================================================================================================================================================
// Button go-top
const goTopBtn = document.querySelector(".go-top"); // константа зчитує кнопку по класу
goTopBtn.addEventListener("click", goTop); // обробник подій по кліку і викликає функцію goTop
window.addEventListener("scroll", trackScroll); // обробник подій scroll і викликає функцію trackScroll
function trackScroll() {
	const offset = window.pageYOffset; // перевіряємо наскільки глибоко пішли вниз
	const coords = document.documentElement.clientHeight; // зрозуміти висоту 1 екрану
	if (offset > 6 * coords) { // якщо висота прокрутки більша за 6 екранів
		goTopBtn.classList.add("go-top--show"); // до кнопки додаємо клас go-top--show
	} else { // інакше
		goTopBtn.classList.remove("go-top--show");	// клас прибираємо
	}
}
function goTop() { // обявляємо функцію goTop
	if (window.pageYOffset > 0) { // якщо не початок сторінки 0
		window.scrollBy(0, -40); // скролимо наверх 0, -40 швидкість скролу, чим менша тим швидше 
		setTimeout(goTop, 0); // входимо в рекурсію, визиваємо функцію goTop
	}
}

