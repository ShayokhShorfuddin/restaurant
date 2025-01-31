jQuery(() => {
    // Function to update the border based on the checked state
    function updateBorder() {
        $('.location-card').removeClass('active'); // Remove active class from all cards
        $('.form-check-input:checked').closest('.location-card').addClass('active'); // Add active class to the checked card
    }

    // Initial call to set the correct border on page load
    updateBorder();

    // Bind the function to the change event of the radio buttons
    $('.form-check-input').on('change', () => {
        updateBorder();
    });
});