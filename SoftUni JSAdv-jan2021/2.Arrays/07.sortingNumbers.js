function sorting(array) {
    let result = [];
    array.sort((a, b) => a - b)
    while (array.length > 0){
        let first = array.shift();
        let last = array.pop();
        result.push(first);
        result.push(last);
    }
    return result;
}

console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));