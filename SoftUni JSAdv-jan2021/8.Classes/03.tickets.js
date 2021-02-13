function tickets(array, sortRule) {
    let list = [];
    for (const line of array) {
        [destination, price, status] = line.split('|');
        class Ticket {
            constructor(destination, price, status) {
                this.destination = destination;
                this.price = Number(price);
                this.status = status;
            }
        }
        list.push(new Ticket(destination, price, status))
    }
    const sortMapper = {
        'destination': (a,b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status)
    }

    return list.sort(sortMapper[sortRule]);
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
));