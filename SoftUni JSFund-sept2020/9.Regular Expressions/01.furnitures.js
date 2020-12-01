function buy(array) {
    let total = 0;
    let regex = />>[A-Za-z]+<<\d+(\.\d+)?!\d+/g;
    let result = 'Bought furniture:';
    for (const line of array) {
        let match = line.match(regex);
        if (match != null) {
            [name, digits] = match.join('').split('<<');
            name = name.slice(2);
            result += '\n' + name;
            [price, quantity] = digits.split('!')
            total += price * quantity;
        }
    }
    result += '\n' + `Total money spend: ${total.toFixed(2)}`;
    console.log(result);
}

buy(['>>Sofa<<312.203!3', '>>TV<<300!5', '>Invalid<<0!0', 'Purchase']);