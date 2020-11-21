function odd(array) {
    let words = array.toLowerCase().split(' ');
    let wordsMap = new Map();
    for (const word of words) {
        wordsMap.set(word, 0);
    }
    for (const word of words) {
        if (wordsMap.has(word)) {
            wordsMap.set(word, wordsMap.get(word) + 1)
        }
    }
    let keys = Array.from(wordsMap.keys())
        .filter(x => wordsMap.get(x) % 2 != 0);
    console.log(keys.join(' '));
}

odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');