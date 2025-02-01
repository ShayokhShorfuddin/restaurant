jQuery(() => {
    const quantityElement = $('.food-quantity');
    let quantity = Number.parseInt(quantityElement.text());

    $('.increment-food').click(() => {
        quantity++;
        quantityElement.text(quantity);
    });

    $('.decrement-food').click(() => {
        if (quantity > 0) {
            quantity--;
            quantityElement.text(quantity);
        }
    });
});