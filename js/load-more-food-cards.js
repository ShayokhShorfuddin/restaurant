import $ from "jquery";
import meetAllMeatImage from '../assets/images/meet-all-meat.png';
import kebabIshImage from '../assets/images/kebab-ish.png';
import pizzaleciousImage from '../assets/images/pizzalecious.png';
import chicksawImage from '../assets/images/chicksaw.png';
import starImage from '../assets/images/star.svg';

const foodCards = `
        <!-- Food card 5 -->
        <div class="highlight-on-hover">
            <div class="restaurants-at-woodland-hills-swiper-img-holder rounded-4 glow-on-hover">
                <img src="${meetAllMeatImage}" alt="meet-all-meat">
            </div>
            <h6 class="fs-15 fw-bold mt-3">Meet all Meat</h6>
            <p class="fs-14 text-body-secondary mt-1">Pizza, Pasta, Italian, Lasa….</p>
            <div class="d-flex mt-2 column-gap-2">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
            </div>
        </div>

        <!-- Food card 6 -->
        <div class="highlight-on-hover">
            <div class="restaurants-at-woodland-hills-swiper-img-holder rounded-4 glow-on-hover">
                <img src="${kebabIshImage}" alt="kebab-ish">
            </div>
            <h6 class="fs-15 fw-bold mt-3">Kebab Ish</h6>
            <p class="fs-14 text-body-secondary mt-1">Pizza, Pasta, Italian, Lasa….</p>
            <div class="d-flex mt-2 column-gap-2">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
            </div>
        </div>

        <!-- Food card 7 -->
        <div class="highlight-on-hover">
            <div class="restaurants-at-woodland-hills-swiper-img-holder rounded-4 glow-on-hover">
                <img src="${pizzaleciousImage}" alt="Pizzalecious">
            </div>
            <h6 class="fs-15 fw-bold mt-3">Pizzalecious</h6>
            <p class="fs-14 text-body-secondary mt-1">Pizza, Pasta, Italian, Lasa….</p>
            <div class="d-flex mt-2 column-gap-2">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
            </div>
        </div>

        <!-- Food card 8 -->
        <div class="highlight-on-hover">
            <div class="restaurants-at-woodland-hills-swiper-img-holder rounded-4 glow-on-hover">
                <img src="${chicksawImage}" alt="Chicksaw Chickens">
            </div>
            <h6 class="fs-15 fw-bold mt-3">Chicksaw Chickens</h6>
            <p class="fs-14 text-body-secondary mt-1">Pizza, Pasta, Italian, Lasa….</p>
            <div class="d-flex mt-2 column-gap-2">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
                <img src="${starImage}" alt="Star">
            </div>
        </div>
`;

$(() => {
    $("#load-more-btn").on("click", () => {
        const $newFoodCards = $(foodCards);

        $("#restaurants-grid").append($newFoodCards);

        $newFoodCards.hide().fadeIn(500);
    });
});