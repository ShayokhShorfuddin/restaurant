// Swiper for offers
const offersSwiper = new Swiper(".offers-swiper", {
	slidesPerView: 3,
	spaceBetween: 25,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for featured restaurants
const featuredRestaurantSwiper = new Swiper(".featured-restaurants-swiper", {
	slidesPerView: 4,
	spaceBetween: 25,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for top picks
const topPicksSwiper = new Swiper(".top-picks-swiper", {
	slidesPerView: 4,
	spaceBetween: 25,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Swiper for cuisines
const cuisinesSwiper = new Swiper(".cuisines-swiper", {
	slidesPerView: 7,
	spaceBetween: 5,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
