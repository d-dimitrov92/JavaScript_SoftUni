function charsInRange(firstChar, secondChar) {
    let smallest = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let biggest = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let result = '';
    for (let i = smallest + 1; i < biggest; i++) {
        result += String.fromCharCode(i) + ' ';
    }
    return result;
}
console.log(charsInRange('#',':'));
