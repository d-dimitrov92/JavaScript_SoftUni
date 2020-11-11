function weapon(array) {
    let particles = array.shift().split('|');
    let command = array.shift();
    let checkOdd = [];
    let checkEven = [];
    let isChecked = false;
    let isCheckedOdd = false;
    let isCheckedEven = false;

    while (command != 'Done') {
        let splitted = command.split(' ');
        if (splitted[0] == 'Move') {
            if (splitted[1] == 'Left') {
                particles = moveLeft(command, particles);
            } else if (splitted[1] == 'Right') {
                particles = moveRight(command, particles);
            }
        }
        if (splitted[0] == 'Check') {
            if (particles.length > 1) {
                isChecked = true;
            }
            if (splitted[1] == 'Even') {
                isCheckedEven = true;
                checkEven = even(particles);
            } else if (splitted[1] == 'Odd') {
                isCheckedOdd = true;
                checkOdd = odd(particles);
            }
        }
        command = array.shift();
    }

    function moveLeft(action, mainWord) {
        let splited = action.split(' ');
        let index = Number(splited[splited.length - 1]);
        if (!(index <= 0 || index > mainWord.length - 1)) {
            let temp = mainWord.splice(index, 1).join('');
            mainWord.splice(index - 1, 0, temp);
        }
        return mainWord;
    }
    function moveRight(action, mainWord) {
        let splited = action.split(' ');
        let index = Number(splited[splited.length - 1]);
        if (!(index < 0 || index > mainWord.length - 2)) {
            let temp = mainWord.splice(index, 1).join('');
            mainWord.splice(index + 1, 0, temp);
        }
        return mainWord;
    }
    function even(mainWord) {
        let result = [];
        for (let i = 0; i < mainWord.length; i++) {
            if (i % 2 == 0 ) {
                result.push(mainWord[i])
            }
        }
        return console.log(result.join(' '));
    }
    function odd(mainWord) {
        let result = [];
        for (let i = 0; i < mainWord.length; i++) {
            if (i % 2 != 0) {
                result.push(mainWord[i])
            }
        }
        return console.log(result.join(' '));
    }
    
    return console.log(`You crafted ${particles.join('')}!`);
}

console.log(weapon(["ha|Do|mm|om|er",
    "Move Right 0",
    "Move Left 3",
    "Check Odd",
    "Check Even",
    "Move Left 2",
    "Move Left 10",
    "Move Left 0",
    "Done"]));
