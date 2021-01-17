function list(array) {
    let result = ''
    array = array.sort((a, b) => a.localeCompare(b))
    for (let i = 1; i <= array.length; i++) {
        result += `${i}.${array[i-1]}\n`
    }

    return result;
}

console.log(list(["John", "Bob", "Christina", "Ema"]));