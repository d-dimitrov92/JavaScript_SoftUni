function sum(arg) {
    let n = Number(arg);
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i * i;
    }
    console.log(result);
}

sum("4")