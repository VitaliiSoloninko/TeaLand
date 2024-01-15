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
				slidesPerView: 4,
				spaceBetween: 25
			},
			768: {
				slidesPerView: 3,
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
