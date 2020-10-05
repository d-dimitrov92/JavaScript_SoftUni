function sum(num) {
    let numAsString = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    console.log(sum);
}

sum(245678);