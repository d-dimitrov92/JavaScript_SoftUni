function same(num) {
    let numAsString = num + '';
    let result = 0;
    for (let i = 0; i < numAsString.length; i++) {
        let singleDigit = Number(numAsString[i]);
        result += singleDigit;
    }
    if(result / numAsString.length != Number(numAsString[0])){
        console.log('false');
    } else console.log('true');
    console.log(result);
}

same(2222222);
same(1234)