class Ticket {
    private destination: string;
    private price: number;
    private status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}


function allTickets(tickets: Array<any>, sortCriteria: string) {
    let newTicketsArray = [];
    tickets.map(ticket => {
        let [destination, price, status] = ticket.split('|');
        price = Number(price);
        newTicketsArray.push(new Ticket(destination, price, status));
    });

    if (sortCriteria == 'price') {
        newTicketsArray.sort((a, b): any => {
            return b.price - a.price;
        });
    } else if (sortCriteria == 'status') {
        newTicketsArray.sort((a, b): any => {
            return a.status.localeCompare(b.status);
        });
    } else if (sortCriteria == 'destination') {
        newTicketsArray.sort((a, b): any => {
            return a.destination.localeCompare(b.destination);
        });
    }

    return newTicketsArray;

}
console.log(
    allTickets([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
        'status'
    ));