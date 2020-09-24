function cinema(input) {
    let filmName = input.shift();
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    let totalTicketsSold = 0;

    while (filmName !== "Finish") {
        let saloonCapacity = Number(input.shift());
        let ticketType = input.shift();
        let filmSold = 0;

        while (ticketType !== "End" && filmSold < saloonCapacity) {
            switch (ticketType) {
                case "student": {
                    studentTickets++;
                } break;
                case "standard": {
                    standardTickets++;
                } break;
                case "kid": {
                    kidTickets++;
                } break;
            }
            filmSold++;
            totalTicketsSold++;
            ticketType = input.shift();
            if (ticketType === "Finish") {
                break;
            }
        }
        let percentFilmSold = filmSold / saloonCapacity * 100;
        console.log(`${filmName} - ${percentFilmSold.toFixed(2)}% full.`);

        if (ticketType !== "Finish") {
            filmName = input.shift();
        } else filmName = ticketType;
    }
    let percentStudentTickets = studentTickets / totalTicketsSold * 100;
    let percentStandardTickets = standardTickets / totalTicketsSold * 100;
    let percentKidTickets = kidTickets / totalTicketsSold * 100;

    console.log(`Total tickets: ${totalTicketsSold}`);
    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentKidTickets.toFixed(2)}% kids tickets.`);
}
cinema([
    'Taxi', '10',
    'standard', 'kid',
    'student', 'student',
    'standard', 'standard',
    'End', 'Scary Movie',
    '6', 'student',
    'student', 'student',
    'student', 'student',
    'student', 'Gosho'
])