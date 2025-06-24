function yardGreening(squareMeters) {
    let discountPercentage = 18;
    let squareMetersPrice = Number(squareMeters) * 7.61;
    let discount = (discountPercentage / 100) * squareMetersPrice;
    let finalPrice = squareMetersPrice - discount;

    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);

}

yardGreening(150);