function solve(array) {
    let result = {};
    let forPrint = '';
    for (const line of array) {
        [town, product, price] = line.split(' | ');
        price = Number(price);
        if (!result.hasOwnProperty(product)) {
            result[product] = { town, price }
        }
        if (result[product].town != town && result[product].price > price) {
            result[product].price = price;
            result[product].town = town;
        }
    }
    let entries = Object.entries(result);
    for (const item of entries) {
        forPrint += `${item[0]} -> ${item[1].price} (${item[1].town})\n`
    }
    return forPrint;
}

// console.log(solve(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10']
// ));
// console.log(` ----- \n`);
console.log(solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']));

