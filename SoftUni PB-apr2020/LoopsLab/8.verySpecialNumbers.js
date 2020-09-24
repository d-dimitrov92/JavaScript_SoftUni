function number(arg1, arg2, arg3) {
    let start = Number(arg1);
    let end = Number(arg2);
    let n = Number(arg3);

    for(let i = start; i <= end; i++) {
        if(i % n !== 0) {
            console.log(i);
        } else if( i % n === 0 && i % Math.pow(n,2) !== 0) {
            console.log(`Special number: ${i}`)
        } else if (i % Math.pow(n,2) === 0) {
            console.log(`Very special number: ${i}`)
        }
    }
}

number("1", "25", "3")