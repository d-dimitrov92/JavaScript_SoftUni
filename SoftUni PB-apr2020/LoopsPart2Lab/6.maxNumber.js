function max(input) {
    let n = Number(input.shift());
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let counter = 1;

    while(counter <= n) {
        let num1 = Number(input.shift());
        if(num1 > maxNumber){
            maxNumber = num1;
        }
        counter++;
    }
    console.log(maxNumber);
}
max(["3", "100", "99", "-10"])