function store(array) {
    let sortedList = array.slice(0).sort((a, b) => a.localeCompare(b));
    let initial = sortedList[0][0];
    let result = initial + '\n'
    for (const item of sortedList) {
        [product, price] = item.split(' : ');
        if(product[0] == initial){
            result += `  ${product}: ${price}\n`;
        }else {
            initial = product[0];
            result += `${product[0]}\n  ${product}: ${price}\n`
        }
    }

    return result;
}

console.log(store(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));