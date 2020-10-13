function oddAndEvenSum(num) {
    let numAsString = num.toString();
    let oddResult = 0;
    let evenResult = 0;
    for (let i = 0; i < numAsString.length; i++) {
        let n = Number(numAsString[i]);
        if(n % 2 == 0){
            evenResult += n;
        } else {
            oddResult += n
        }
    }

    console.log(`Odd sum = ${oddResult}, Even sum = ${evenResult}`);
}

oddAndEvenSum(3495892137259234);