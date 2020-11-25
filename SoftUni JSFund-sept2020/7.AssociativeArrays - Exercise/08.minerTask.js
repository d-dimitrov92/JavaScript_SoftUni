function task(array) {
    let resourses = {};
    for (let i = 0; i < array.length; i++) {
        if (resourses.hasOwnProperty(array[i])) {
            resourses[array[i]] += Number(array[i + 1]);
            continue;
        }
        if (i % 2 == 0) {
            resourses[array[i]] = Number(array[i + 1]);
        }
    }
    for (const item in resourses) {
        console.log(`${item} -> ${resourses[item]}`);
    }
}

task([
    'Gold',
    '155',
    'Silver',
    '1',
    'Copper',
    '2000000000',
    'Copper',
    '0'
]);