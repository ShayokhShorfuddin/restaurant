import $ from "jquery";
import tickImage from '../assets/images/tick-white.svg';
import plusImage from '../assets/images/plus.svg';

$(() => {
    // Setting the "selected" data of every .menu-card to false
    $('.menu-card').data('selected', false);

    // Number of items in the cart
    let selectedCount = 0;
    // Total cost of the items in the cart
    let totalCost = 0;

    $(".menu-card").hover(
        function () {
            const overlay = $(this).find('.menu-overlay');
            const isSelected = $(this).data('selected');

            if (!isSelected) {
                overlay.css({ opacity: '1' });
                $(this).css({ boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)' });
            }
        },
        function () {
            const overlay = $(this).find('.menu-overlay');
            const isSelected = $(this).data('selected');

            if (!isSelected) {
                overlay.css({ opacity: '0' });
                $(this).css({ boxShadow: 'none' });
            }
        }
    );

    $('.menu-card').on('click', function () {
        const isSelected = $(this).data('selected');
        const overlay = $(this).find('.menu-overlay');
        const overlayImg = $(this).find('.menu-overlay img');

        if (!isSelected) {
            $(this).data('selected', true);

            overlayImg.attr('src', tickImage);
            overlayImg.attr('alt', 'Tick icon');

            overlay.css('opacity', '1');

            selectedCount++;
            totalCost += 22.50;
        } else {
            $(this).data('selected', false);

            overlayImg.attr('src', plusImage);
            overlayImg.attr('alt', 'Plus icon');

            selectedCount--;
            totalCost -= 22.50;
        }

        // Update cart
        $('#selected-count').text(`${selectedCount} item(s)`);

        // Update total cost
        $('#total-cost').text(`$ ${totalCost}`);
    });
});
