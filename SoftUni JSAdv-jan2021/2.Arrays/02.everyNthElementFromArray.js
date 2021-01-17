function solve(array, n) {
    const newArray = [];
    for (let i = 0; i < array.length; i+=n) {
        newArray.push(array[i]);
    }
    return newArray;
}
console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));
console.log('-----');
console.log(solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
));