function balance(input) {
    let numberOfIncome = Number(input.shift());
    let counter = 0;
    let nextIncome = 0;
    let result = 0;

    while (counter < numberOfIncome) {
        nextIncome = Number(input.shift());
        if(nextIncome < 0) {
            console.log("Invalid operation!")
            break;
        }
        console.log(`Increase: ${nextIncome.toFixed(2)}`)
        result += nextIncome;
        counter++;
    }
    console.log(`Total: ${result.toFixed(2)}`)
}

balance([
"5",
"120",
"45.55",
"-150"

])