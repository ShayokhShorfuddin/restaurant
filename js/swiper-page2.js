import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../css/aiz-core.css"

function getZonesSlidesPerView() {
    return window.innerWidth >= 900 ? 4 : window.innerWidth >= 650 ? 3 : window.innerWidth >= 360 ? 2 : 1;
}
function getBlogsSlidesPerView() {
    return window.innerWidth >= 970 ? 4 : window.innerWidth >= 680 ? 3 : window.innerWidth >= 420 ? 2 : 1;
}
function getTestimonialsSlidesPerView() {
    return window.innerWidth >= 750 ? 2 : 1;
}

// Swiper for zones
const zoneSwiper = new Swiper(".zones-swiper", {
    slidesPerView: getZonesSlidesPerView(),
    spaceBetween: 25,
    modules: [Navigation],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Swiper for blogs
const blogsSwiper = new Swiper(".blogs-swiper", {
    slidesPerView: getBlogsSlidesPerView(),
    spaceBetween: 25,
    modules: [Navigation],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Swiper for testimonials
const testimonialSwiper = new Swiper(".testimonial-swiper", {
    slidesPerView: getTestimonialsSlidesPerView(),
    spaceBetween: 25,
    modules: [Pagination],
    pagination: {
        el: ".swiper-pagination",
    },
});

// Add resize event listener
window.addEventListener('resize', () => {
    zoneSwiper.params.slidesPerView = getZonesSlidesPerView();
    blogsSwiper.params.slidesPerView = getBlogsSlidesPerView();
    testimonialSwiper.params.slidesPerView = getTestimonialsSlidesPerView();

    zoneSwiper.update();
    blogsSwiper.update();
    testimonialSwiper.update();
});