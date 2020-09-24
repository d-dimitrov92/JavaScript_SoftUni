function alcoholMarket(arg1, arg2, arg3, arg4, arg5) {
    let whiskeyPrice = Number(arg1);
    let beer = Number(arg2);
    let wine = Number(arg3);
    let rakia = Number(arg4);
    let whiskey = Number(arg5);

    let rakiaPrice = whiskeyPrice / 2;
    let winePrice = rakiaPrice - (0.4 * rakiaPrice);
    let beerPrice = rakiaPrice - (0.8 * rakiaPrice);
    let totalWhiskey = whiskey * whiskeyPrice
    let totalWine = wine * winePrice;
    let totalBeer = beer * beerPrice
    let totalRakia = rakia * rakiaPrice;

    let totalPrice = totalWhiskey + totalBeer + totalRakia + totalWine;

    console.log(totalPrice.toFixed(2));
}

alcoholMarket (
    "63.44",
    "3.57",
    "6.35",
    "8.15",
    "2.5",


)