function rotate(array, num) {
    for (let i = 1; i <= Number(num); i++) {
        let temp = array.pop();
        array.unshift(temp);
    }

    return array.join(' ');
}

console.log(rotate(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
));
console.log(rotate(['1',
    '2',
    '3',
    '4'],
    2
));