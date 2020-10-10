function arrRot(arr, num){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(i >= num){
            newArr.push(arr[i]);
        }
    }
    for (let j = 0; j < num; j++) {
        newArr.push(arr[j])
    }
    console.log(newArr.join(' '));
}

arrRot([2, 4, 15, 31], 5);