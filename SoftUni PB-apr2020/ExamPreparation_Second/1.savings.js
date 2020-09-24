function save(input) {
    let income = Number(input.shift());
    let months = Number(input.shift());
    let neededMoney = Number(input.shift());
    let totalMoney = income * months;
    let moneySavedMontly = income - (income * 0.3) - neededMoney;
    let totalSaved = moneySavedMontly * months;
    let percentSaved = moneySavedMontly / income * 100;


    console.log(`She can save ${percentSaved.toFixed(2)}%`);
    console.log(`${totalSaved.toFixed(2)}`);
}

save([1500, 3, 800])