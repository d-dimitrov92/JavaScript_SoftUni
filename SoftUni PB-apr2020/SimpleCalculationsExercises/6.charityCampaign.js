function charityCampaign(arg1, arg2, arg3, arg4, arg5) {
    let days = Number(arg1);
    let bakers = Number(arg2);
    let cakes = Number(arg3);
    let goffretes = Number(arg4);
    let pancakes = Number(arg5);
    let cakePrice = 45;
    let goffrettePrice = 5.8;
    let pancakePrice = 3.2;
    let totalDaily = (cakes * cakePrice + goffretes * goffrettePrice + pancakes * pancakePrice) * bakers;
    let totalIncome = totalDaily * days;
    let expenses = totalIncome / 8;

    let total = totalIncome - expenses;

    console.log (total.toFixed(2));
}

charityCampaign(
    "131",
    "5",
    "9",
    "33",
    "46",
)