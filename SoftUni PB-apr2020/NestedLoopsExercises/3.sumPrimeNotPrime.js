function prime(input) {
    let n = input.shift();
    let sumPrime = 0;
    let sumNotPrime = 0;
    while (n != "stop") {
        n = Number(n);
        let isPrime = true;
        if (n < 0) {
            console.log("Number is negative.")
            n = input.shift();
            continue;
        } else if (n == 1){
            isPrime = false;
        }

        let maxDivider = Math.sqrt(n);
        for (let i = 2; i <= maxDivider; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            sumPrime += n;
        } else {
            sumNotPrime +=n;
        }
        n = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNotPrime}`);
    
}
prime([
    '3',    '9',
    '0',    '7',
    '19',   '4',
    'stop'
  ])