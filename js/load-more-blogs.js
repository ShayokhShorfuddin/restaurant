import $ from "jquery";

const blogCards = `
<!-- Blog card 7 -->
            <div class="blog-card card rounded-4 elevate-on-hover highlight-on-hover">
                <img src="./assets/images/healthy-food.png" class="card-img-top" alt="Healthy Food">
                <div class="blog-card-body">
                    <!-- Title -->
                    <h6 class="card-text">Food is an important part of balanced diet.</h6>
                    <div class="d-flex flex-column mt-3">
                        <!-- Hashtags -->
                        <small class="hashtag">Health, Medicine</small>
                        <!-- Date -->
                        <small class="fw-medium">12 June, 2021</small>
                    </div>
                    <small class="read-full-blog fw-medium">
                        Read Full Blog
                    </small>
                </div>
            </div>
            <!-- Blog card 8 -->
            <div class="blog-card card rounded-4 elevate-on-hover highlight-on-hover">
                <img src="./assets/images/steak.png" class="card-img-top" alt="Steak">
                <div class="blog-card-body">
                    <!-- Title -->
                    <h6 class="card-text">Sous Vide Beef Tenderloin with Port Wine and Garlic.</h6>
                    <div class="d-flex flex-column mt-3">
                        <!-- Hashtags -->
                        <small class="hashtag">Foods, Recipe</small>
                        <!-- Date -->
                        <small class="fw-medium">15 July, 2021</small>
                    </div>
                    <small class="read-full-blog fw-medium">
                        Read Full Blog
                    </small>
                </div>
            </div>
            <!-- Blog card 9 -->
            <div class="blog-card card rounded-4 elevate-on-hover highlight-on-hover">
                <img src="./assets/images/dining.png" class="card-img-top" alt="Dining">
                <div class="blog-card-body">
                    <!-- Title -->
                    <h6 class="card-text">17 Hottest Restaurants in Los Angeles. Where to eat right now.</h6>
                    <div class="d-flex flex-column mt-3">
                        <!-- Hashtags -->
                        <small class="hashtag">News, Restaurants</small>
                        <!-- Date -->
                        <small class="fw-medium">21 July, 2021</small>
                    </div>
                    <small class="read-full-blog fw-medium">
                        Read Full Blog
                    </small>
                </div>
            </div>
`

$(() => {
    $("#load-more-btn").on("click", () => {
        const $newBlogCards = $(blogCards);

        $("#blogs-grid").append($newBlogCards);

        $newBlogCards.hide().fadeIn(500);
    });
})