function odd(array) {
    let words = array.toLowerCase().split(' ');
    let wordsObj = new Map();
    for (const word of words) {
        wordsObj.set(word, 0);
    }
    for (const word of words) {
        if (wordsObj.has(word)) {
            wordsObj.set(word, wordsObj.get(word) + 1)
        }
    }
    let keys = Array.from(wordsObj.keys())
        .filter(x => wordsObj.get(x) % 2 != 0);
    console.log(keys.join(' '));
}

odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');