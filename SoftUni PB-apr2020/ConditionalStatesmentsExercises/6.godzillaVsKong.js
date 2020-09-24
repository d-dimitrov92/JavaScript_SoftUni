function godzillaVsKong(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let statists = Number(arg2);
    let clothesPrice = Number(arg3);
    let decorPrice = budget * 0.1;
    let totalClotesMoney = clothesPrice * statists;
    let totalMoney = totalClotesMoney + decorPrice;
    let discount = totalClotesMoney * 0.1;

    if(statists > 150) {
        totalMoney = totalMoney - discount;
    }

    let moneyDifference = Math.abs(budget - totalMoney);

    if(totalMoney > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyDifference.toFixed(2)} leva more.`)
    } else if(totalMoney <= budget) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${moneyDifference.toFixed(2)} leva left.`)
    }
}
godzillaVsKong(
9587.88,
222,
55.68,
)