function operationsBetweenNumbers(arg1, arg2, arg3) {
    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let operator = arg3;
    let result = 0;
    let isEven;

    if (n2 === 0 && (operator === "/" || operator === "%")) {
        console.log(`Cannot divide ${n1} by zero`);
        return;
    }

    switch(operator) {
        case "+": {
            result = n1 + n2;
            if(result % 2 == 0) {
                isEven = "even";
            } else isEven = "odd";
        } break;
        case "-": {
            result = n1 - n2;
            if(result % 2 == 0) {
                isEven = "even";
            } else isEven = "odd"
        } break;
        case "*": {
            result = n1 * n2;
            if(result % 2 == 0) {
                isEven = "even";
            } else isEven = "odd"
        } break;
        case "/": {
            result = (n1 / n2).toFixed(2);
        } break;
        case "%": {
            result = n1 % n2;
        } break;
    }

    if(operator === "+" || operator === "-" || operator === "*") {
        console.log(`${n1} ${operator} ${n2} = ${result} - ${isEven}`);
    } else if (operator === "/") {
        console.log(`${n1} / ${n2} = ${result}`);
    } else if (operator === "%") {
        console.log(`${n1} % ${n2} = ${result}`)
    }
}

operationsBetweenNumbers("112", "0", "/")