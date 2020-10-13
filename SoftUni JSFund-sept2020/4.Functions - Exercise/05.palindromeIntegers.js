function palindromeIntegers(arr) {
    let result = '';
    for (let num of arr) {
        let isPolindrom = 'true';
        let numStr = String(num);
        let mid = parseInt(numStr.length / 2);
        for (let i = 0; i <= mid; i++) {
            let lastIndex = numStr.length - 1;
            if (numStr[i] !== numStr[lastIndex - i]) {
                isPolindrom = 'false';
                break;
            }
        }
        result += isPolindrom + '\n'
    }
    return result;
}

console.log(palindromeIntegers([123, 323, 421, 121])); 