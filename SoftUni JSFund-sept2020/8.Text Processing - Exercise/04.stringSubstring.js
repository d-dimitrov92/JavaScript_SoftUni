function words(word, string) {
    let compWord = word.toLowerCase();
    string = string.toLowerCase();
    if(string.includes(compWord)){
        console.log(word);
        return
    } else console.log(`${word} not found!`);
}