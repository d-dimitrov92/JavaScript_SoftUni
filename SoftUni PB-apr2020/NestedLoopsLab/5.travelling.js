function travelling(input) {
    let destination = input.shift();
    let budget = Number(input.shift());
    let wallet = 0;

    while (destination !== "End") {
        let savings = Number(input.shift());
        wallet += savings;

        while (wallet < budget) {
            savings = Number(input.shift());
            wallet += savings;
        }
        console.log(`Going to ${destination}!`);
        destination = input.shift();
        budget = Number(input.shift());
        wallet = 0;
    }
}
travel([
    'Greece', '1000', '200',
    '200',    '300',  '100',
    '150',    '240',  'Spain',
    '1200',   '300',  '500',
    '193',    '423',  'End',
    ''
  ])