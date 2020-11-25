function words(word, string) {
    word = word.toLowerCase();
    string = string.toLowerCase().split(' ');
    if (string.includes(word)) {
        console.log(word);
    } else console.log(`${word} not found!`);
}

words('javascript',
    'JavaScript is the best programming language');