function race(array) {
    let racers = {};
    let list = array.shift();
    let line = array.shift();
    let name = nameExtract(line)
    let distance = dist(line)
    racers[name] = distance;
    let counter = 0;
    while (name != 'endofrace') {
        distance = dist(line);
        if (Object.keys(racers).includes(name) && counter != 0) {
            racers[name] += distance;
        }
        if (list.includes(name) && !Object.keys(racers).includes(name)) {
            racers[name] = distance;
        }
        line = array.shift();
        name = nameExtract(line);
        counter++;
    }
    let keys = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);

    console.log(`1st place: ${keys[0]}`)
    console.log(`2nd place: ${keys[1]}`);
    console.log(`3rd place: ${keys[2]}`);

    function dist(arr) {
        let distancePattern = /\d+/g;
        return arr.match(distancePattern).join('').split('').map(Number).reduce((a, b) => a + b);
    }
    function nameExtract(arr) {
        let namePattern = /[A-Za-z]+/g;
        return arr.match(namePattern).join('');
    }
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);