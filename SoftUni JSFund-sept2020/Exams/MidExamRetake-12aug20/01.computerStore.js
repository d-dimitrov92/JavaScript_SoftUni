function comp(input) {
    let command = input.shift();
    let sum = 0;
    while (command != 'special' && command != 'regular') {
        if (Number(command) <= 0) {
            console.log('Invalid price!');
        } else {
            sum += Number(command);
        }
        command = input.shift();
    }
    let tax = sum * 0.2;
    let fullPrice = sum + tax;

    if (command == 'special') {
        fullPrice = fullPrice - fullPrice * 0.1
    }
    if (sum == 0) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${fullPrice.toFixed(2)}$`);
    }
}