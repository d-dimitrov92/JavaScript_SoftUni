function tracker(array) {
    let words = array.shift().split(' ');
    let wordsObj = {};

    for (const word of words) {
        wordsObj[word] = 0;
    }
    for (const item of array) {
        if (wordsObj.hasOwnProperty(item)) {
            wordsObj[item]++;
        }
    }

    let keysArr = Object.keys(wordsObj)
        .sort((a, b) => wordsObj[b] - wordsObj[a])
        .forEach(el => {
            console.log(`${el} - ${wordsObj[el]}`);
        })
}

tracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);