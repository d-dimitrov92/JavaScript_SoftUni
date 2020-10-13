function perfectNumber(n) {
    let result = 0;
    sumDivisors(n);

    function sumDivisors(n){
        for (let i = 0; i <= n / 2; i++) {
            if(n % i == 0){
                result += i;
            }
        }
        return result;
    }
    return result == n ? 'We have a perfect number!' : "It's not so perfect.";
}

console.log(perfectNumber(3434));
