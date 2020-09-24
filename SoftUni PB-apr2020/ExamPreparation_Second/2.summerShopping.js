function summer(input) {
    let budget = Number(input.shift());
    let towelPrice = Number(input.shift());
    let discountPercent = Number(input.shift());

    let umbrellaPrice = towelPrice * 2 / 3;
    let flips = umbrellaPrice * 0.75;
    let bag = (flips + towelPrice) * 1 / 3;
    let discount = (towelPrice + umbrellaPrice + flips + bag) * discountPercent / 100
    let total = towelPrice + umbrellaPrice + flips + bag - discount;
    let remainder = Math.abs(budget - total);

    if (budget >= total) {
        console.log(`Annie's sum is ${total.toFixed(2)} lv. She has ${remainder.toFixed(2)} lv. left.`)
    } else console.log(`Annie's sum is ${total.toFixed(2)} lv. She needs ${remainder.toFixed(2)} lv. more.`)
}

summer([40, 15, 5])