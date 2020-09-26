function round(num, precision){
    let result = 0;
    if(precision > 15){
        precision = 15;
    }

    result = num.toFixed(precision);
    console.log(parseFloat(result));
}


round(10.5,3)