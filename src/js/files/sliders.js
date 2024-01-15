import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import "../../scss/base/swiper.scss";

if (document.querySelector('.swiper')) {
	new Swiper('.swiper', {
		modules: [Navigation],
		observer: true, // спостерігач
		observeParents: true, // спостеріагти за батьками
		spaceBetween: 32, // відстань між слайдами
		speed: 800, // швидкість
		loop: true, // циклічно
		watchOverflow: true,
		navigation: {
			nextEl: '.slider-arrows .slider-arrow_next',
			prevEl: '.slider-arrows .slider-arrow_prev',
		},
		breakpoints: {
			1280: {
				slidesPerView: 3.9,
				spaceBetween: 25
			},
			768: {
				slidesPerView: 2.9,
				spaceBetween: 25
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			320: {
				slidesPerView: 1.1,
				spaceBetween: 10
			}
		}
	});
}


/*
// Скролл меню на базі слайдера
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}
*/
