function winter(input) {                                 // ДА СЕ ПРЕГЛЕДА
    let honeyQuantity = Number(input.shift());           // 55 точки на изпита на 07.06.2020
    let command = '';
    let totalHoneyFromSingleBee = 0;
    let totalHoney = 0;
    let honeyFromBee = 0;

    while (command != "Winter has come") {
        let beeName = input.shift();
        if (beeName == "Winter has come") {
            command = beeName;
            break;
        }
        for (let i = 0; i < 6; i++) {
            honeyFromBee = Number(input.shift());
            totalHoneyFromSingleBee += honeyFromBee;
        }
        
        if (totalHoneyFromSingleBee < 0) {
            console.log(`${beeName} was banished for gluttony`);
        } else if(totalHoneyFromSingleBee > honeyQuantity){
            totalHoney += totalHoneyFromSingleBee;
            break;
        }
        totalHoney += totalHoneyFromSingleBee;
        totalHoneyFromSingleBee = 0;
    }

    let diff = Math.abs(honeyQuantity - totalHoney);

    if (totalHoney < honeyQuantity) {
        console.log(`Hard Winter! Honey needed ${diff.toFixed(2)}.`);

    } else console.log(`Well done! Honey surplus ${diff.toFixed(2)}.`);
}

winter([
    '1000',   'Maya',
    '-50',    '-10',
    '-20.70', '20.40',
    '10.30',  '40',
    'Yama',   '50',
    '10',     '20',
    '30',     '10000',
    '100',    'Winter has come'
  ]
  
)