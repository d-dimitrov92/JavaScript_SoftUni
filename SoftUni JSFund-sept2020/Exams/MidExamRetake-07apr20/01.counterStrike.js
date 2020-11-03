function game(array) {
    let energy = Number(array.shift());
    let command = array.shift();
    let wins = 0;

    while (command != 'End of battle' && energy > 0) {
        let distance = Number(command);
        if (wins % 3 == 0) {
            energy += wins;
        }
        if(energy < distance){
            return console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
        }
        energy -= distance;
        wins++;
        command = array.shift();
    }
    if (energy <= 0) {
        energy = 0;
        console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
    } else {
        console.log(`Won battles: ${wins}. Energy left: ${energy}`);
    }
}

game(['1'
    , '10000'
    , '14'
    , '28'
    , '10000'
    , 'End of battle']
);