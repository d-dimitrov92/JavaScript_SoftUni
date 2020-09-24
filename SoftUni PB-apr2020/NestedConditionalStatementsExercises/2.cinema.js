function cinema(typeAsString,rowsAsString, columnsAsString ) {
    let type = typeAsString;
    let rows = Number(rowsAsString);
    let columns =  Number(columnsAsString);
    let income = 0;
    let area = rows * columns;

    switch(type) {
        case "Premiere": {
            income += area * 12;
        } break;
        case "Normal": {
            income += area * 7.5;
        } break;
        case "Discount": {
            income += area * 5;
        } break;
    }
    console.log(`${income.toFixed(2)} leva`)
}

cinema(
    "Premiere",
    "10",
    "12",
    )