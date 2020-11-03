function movingTarget(input) {
    let target = input.shift().split(' ').map(Number)

    function shoot(array, index, power) {
        if (array[index] != undefined) {
            array[index] -= power;
            if (array[index] <= 0) {
                array.splice(index, 1)
            }
        }
    }

    function add(array, index, value) {
        if (array[index] != undefined) {
            array.splice(index, 0, value)
        } else {
            console.log('Invalid placement!')
        }
    }

    function strike(array, index, radius) {
        if (index - radius >= 0 && index + radius < array.length) {
            array.splice(index - radius, radius * 2 + 1);
        } else {
            console.log('Strike missed!');
        }
    }

    function end(array) {
        console.log(`${array.join('|')}`);
    }

    while (input.length > 0) {
        let [command, index, number] = input.shift().split(` `);
        index = Number(index);
        number = Number(number);

        switch (command) {
            case 'End':
                end(target);
                break;
            case 'Shoot':
                shoot(target, index, number);
                break;
            case 'Add':
                add(target, index, number);
                break;
            case 'Strike':
                strike(target, index, number);
                break;
        }
    }
}

movingTarget(['1 2 3 4 5 6'
    , 'Strike 2 3'
    , 'Add 0 22'
    , 'Add 0 40'
    , 'Add 0 50'
    , 'End']
);