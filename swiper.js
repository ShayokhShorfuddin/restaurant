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
