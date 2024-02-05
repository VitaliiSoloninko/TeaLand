// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

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

// button go-top
const goTopBtn = document.querySelector(".go-top");
goTopBtn.addEventListener("click", goTop);

function goTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -40);
		setTimeout(goTop, 0);
	}
}

