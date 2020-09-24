function greenSquareMeters(arg1){
    let squareMeters = Number(arg1);
    let priceForSquareMeter = 7.61;
    let price = squareMeters * priceForSquareMeter;
    let discountPercent = 0.18;
    let discount = price*discountPercent;
    let finalPrice = price - discount;

    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}
greenSquareMeters("540");