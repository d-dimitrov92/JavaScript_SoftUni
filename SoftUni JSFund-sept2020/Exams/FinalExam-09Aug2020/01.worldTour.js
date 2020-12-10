// function tour(array) {
//     let string = array.shift();
//     let isReady = false;
//     let line;
//     while ((line = array.shift()) != 'Travel') {
//         let tokens = line.split(':');
//         let command = tokens[0];

//         if (command == 'Add Stop') {
//             let index = Number(tokens[1]);
//             if (index < string.length) {
//                 let substring = tokens[2];
//                 let first = string.slice(0, index);
//                 let last = string.slice(index);
//                 string = first + substring + last;
//                 console.log(string);
//             }
//         } else if (command == 'Remove Stop') {
//             let startIndex = Number(tokens[1]);
//             let endIndex = Number(tokens[2]);
//             if (startIndex < string.length && endIndex < string.length) {
//                 let first = string.substring(0, startIndex);
//                 let last = string.substring(endIndex + 1);
//                 string = first + last;
//                 console.log(string);
//             }
//         } else if (command == 'Switch') {
//             let oldString = tokens[1];
//             let newString = tokens[2];
//             let indexOfOld = string.indexOf(oldString);
//             if (string.includes(oldString)) {
//                 while (indexOfOld !== -1) {
//                     string = string.replace(oldString, newString);
//                     indexOfOld = string.indexOf(oldString);
//                 }
//             }
//             console.log(string);
//         }
//     }
//     if (isReady) {
//         console.log(`Ready for world tour! Planned stops: ${string}`);
//     }
// }

function tour(input) {
    let str = input.shift();
    let isReady = true;
    for (let line of input) {
        if (line == 'Travel') {
            isReady = false;
            break;
        } else {
            let tokens = line.split(":")
            switch (tokens[0]) {
                case "Add Stop":
                    let ind = Number(tokens[1]);
                    let str1 = tokens[2];
                    if (ind < str.length) {
                        str = str.substring(0, ind).concat(str1).concat(str.substring(ind))
                    }
                    console.log(str);
                    break;
                case "Remove Stop":
                    let startInd = Number(tokens[1]);
                    let stopInd = Number(tokens[2]);
                    if (startInd < str.length && stopInd < str.length) {
                        str = str.substring(0, startInd).concat(str.substring(stopInd + 1))
                    }
                    console.log(str)
                    break;
                case "Switch":
                    let oldStr = tokens[1];
                    let newStr = tokens[2];
                    if (str.includes(oldStr)) {
                        str = str.replace(oldStr, newStr)
                    }
                    console.log(str);
                    break;
            }
        }
    }
    if (!isReady) {
        console.log(`Ready for world tour! Planned stops: ${str}`)
    }

}

tour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);