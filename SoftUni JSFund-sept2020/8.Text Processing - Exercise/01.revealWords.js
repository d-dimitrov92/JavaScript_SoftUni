function words(words, text) {
    words = words.split(', ');
    for (const word of words) {
        let wordToReveal = '*'.repeat(word.length);
        text = text.replace(wordToReveal, word);
    }
    console.log(text);
}
words('great, learning',
    'softuni is ***** place for ******** new programming languages');