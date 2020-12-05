function chat(array) {
    let actions = {
        InsertSpace(text, index) {
            let first = text.slice(0, index);
            let second = text.slice(index);
            text = first + ' ' + second;
            console.log(text);
            return text;
        },
        Reverse(text, substring) {
            if (text.includes(substring)) {
                let index = text.indexOf(substring);
                let first = text.slice(0, index);
                let end = index + substring.length;
                let second = text.slice(index, end).split('').reverse().join('');
                let third = text.slice(end);
                if (third.length <= 0) {
                    text = first + second;
                    console.log(text);
                    return text;
                } else {
                    text = first + second + third;
                    console.log(text);
                    return text;
                }
            } else {
                console.log('error');
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


chat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);