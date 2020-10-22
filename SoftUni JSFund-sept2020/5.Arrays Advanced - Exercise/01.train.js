function train(inputArr) {
    let wagons = inputArr.shift().split(' ').map(Number);
    let maxCap = Number(inputArr.shift());
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i].includes('Add')) {
            let current = inputArr[i].split(' ')
            wagons.push(Number(current[1]));
        } else {
            let num = Number(inputArr[i]);
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + num <= maxCap) {
                    wagons[j] += num;
                    break;
                }
            }
        }
    }
    return wagons.join(' ');
}

console.log(train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
));