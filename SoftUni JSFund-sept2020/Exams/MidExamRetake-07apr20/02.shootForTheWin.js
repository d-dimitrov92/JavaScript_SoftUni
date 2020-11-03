function shoot(array) {
    let targets = array.shift().split(' ').map(Number);
    let counter = 0;
    let command = array.shift();
    while (command != 'End') {
        let index = Number(command);
        let target = targets[index];
        if (index > targets.length - 1) {
            command = array.shift();
            continue;
        }
        for (let i = 0; i < targets.length; i++) {
            if (targets[i] == -1) {
                continue;
            } else if (target < targets[i]) {
                targets[i] -= target;
            } else if (target >= targets[i]) {
                targets[i] += target;
            }
        }
        targets[index] = -1;
        counter++;
        command = array.shift();
    }
    console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);
}

shoot(['30 30 12 60 54 66'
    , '5'
    , '2'
    , '4'
    , '0'
    , 'End'
]);