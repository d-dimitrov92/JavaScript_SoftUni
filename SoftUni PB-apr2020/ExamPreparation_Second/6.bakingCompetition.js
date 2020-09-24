function baking(input) {
    let competitors = Number(input.shift());
    let cakes = 0;
    let cookies = 0;
    let waffles = 0;
    let totalBakerySold = 0;
    let totalSum = 0;

    for (let i = 0; i < competitors; i++) {
        let nameOfCompetitor = input.shift();
        let command = input.shift();

        while (command != "Stop baking!") {
            let typeOfSweet = command;
            let numberOfSweets = Number(input.shift());

            switch (typeOfSweet) {
                case "cookies": {
                    cookies += numberOfSweets;
                    totalBakerySold += numberOfSweets;
                    totalSum += numberOfSweets * 1.5;
                } break;
                case "cakes": {
                    cakes += numberOfSweets;
                    totalBakerySold += numberOfSweets;
                    totalSum += numberOfSweets * 7.8;
                } break;
                case "waffles": {
                    waffles += numberOfSweets;
                    totalBakerySold += numberOfSweets;
                    totalSum += numberOfSweets * 2.3;
                } break;
            }

            command = input.shift();

        }
        console.log(`${nameOfCompetitor} baked ${cookies} cookies, ${cakes} cakes and ${waffles} waffles.`);

        cookies = 0;
        cakes = 0;
        waffles = 0;
    }
    console.log(`All bakery sold: ${totalBakerySold}`);
    console.log(`Total sum for charity: ${totalSum.toFixed(2)} lv.`);
}
baking([
    '3', 'Iva',
    'cookies', '5',
    'cakes', '3',
    'Stop baking!', 'George',
    'cakes', '7',
    'waffles', '2',
    'Stop baking!', 'Ivan',
    'cookies', '6',
    'Stop baking!'
]

);

