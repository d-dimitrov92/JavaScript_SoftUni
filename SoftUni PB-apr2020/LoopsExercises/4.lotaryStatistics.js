function lotary(arg) {
    let n = Number(arg);
    let oddIntegers = 0;
    let even = 0;
    let lastSeven = 0;
    let hundredDividers = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0 && i < 10) {
            oddIntegers++;
        } else if (i % 2 === 0) {
            even++;
        }
        if (i === 7 || i % 10 === 7) {
            lastSeven++;
        } else if (100 % i === 0) {
            hundredDividers++;
        }
    }

    let percentOfOddIntegers = (oddIntegers / n * 100).toFixed(2);
    let percentOfEven = (even / n * 100).toFixed(2);
    let percentOfLastSeven = (lastSeven / n * 100).toFixed(2);
    let percentOfHundredDividers = (hundredDividers / n * 100).toFixed(2);

    console.log(`${percentOfOddIntegers}%`)
    console.log(`${percentOfEven}%`)
    console.log(`${percentOfLastSeven}%`)
    console.log(`${percentOfHundredDividers}%`)
}

lotary(35)