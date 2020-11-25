function splitter(text) {
    let result = '';
    let indexes = '';
    text = text.split('');
    for (let i = 0; i < text.length; i++) {
        if (text[i].charCodeAt() > 65 && text[i].charCodeAt() < 90) {
            result += ' ' + text[i];
            continue
        }
        result += text[i];
    }
    console.log(result.trim().split(' ').join(', '));
}
splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');