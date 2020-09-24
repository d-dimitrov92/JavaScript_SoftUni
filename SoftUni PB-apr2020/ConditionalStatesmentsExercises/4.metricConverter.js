function metricConverter(arg1, arg2, arg3) {
    let value = Number(arg1);
    let inUnit = arg2;
    let outUnit = arg3;
    let result = 0;

    if (inUnit == "mm" && outUnit == "m") {
        result = value / 1000;
    } else if(inUnit == "mm" && outUnit == "cm") {
        result = value / 10;
    } else if(inUnit == "cm" && outUnit == "m") {
        result = value / 100;
    } else if(inUnit == "cm" && outUnit == "mm") {
        result = value * 10;
    } else if(inUnit == "m" && outUnit == "mm") {
        result = value * 1000;
    } else if(inUnit == "m" && outUnit == "cm") {
        result = value * 100;
    }
    console.log(result.toFixed(3));
}

metricConverter(
    150,
    "m",
    "cm"
    )