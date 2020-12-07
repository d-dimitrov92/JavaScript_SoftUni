function chat(array) {
    let actions = {
        InsertSpace(text, index) {
            //let first = text.slice(0, index);
            //let second = text.slice(index);
            text = text.substring(0, Number(index)) + ' ' + text.substring(Number(index));
            console.log(text);
            return text;
        },
        Reverse(text, substring) {
            if (text.includes(substring)) {
                let index = text.indexOf(substring);
                let first = text.slice(0, index);
                let end = index + substring.length;
                let third = text.slice(end);
                let second = text.slice(index, end).split('').reverse().join('');
                if (third.length <= 0) {
                    text = first + second;
                    console.log(text);
                    return text;
                } else {
                    text = first + third + second;
                    console.log(text);
                    return text;
                }
            } else {
                console.log('error');
                return text;
            }
        },
        ChangeAll(text, substring, replacement) {
            while (text.indexOf(substring) != -1) {
                text = text.replace(substring, replacement);
            }
            console.log(text);
            return text;
        }
    };
    let text = array.shift();
    let line;
    while ((line = array.shift()) != 'Reveal') {
        [command, ...params] = line.split(':|:');
        let action = actions[command];
        text = action(text, ...params);
    }
    console.log(`You have a new text message: ${text}`);
}


// chat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]);

//console.log('---');

chat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);