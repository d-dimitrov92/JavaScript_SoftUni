function journey(arg1, arg2) {
    let budget = Number(arg1);
    let season = arg2;
    let overnightStay;
    let expense;

    if (budget <= 100) {
        console.log("Somewhere in Bulgaria");
        if(season === "summer") {
            expense = budget * 0.3;
            overnightStay = "Camp";
            console.log(`${overnightStay} - ${expense.toFixed(2)}`)
        } else if (season === "winter") {
            expense = budget * 0.7;
            overnightStay = "Hotel";
            console.log(`${overnightStay} - ${expense.toFixed(2)}`)
        }
    } else if (budget > 100 && budget <= 1000) {
        console.log("Somewhere in Balkans");
        if(season === "summer") {
            expense = budget * 0.4;
            overnightStay = "Camp";
            console.log(`${overnightStay} - ${expense.toFixed(2)}`)
        } else if (season === "winter") {
            expense = budget * 0.8;
            overnightStay = "Hotel";
            console.log(`${overnightStay} - ${expense.toFixed(2)}`)
        }
    } else if (budget > 1000) {
        console.log("Somewhere in Europe");
        expense = budget * 0.9;
        overnightStay = "Hotel";
        console.log(`${overnightStay} - ${expense.toFixed(2)}`)
    }
}

journey(
"75",
"winter",

)