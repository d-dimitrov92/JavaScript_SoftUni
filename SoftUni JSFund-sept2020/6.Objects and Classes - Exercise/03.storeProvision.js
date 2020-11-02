function store(stock, delivery) {
    let shop = {};
    for (let i = 0; i < stock.length; i += 2) {
        const element = stock[i];
        shop[element] = Number(stock[i + 1]);
    }
    for (let i = 0; i < delivery.length; i += 2) {
        const element = delivery[i];
        if (shop.hasOwnProperty(element)) {
            shop[element] += Number(delivery[i + 1]);
        } else {
            shop[element] = Number(delivery[i + 1]);
        }
    }

    Object.keys(shop).forEach(key => {
        console.log(`${key} -> ${shop[key]}`);
    });
}

store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);