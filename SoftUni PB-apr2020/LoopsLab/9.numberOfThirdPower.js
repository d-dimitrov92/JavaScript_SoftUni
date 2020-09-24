function number(arg) {
    let n = Number(arg);

    if (n % 2 !== 0) {
        for (let i = 1; i <= n; i += 2) {
            let cube = i * i * i;
            console.log(`Current number: ${i}. Cube: ${cube}`)
        }
    } else if (n % 2 === 0) {
        for (let i = 2; i <= n; i += 2) {
            let cube = i * i * i;
            console.log(`Current number: ${i}. Cube: ${cube}`)
        }
    }
}
number("6")