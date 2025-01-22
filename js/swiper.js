import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper for offers
const offersSwiper = new Swiper(".offers-swiper", {
	slidesPerView: 3,
	spaceBetween: 25,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for featured restaurants
const featuredRestaurantSwiper = new Swiper(".featured-restaurants-swiper", {
	slidesPerView: 4,
	spaceBetween: 25,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for top picks
const topPicksSwiper = new Swiper(".top-picks-swiper", {
	slidesPerView: 4,
	spaceBetween: 25,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for cuisines
const cuisinesSwiper = new Swiper(".cuisines-swiper", {
	slidesPerView: 7,
	spaceBetween: 5,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for best selling restaurants
const bestSellingRestaurantsSwiper = new Swiper(
	".best-selling-restaurants-swiper",
	{
		slidesPerView: 4,
		spaceBetween: 25,
		modules: [Navigation],
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	},
);

// Swiper for new restaurants
const newRestaurantsSwiper = new Swiper(".new-restaurants-swiper", {
	slidesPerView: 4,
	spaceBetween: 25,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for fastest delivery
const fastestDeliverySwiper = new Swiper(".fastest-delivery-swiper", {
	slidesPerView: 4,
	spaceBetween: 25,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for budget restaurants
const budgetRestaurantsSwiper = new Swiper(".budget-restaurants-swiper", {
	slidesPerView: 4,
	spaceBetween: 25,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for zones
const zoneSwiper = new Swiper(".zones-swiper", {
	slidesPerView: 4,
	spaceBetween: 25,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for blogs
const blogsSwiper = new Swiper(".blogs-swiper", {
	slidesPerView: 4,
	spaceBetween: 25,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for testimonials
const testimonialSwiper = new Swiper(".testimonial-swiper", {
	slidesPerView: 2,
	spaceBetween: 25,
	modules: [Pagination],
	pagination: {
		el: ".swiper-pagination",
	},
});

// TODO: Push to myRepo. Then submit to swiper github issue
