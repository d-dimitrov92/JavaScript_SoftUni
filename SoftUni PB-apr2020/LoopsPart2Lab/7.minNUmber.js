function min(input) {
    let n = Number(input.shift());
    let minNumber = Number.MAX_SAFE_INTEGER;
    let counter = 1;

    while(counter <= n) {
        let num1 = Number(input.shift());
        if(num1 < minNumber){
            minNumber = num1;
        }
        counter++;
    }
    console.log(minNumber);
}
min(["3", "100", "99", "-10"])