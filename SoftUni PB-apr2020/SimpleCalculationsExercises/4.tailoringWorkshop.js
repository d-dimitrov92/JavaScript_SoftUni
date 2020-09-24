function tailoringWorkshop(arg1, arg2, arg3) {
    let tables = Number(arg1);
    let tablesL = Number(arg2);
    let tablesW = Number(arg3);
    let sideKare = tablesL / 2;
    let kareArea = sideKare * sideKare;

    let pokrivkaArea = (tablesL + 2 * 0.3) * (tablesW + 2 * 0.3);
    let pokrivkaPrice = pokrivkaArea * 7;
    let karePrice = kareArea * 9;

    let priceBGN = tables * (pokrivkaPrice + karePrice) * 1.85;
    let priceUSD = tables * (pokrivkaPrice + karePrice);

    console.log (`${priceUSD.toFixed(2)} USD`)
    console.log (`${priceBGN.toFixed(2)} BGN`)
}

tailoringWorkshop(
    "5",
    "1.00",
    "0.50",
)