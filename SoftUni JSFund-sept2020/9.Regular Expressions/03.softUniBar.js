function bar(array) {
    let total = 0;
    for (const line of array) {
        let validPattern = /%(?<name>[A-Z][a-z]+)%([^\$\|%\.]+)?<(?<product>\w+)>([^\$\|%\.]+)?\|(?<quantity>\d+)\|([^\$\|%\.\d]+)?(?<price>\d+(\.\d+)?)\$/g;
        let match = validPattern.exec(line);
        if (match) {
            let totalForPerson = Number(match.groups.quantity) * Number(match.groups.price);
            total += totalForPerson;
            console.log(`${match.groups.name}: ${match.groups.product} - ${totalForPerson.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

bar(['%InvalidName%<Croissant>|2|10.3$', '%Peter%<Gum>1.3$', '%Maria%<Cola>|1|2.4', '%Valid%<Valid>valid|10|valid20$', 'end of shift']);