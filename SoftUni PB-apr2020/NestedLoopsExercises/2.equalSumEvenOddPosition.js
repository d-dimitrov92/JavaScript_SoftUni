function sum(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());
    let printLine = '';

    for (let i = firstNum; i <= secondNum; i++) {
        let evenSum = 0;
        let oddSum = 0;
        let currentNum = '' + i;

        for (j = 0; j < currentNum.length; j++) {
            let currenrDigit = Number(currentNum[j]);

            if (j % 2 === 0) {
                evenSum += currenrDigit;
            } else {
                oddSum += currenrDigit;
            }
        }

        if (oddSum === evenSum) {
            printLine += i + ' ';
        }
    }
    console.log(printLine);
}

sum(["100000", "100050"])