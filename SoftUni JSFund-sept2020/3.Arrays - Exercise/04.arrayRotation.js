function arrRot(arr, num){
    for (let i = 0; i < num; i++) {
        const el = arr.shift();
        arr.push(el);
        }
    console.log(arr.join(' '));
}

arrRot([2, 4, 15, 31], 5);