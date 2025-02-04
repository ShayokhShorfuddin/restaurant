import $ from "jquery";

$(() => {
    $('.payment-option').click(function () {
        // Remove the 'selected' class from all payment options
        $('.payment-option').removeClass('selected');

        // Add the 'selected' class to the clicked payment option
        $(this).addClass('selected');
    });
});