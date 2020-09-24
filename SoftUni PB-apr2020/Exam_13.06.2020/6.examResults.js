function solve(input) {
    let nameOfStudent = input.shift();
    let studentPoints = 0;
    let taskPts = 0;

    while (nameOfStudent != "Midnight") {

        for (let i = 0; i < 6; i++) {
            taskPts = Number(input.shift());
            if (taskPts < 0) {
                console.log(`${nameOfStudent} was cheating!`);
                nameOfStudent = input.shift();
                studentPoints = 0;
                break;
            }
            studentPoints += taskPts;
            
        }
        if (taskPts < 0) {
            studentPoints = 0;
            continue;
        }
        let finalPts = Math.floor(studentPoints / 600 * 100);
        let grade = finalPts * 0.06;
        if (grade >= 5) {
            console.log("===================");
            console.log("|   CERTIFICATE   |");
            console.log(`|    ${grade.toFixed(2)}/6.00    |`);
            console.log("===================");
            console.log(`Issued to ${nameOfStudent}`)
        } else if (grade < 5) {
            console.log(`${nameOfStudent} - ${Math.max(2.00, grade).toFixed(2)}`);
        }
        nameOfStudent = input.shift();
        studentPoints = 0;
    }
}


solve([ 'Andy', '50', '50', '20', '10', '10', '0', 'Midnight' ])