function movingTarget(array) {
    let targets = array.shift().split(' ').map(Number);
    let command = array.shift();

    while (command != 'End') {
        let splittedCommand = command.split(' ');
        let action = splittedCommand[0]
        let index = Number(splittedCommand[1]);
        let num = Number(splittedCommand[2]);
        switch (action) {
            case 'Shoot': {
                if (index > targets.length - 1 || index < 0) {
                    console.log(`Strike missed!`);
                    command = array.shift();
                    break;
                }
                targets[index] -= num;
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
                break;
            }
            
            case 'Add': {
                if (targets[index] != undefined) {
                    targets.splice(index, 0, num);
                } else {
                    console.log(`Invalid placement!`);
                }
                break;
            }
            case 'Strike': {
                if (index - num >= 0 && index + num < targets.length) {
                    targets.splice(index - num, num * 2 + 1);
                } else {
                    console.log('Strike missed!');
                }
                break;
            }
        }
        command = array.shift();
    }
    console.log(targets.join('|'));
}

movingTarget(['1 2 3 4 5 6'
    , 'Strike 2 3'
    , 'Add 0 22'
    , 'Add 0 40'
    , 'Add 0 50'
    , 'End']
);