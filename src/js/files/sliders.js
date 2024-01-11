import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import "../../scss/base/swiper.scss";

if (document.querySelector('.slider-brends')) {
	new Swiper('.slider-brends', {
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 3.5,
		spaceBetween: 32,
		speed: 800,
		loop: true,
		watchOverflow: true,
		/*
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.1,
				spaceBetween: 15
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 1,
				spaceBetween: 32
			}
		}
		*/
	});
}



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

