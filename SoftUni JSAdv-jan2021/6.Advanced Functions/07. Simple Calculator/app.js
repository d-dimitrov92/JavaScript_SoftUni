function calculator() {
    let firstElement;
    let secondElemnt;
    let resultElement;
    return  {
        init: (selector1, selector2, resultSelector) => {
            firstElement = document.querySelector(selector1);
            secondElemnt = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);
        },
        add: () => {
            resultElement.value = Number(firstElement.value) + Number(secondElemnt.value);
        },
        subtract: () => {
            resultElement.value = Number(firstElement.value) - Number(secondElemnt.value);
        }
    }
}
let calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 