function sum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if(sum == num){
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}
sum([6,5,3,4,3,3],
    7
);

 