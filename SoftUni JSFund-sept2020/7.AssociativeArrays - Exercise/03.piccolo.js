function piccolo(array) {
    let parking = {};

    for (let line of array) {
        let [action, carNumber] = line.split(', ');
        if(action == 'IN'){
            parking[carNumber] = 1;
        } else if(action == 'OUT'){
            parking[carNumber] = 0;
        }
    }
    let keys = Object.keys(parking)
    .filter(x => parking[x] == 1)
    .sort((a, b) => a.localeCompare(b));
    console.log(keys.join('\n'));
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);
