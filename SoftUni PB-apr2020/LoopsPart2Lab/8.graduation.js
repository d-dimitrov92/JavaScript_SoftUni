function graduation(input) {
    let name = input.shift();
    let count = 1;
    let total = 0;

    while(count <= 12) {
        let currentGrade = Number(input.shift());
        if(currentGrade < 4.00){
            continue;
        }
        total += currentGrade;
        count++;
    }
    let lastGrade = total / 12;
        console.log(`${name} graduated. Average grade: ${lastGrade.toFixed(2)}`)
}

graduation([
    'Ani', '5',    '5.32',
    '6',   '5.43', '5',
    '6',   '5.5',  '4.55',
    '5',   '6',    '5.56',
    '6',   '5'
  ])