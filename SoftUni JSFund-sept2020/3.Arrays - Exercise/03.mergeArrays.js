function merge(firstArr, secondArr) {
    let finalArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            if (j == i && j % 2 == 0) {
                let stringAsNum = Number(firstArr[i]) + Number(secondArr[j]);
                finalArr.push(stringAsNum);
            } else if (j == i && j % 2 != 0) {
                let numAsString = `${firstArr[i]}${secondArr[j]}`;
                finalArr.push(numAsString)
            }
        }
    }
    console.log(finalArr.join(' - '));
}

merge(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
);