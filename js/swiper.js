import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../css/aiz-core.css"

function getOfferSlidesPerView() {
	return window.innerWidth >= 1100 ? 3 : window.innerWidth >= 730 ? 2 : 1;
}
function getFoodCardsSlidesPerView() {
	return window.innerWidth >= 1200 ? 4 : window.innerWidth >= 850 ? 3 : window.innerWidth >= 500 ? 2 : 1;
}
function getCuisineSlidesPerView() {
	return window.innerWidth >= 1230 ? 7 : window.innerWidth >= 1100 ? 6 : window.innerWidth >= 1000 ? 5 : window.innerWidth >= 700 ? 4 : window.innerWidth >= 500 ? 3 : window.innerWidth >= 350 ? 2 : 1;
}

// Swiper for offers
const offersSwiper = new Swiper(".offers-swiper", {
	slidesPerView: getOfferSlidesPerView(),
	spaceBetween: 25,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for featured restaurants
const featuredRestaurantSwiper = new Swiper(".featured-restaurants-swiper", {
	slidesPerView: getFoodCardsSlidesPerView(),
	spaceBetween: 25,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for top picks
const topPicksSwiper = new Swiper(".top-picks-swiper", {
	slidesPerView: getFoodCardsSlidesPerView(),
	spaceBetween: 25,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for cuisines
const cuisinesSwiper = new Swiper(".cuisines-swiper", {
	slidesPerView: getCuisineSlidesPerView(),
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
		slidesPerView: getFoodCardsSlidesPerView(),
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
	slidesPerView: getFoodCardsSlidesPerView(),
	spaceBetween: 25,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for fastest delivery
const fastestDeliverySwiper = new Swiper(".fastest-delivery-swiper", {
	slidesPerView: getFoodCardsSlidesPerView(),
	spaceBetween: 25,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for budget restaurants
const budgetRestaurantsSwiper = new Swiper(".budget-restaurants-swiper", {
	slidesPerView: getFoodCardsSlidesPerView(),
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

// Swiper for restaurants info
const restaurantsInfoSwiper = new Swiper(".restaurant-info-swiper", {
	slidesPerView: 1,
	spaceBetween: 20,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
})

// Swiper for tabs
const tabsSwiper = new Swiper(".tabs-section-swiper", {
	slidesPerView: 11,
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
})


// Add resize event listener
window.addEventListener('resize', () => {
	offersSwiper.params.slidesPerView = getOfferSlidesPerView();
	featuredRestaurantSwiper.params.slidesPerView = getFoodCardsSlidesPerView();
	topPicksSwiper.params.slidesPerView = getFoodCardsSlidesPerView();
	bestSellingRestaurantsSwiper.params.slidesPerView = getFoodCardsSlidesPerView();
	newRestaurantsSwiper.params.slidesPerView = getFoodCardsSlidesPerView();
	fastestDeliverySwiper.params.slidesPerView = getFoodCardsSlidesPerView();
	budgetRestaurantsSwiper.params.slidesPerView = getFoodCardsSlidesPerView();
	cuisinesSwiper.params.slidesPerView = getCuisineSlidesPerView();

	offersSwiper.update();
	featuredRestaurantSwiper.update();
	topPicksSwiper.update();
	bestSellingRestaurantsSwiper.update();
	newRestaurantsSwiper.update();
	fastestDeliverySwiper.update();
	budgetRestaurantsSwiper.update();
	cuisinesSwiper.update();
});