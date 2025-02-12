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

// Add resize event listener
window.addEventListener('resize', () => {
    offersSwiper.params.slidesPerView = getOfferSlidesPerView();
    featuredRestaurantSwiper.params.slidesPerView = getFoodCardsSlidesPerView();
    topPicksSwiper.params.slidesPerView = getFoodCardsSlidesPerView();
    cuisinesSwiper.params.slidesPerView = getCuisineSlidesPerView();
    bestSellingRestaurantsSwiper.params.slidesPerView = getFoodCardsSlidesPerView();
    newRestaurantsSwiper.params.slidesPerView = getFoodCardsSlidesPerView();
    fastestDeliverySwiper.params.slidesPerView = getFoodCardsSlidesPerView();
    budgetRestaurantsSwiper.params.slidesPerView = getFoodCardsSlidesPerView();

    offersSwiper.update();
    featuredRestaurantSwiper.update();
    topPicksSwiper.update();
    cuisinesSwiper.update();
    bestSellingRestaurantsSwiper.update();
    newRestaurantsSwiper.update();
    fastestDeliverySwiper.update();
    budgetRestaurantsSwiper.update();
});