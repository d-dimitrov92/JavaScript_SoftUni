function mirror(array) {
    let pattern = /(@|#)[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;
    let matches = array[0].match(pattern);
    let result = [];
    if (matches == null) {
        console.log("No word pairs found!");
        console.log("No mirror words!");
        return;
    } else console.log(`${matches.length} word pairs found!`);
    for (const match of matches) {
        let wordPattern = /\w+/g
        words = match.slice(1, -1).match(wordPattern);
        let firstWord = words[0];
        let firstWordReversed = firstWord.split('').reverse().join('');
        if (firstWordReversed == words[1]) {
            let pair = firstWord + ' <=> ' + words[1];
            result.push(pair);
        }
    }
    if (result.length <= 0) {
        console.log("No mirror words!");
    }else console.log(`The mirror words are:\n` + result.join(', '));
}

mirror([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);