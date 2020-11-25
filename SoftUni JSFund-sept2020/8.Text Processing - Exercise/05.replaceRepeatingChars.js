function repChars(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] != string[i + 1] && i < string.length) {
            result += string[i];
        }
    }
    console.log(result);
}
repChars('qqqwerqwecccwd');