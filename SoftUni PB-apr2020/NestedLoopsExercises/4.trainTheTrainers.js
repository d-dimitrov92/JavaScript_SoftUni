function train(input) {
    let judge = Number(input.shift());
    let isFinished = false;
    let sum = 0;
    let gradeString = '';
    let total = 0;
    let count = 0;

    while (!isFinished) {
        let presentationName = input.shift();
        if(presentationName == "Finish"){
            isFinished = true;
            break;
        }
        sum = 0;
        for (let i = 0; i < judge; i++) {
            gradeString = input.shift();
            let grade = Number(gradeString);
            sum += grade;
        }
        let averagePresentationGrade = sum / judge;
        total += averagePresentationGrade;
        count++;
        console.log(`${presentationName} - ${averagePresentationGrade.toFixed(2)}.`);
    }
    let totalAverage = total / count;
    console.log(`Student's final assessment is ${totalAverage.toFixed(2)}.`)
}
train([
    '2',        'While-Loop',
    '6.00',     '5.50',
    'For-Loop', '5.84',
    '5.66',     'Finish'
  ])