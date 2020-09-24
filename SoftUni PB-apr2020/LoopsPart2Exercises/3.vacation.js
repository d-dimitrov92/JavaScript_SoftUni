function vacation(input) {
    let neededMoney = Number(input.shift());
    let availableMoney = Number(input.shift());
    let action = input.shift();
    let dayMoney = Number(input.shift());
    let spendDay = 0;
    let savedMoney = availableMoney;
    let dayCounter = 1;
    let isSpent = false;
    if(availableMoney >= neededMoney){
        console.log(`You saved the money for ${dayCounter} days.`);
        return;
    }

    if (action == "spend") {
        spendDay++;
        savedMoney -= dayMoney;
        if(savedMoney < 0){
            savedMoney = 0;
        }
        if (spendDay == 5) {
            isSpent = true;
            console.log("You can't save the money.");
            console.log(`${spendDay}`);
        }
    } else if (action == "save") {
        spendDay = 0;
        savedMoney += dayMoney;
        // if(savedMoney >= neededMoney){
        //     console.log("brada")
        // }
    }

    while (savedMoney < neededMoney && spendDay < 5) {
        dayCounter++;
        action = input.shift();
        dayMoney = Number(input.shift());
        if (action == "spend") {
            spendDay++;
            savedMoney -= dayMoney;
            if(savedMoney < 0){
                savedMoney = 0;
            }
            if (spendDay == 5) {
                isSpent = true;
                console.log("You can't save the money.");
                console.log(`${dayCounter}`);
                break;
            }
        } else if (action == "save") {
            spendDay = 0;
            savedMoney += dayMoney;
            if(savedMoney >= neededMoney){
                break;
            }
        }
    }
    if(!isSpent) console.log(`You saved the money for ${dayCounter} days.`);
}
vacation([
    '110',   '60',    'spend',
    '10',    'spend', '10',
    'spend', '10',    'spend',
    '10',    'spend', '10'
  ])