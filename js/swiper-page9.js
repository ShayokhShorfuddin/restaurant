import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../css/aiz-core.css"

function getTabsInfoSlidesPerView() {
    return window.innerWidth >= 1400 ? 12 : window.innerWidth >= 1000 ? 10 : window.innerWidth >= 800 ? 7 : window.innerWidth >= 400 ? 4 : 2;
}

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

// Swiper for restaurants info mobile
const restaurantsInfoSwiperMobile = new Swiper(".restaurant-info-swiper-mobile", {
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
    slidesPerView: getTabsInfoSlidesPerView(),
    modules: [Navigation],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})


// Add resize event listener
window.addEventListener('resize', () => {
    tabsSwiper.params.slidesPerView = getTabsInfoSlidesPerView();

    tabsSwiper.update();
});