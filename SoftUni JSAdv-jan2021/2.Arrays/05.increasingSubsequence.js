function sub(array) {
    let temp = 0;
    let result = [];
    for (const item of array) {
        if(item >= temp){
            temp = item;
            result.push(temp)
        }
    }
    return result;
}

console.log(sub([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));