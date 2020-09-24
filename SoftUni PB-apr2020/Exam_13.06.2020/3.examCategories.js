function solve(arg1, arg2, arg3) {
    let difficulty = Number(arg1);
    let rotation = Number(arg2);
    let pages = Number(arg3);

    if (difficulty >= 80 && rotation >= 80 && pages >= 8) {
        console.log('Legacy');
    } else if (difficulty >= 80 && rotation <= 10) {
        console.log('Master');
    } else if (rotation >= 50 && pages >= 2){
        console.log('Hard');
    } else if(difficulty <= 30 && difficulty >10 && pages <= 1){
        console.log('Easy');
    } else if(difficulty <= 10){
        console.log('Elementary');
    } else console.log('Regular');
}

solve(10, 50 , 10)