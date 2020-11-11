function messaging(array) {
    let line = array.shift();
    let command = line.split(' ')[0];
    let result = [];

    while (line != 'end') {
        command = line.split(' ')[0];
        if (command == 'Chat') {
            result.push(chat(line));
        } else if (command == 'Delete') {
            toDelete(result, line);
        } else if (command == 'Edit') {
            edit(line, result);
        } else if (command == 'Pin') {
            pin(line, result);
        } else if (command == 'Spam') {
            spam(line, result)
        }

        line = array.shift();
    }

    function chat(arr) {
        let message = arr.split(' ')
        message.splice(0, 1);
        return message.join(' ');
    }
    function toDelete(res, fromLine) {
        let message = fromLine.split(' ');
        message.splice(0, 1);
        isIn = res.includes(message.join(''));
        let index = res.indexOf(message.join(''))
        if (isIn) {
            for (let i = 0; i < res.length; i++) {
                if (i == index) {
                    res.splice(index, 1);
                }
            }
            return res;
        }
    }
    function edit(arr, res) {
        let messageToEdit = arr.split(' ')[1];
        let editedVersion = arr.split(' ')[2];
        let index = res.indexOf(messageToEdit);
        res.splice(index, 1, editedVersion);
        return res;
    }
    function pin(arr, res) {
        let message = arr.split(' ');
        message.splice(0, 1);
        if (res.includes(message.join(''))) {
            let index = res.indexOf(message.join(''));
            let temp = res.splice(index, 1);
            res.push(temp);
            return res;
        }
    }
    function spam(arr, res) {
        let message = arr.split(' ');
        message.splice(0, 1);
        for (const item of message) {
            res.push(item)
        }
        return res;
    }

    return result.join('\n');
}

console.log(messaging((["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"])
));