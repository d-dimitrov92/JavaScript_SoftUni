var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function allTickets(tickets, sortCriteria) {
    var newTicketsArray = [];
    tickets.map(function (ticket) {
        var _a = ticket.split('|'), destination = _a[0], price = _a[1], status = _a[2];
        price = Number(price);
        newTicketsArray.push(new Ticket(destination, price, status));
    });
    if (sortCriteria == 'price') {
        newTicketsArray.sort(function (a, b) {
            return b.price - a.price;
        });
    }
    else if (sortCriteria == 'status') {
        newTicketsArray.sort(function (a, b) {
            return a.status.localeCompare(b.status);
        });
    }
    else if (sortCriteria == 'destination') {
        newTicketsArray.sort(function (a, b) {
            return a.destination.localeCompare(b.destination);
        });
    }
    return newTicketsArray;
}
console.log(allTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status'));
