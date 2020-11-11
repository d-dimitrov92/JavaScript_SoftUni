function court(array) {
    let firstEmployee = Number(array[0]);
    let secondEmployee = Number(array[1]);
    let thirdEmployee = Number(array[2]);
    let totalEficiency = firstEmployee + secondEmployee + thirdEmployee;
    let clients = Number(array[3]);
    let timeForBreak = 0;

    let hours = clients / totalEficiency;
    if (hours > 3) {
        for (let i = 0; i < hours; i++) {
            if (i % 4 == 0) {
                timeForBreak++;
            }
        }
    }
    if (clients % totalEficiency > 4) {
        timeForBreak--;
    }
    let totalTime = Math.ceil(timeForBreak + hours);
    console.log(`Time needed: ${totalTime}h.`);
}

court(['1', '2', '3', '45']);