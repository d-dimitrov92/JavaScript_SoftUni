function magic(array) {
    let rowSums = [];
    let colSums = [];

    for (let i = 0; i < array.length; i++) {
        let row = array[i];
        let sum = row.reduce((result, curr) => (result + curr), 0);
        rowSums.push(sum);
    }

    for (let i = 0; i < array.length; i++) {
        let newRow = [];
        for (let y = 0; y < array.length; y++) {
            newRow.push(array[y][i]);
        }
        let sum = newRow.reduce((result, curr) => (result + curr), 0)
        colSums.push(sum);
    }
    let result = rowSums.concat(colSums).every((el, i, arr) => el == arr[0]);
    return result;
}

console.log(magic([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
));
console.log('--------');
console.log(magic([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
));




// let isRowEqual = true;
//     let isColumnEqual = true;
//     let firstXSum = array[0].reduce((c, p) => c + p);
//     for (let i = 0; i < array.length; i++) {
//         let rowSum = 0
//         for (let j = 0; j < array[i].length; j++) {
//             rowSum += array[i][j];
//             if (j == array[i].length - 1 && rowSum != firstXSum) {
//                 isRowEqual = false;
//             }
//         }
//     }
//     let firstYSum = array[0][0] + array[1][0] + array[2][0];
//     for (let i = 0, j = 0; i < array.length; i++) {
//         let colSum = 0
//         for (j; j < array.length; j++) {
//             colSum += array[j][i];
//             if (j == array.length && colSum != firstYSum) {
//                 isColumnEqual = false;
//             }
//         }
//     }

//     return isRowEqual && isColumnEqual ? true : false;