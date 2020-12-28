function solve(array) {
    let string = array.shift();
    let line;
    while ((line = array.shift()) != 'End') {
        let tokens = line.split(' ');
        let command = tokens[0];
        if (command == 'Translate') {
            let char = tokens[1];
            let replacement = tokens[2];
            let index = string.indexOf(char);
            while (index != -1) {
                string = string.replace(char, replacement);
                index = string.indexOf(char)
            }
            console.log(string);
        } else if (command == 'Includes') {
            let otherString = tokens[1];
            if (string.includes(otherString)) {
                console.log('True');
            } else console.log(('False'));
        } else if (command == 'Start') {
            let otherString = tokens[1];
            let index = string.indexOf(otherString);
            if (index == 0) {
                console.log('True');
            } else console.log('False');
        } else if (command == 'Lowercase') {
            string = string.toLowerCase();
            console.log(string);
        } else if (command == 'FindIndex') {
            let char = tokens[1];
            let index = string.lastIndexOf(char);
            console.log(index);
        } else if (command == 'Remove') {
            let startIndex = Number(tokens[1]);
            let count = Number(tokens[2]);
            let endIndex = startIndex + count
            let first = string.slice(0, startIndex);
            let second = string.slice(endIndex);
            string = first + second
            console.log(string);
        }
    }
}

// solve([
//     '//Thi5 I5 MY 5trING!//',
//     'Translate 5 s',
//     'Includes string',
//     'Start //This',
//     'Lowercase',
//     'FindIndex i',
//     'Remove 0 10',
//     'End'
// ]);

solve(['0123456789',
    'Remove 2 1',
    'End'
]);