function sum(arg1, arg2, arg3) {
    let product = arg1;
    let number = Number(arg2);
    let budget = Number(arg3);
    let result = 0;

    for (let i = 0; i < product.length; i++) {
        switch(product[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "y": result += 3; break;
            default: result += 1; break;
        }
    }
    let price = (result * number).toFixed(2);
    let diff = Math.abs(budget - price).toFixed(2);

    if(budget < price) {
        console.log(`Cannot buy ${product}. Product value: ${price}`)
    } else console.log(`${product} bought. Money left: ${diff}`)
}

sum("milk",
    "1.4",
    "8",
    )