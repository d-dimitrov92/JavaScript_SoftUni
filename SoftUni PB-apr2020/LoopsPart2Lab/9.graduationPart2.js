function gradiuation(input) {
    let name = input.shift();
    let count = 1;
    let total = 0;

    while(count <= 12) {
        let grade = Number(input.shift());
        if(grade < 4.00) {
            console.log(`${name} has been excluded at ${count} grade`);
            return;
        }
        total += grade;
        count++;
    }
    let average = total / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`)
}
gradiuation([
    'Mimi', '5', '6',
    '5',    '6', '5',
    '6',    '6', '2',
    '3'
  ])