function passwordValidator(pass) {
    result = '';
    let counter = 0;

    passLength(pass);
    chekForSymbols(pass);
    chekForDigits(pass);

    function passLength(firstCond) {
        if (firstCond.length >= 6 && firstCond.length <= 10) {
            return true;
        } else {
            result += 'Password must be between 6 and 10 characters' + '\n';
            return result;
        }
    }

    function chekForSymbols(secondCond) {
        for (const el of secondCond) {
            let isValid = true;
            let code = el.charCodeAt();
            if (code >= 40 && code <= 57 ||
                code >= 65 && code <= 90 ||
                code >= 97 && code <= 122) {
                isValid = true;
            } else {
                result += 'Password must consist only of letters and digits' + '\n';
                return result;
            }
        }
    }

    function chekForDigits(thirdCond) {
        for (const el of thirdCond) {
            let numEl = Number(el);
            if (el == numEl) {
                counter++;
            }
        }
        if (counter < 2) {
            result += 'Password must have at least 2 digits' + '\n';
        }
        return result;
    }
    if (result == '') {
        result += "Password is valid";
    }
    return result;
}

console.log(passwordValidator('Pa2s'));

// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"

