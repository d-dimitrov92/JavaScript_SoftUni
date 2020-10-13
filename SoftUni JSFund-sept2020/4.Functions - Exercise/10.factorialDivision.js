function factorialDivision(num, div){
    let result = 1;
    let fact = (num) => {
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    
    return (fact(num) / div).toFixed(2);
}

console.log(factorialDivision(8, 2));