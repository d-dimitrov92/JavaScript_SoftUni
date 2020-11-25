function hash(text) {
    let words = text.split(' ');
    for (const word of words) {
        if (word.startsWith('#') && word.length > 1) {
            let matches = (word.split('#').join(''));
            let isOnlyChars = true
            for (const letter of matches) {
                if (letter.charCodeAt() < 65 || letter.charCodeAt() > 90 && letter.charCodeAt() < 97 || letter.charCodeAt() > 122) {
                    isOnlyChars = false;
                    break;
                }
            }
            if (isOnlyChars) {
                console.log(matches);
            }
        }
    }
}

hash('Nowadays everyone uses # to tag a #special word in #so2cialMedia');