import $ from "jquery";

$(() => {
    // Set active state based on current page
    const currentPage = window.location.pathname.split('/').pop() || "index.html";;
    console.log(currentPage);

    $('#bottom-nav .bottom-nav-item').each(function () {
        const href = $(this).attr('href');
        if (href === currentPage) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

    // Handle click events
    $('#bottom-nav .bottom-nav-item').click(function (e) {
        $('#bottom-nav .bottom-nav-item').removeClass('active');
        $(this).addClass('active');
    });
});