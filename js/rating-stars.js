$(document).ready(() => {
    // Handle click events for food rating stars
    $('.food-rating .star').on('click', function () {
        // Remove the 'active' class from all stars in the food rating section
        $('.food-rating .star').removeClass('active');

        // Get the index of the clicked star
        const index = $(this).index();

        // Add the 'active' class to all stars up to the clicked one in the food rating section
        $('.food-rating .star').each(function (i) {
            if (i <= index) {
                $(this).addClass('active');
            }
        });
    });

    // Handle click events for delivery rating stars
    $('.delivery-rating .star').on('click', function () {
        // Remove the 'active' class from all stars in the delivery rating section
        $('.delivery-rating .star').removeClass('active');

        // Get the index of the clicked star
        const index = $(this).index();

        // Add the 'active' class to all stars up to the clicked one in the delivery rating section
        $('.delivery-rating .star').each(function (i) {
            if (i <= index) {
                $(this).addClass('active');
            }
        });
    });
});