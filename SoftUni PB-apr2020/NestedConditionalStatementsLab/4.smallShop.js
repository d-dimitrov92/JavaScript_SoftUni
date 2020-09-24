function smallShop(productAsString, cityAsString, quantityAsString) {
    let product = productAsString;
    let city = cityAsString;
    let quantity = Number(quantityAsString);
    let result = 0;

    switch(product) {
        case "coffee": {
            if(city === "Sofia"){
                result = quantity * 0.5;
            }else if(city === "Plovdiv"){
                result = quantity * 0.4;
            } else if(city === "Varna"){
                result = quantity * 0.45;
            }
        } break;
        case "water": {
            if (city === "Sofia") {
                result = quantity * 0.8;
            } else if (city === "Plovdiv") {
                result = quantity * 0.7;
            } else if (city === "Varna") {
                result = quantity * 0.7;
            }
        } break;
        case "beer": {
            if (city === "Sofia") {
                result = quantity * 1.2;
            } else if (city === "Plovdiv") {
                result = quantity * 1.15;
            } else if (city === "Varna") {
                result = quantity * 1.10;
            }
        } break;
        case "sweets": {
            if (city === "Sofia") {
                result = quantity * 1.45;
            } else if (city === "Plovdiv") {
                result = quantity * 1.3;
            } else if (city === "Varna") {
                result = quantity * 1.35;
            }
        } break;
        case "peanuts": {
            if (city === "Sofia") {
                result = quantity * 1.6;
            } else if (city === "Plovdiv") {
                result = quantity * 1.5;
            } else if (city === "Varna") {
                result = quantity * 1.55;
            }
        } break;
    }
    console.log(result);
}

smallShop(
"coffee",
"Varna",
"2",
)