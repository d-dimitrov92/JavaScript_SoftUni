function pass(array) {
    let password = array.shift();
    for (const line of array) {
        if (line == 'Done') {
            break;
        }
        let tokens = line.split(' ');
        let command = tokens[0];
        if (command == 'TakeOdd') {
            password = password.split('');
            let result = '';
            for (let i = 0; i < password.length; i++) {
                if (i % 2 == 1) {
                    result += password[i];
                }
            }
            password = result;
            console.log(password)
        } else if (command == 'Cut') {
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);
            password = password.substring(0, index) + password.substring(index + length);
            console.log(password);
        } else if (command == 'Substitute') {
            let substring = tokens[1];
            let substitute = tokens[2];
            if (password.includes(substring)) {
                index = password.indexOf(substring)
                while (index != -1) {
                    password = password.replace(substring, substitute);
                    index = password.indexOf(substring);
                }
                console.log(password)
            } else {
                console.log("Nothing to replace!")
            }
        }
    }
    console.log(`Your password is: ${password}`)
}

pass([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
]);

console.log(`----`);

pass([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
]);