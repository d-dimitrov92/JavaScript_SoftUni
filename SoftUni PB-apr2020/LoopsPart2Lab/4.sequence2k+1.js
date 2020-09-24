function seq(input) {
    let n = Number(input.shift());
    let k = 1;

    while(k <= n) {
        console.log(k);
        k = k * 2 + 1;
    }
}