function exam(input) {
    let posibleNegativeGrades = Number(input.shift());
    let negativeGrades = 0;
    let counter = 0;
    let nameOfTask = input.shift();
    let grade = Number(input.shift());
    let totalGrade = grade;
    let lastProblem = "";
    let isNegative = false;

    if (grade <= 4) {
        negativeGrades++;
    }

    while (negativeGrades < posibleNegativeGrades) {
        counter++;
        lastProblem = nameOfTask;
        nameOfTask = input.shift();
        if (nameOfTask == "Enough") {
            break;
        }
        grade = Number(input.shift());
        totalGrade += grade;
        if (grade <= 4) {
            negativeGrades++;
            if (negativeGrades == posibleNegativeGrades) {
                isNegative = true;
                console.log(`You need a break, ${negativeGrades} poor grades.`);
                break;
            }
        }
    }
    let average = totalGrade / counter;
    if (!isNegative) {
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
exam(['2', 'Income', '3', 'Game Info', '6', 'Best Player', '4'
])