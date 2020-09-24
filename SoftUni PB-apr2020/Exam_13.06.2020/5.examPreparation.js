function solve(arg1, arg2, arg3) {
    let numberOfStudents = Number(arg1);
    let numberOfTasks = Number(arg2);
    let trainerEnergy = Number(arg3);
    let isTrainerTired = false;
    let isTrainerWins = false;
    let taskCounter = 0;
    let questions = 0;

    while (numberOfStudents > 10 && trainerEnergy > 0) {
        trainerEnergy += 2 * numberOfTasks;
        numberOfStudents -= numberOfTasks;
        taskCounter += numberOfTasks;
        trainerEnergy -= numberOfStudents * 2 * 3;
        questions += numberOfStudents *2;
        if(numberOfStudents < 10){
            isTrainerWins = true;
            break;
        } else {
            numberOfStudents += Math.floor(numberOfStudents / 10);
        }
    }
    if(isTrainerWins){
        console.log("The students are too few!")
        console.log(`Problems solved: ${taskCounter}`)
    } else {
        console.log("The trainer is too tired!")
        console.log(`Questions asked: ${questions}`)
        
    }
}
solve("20", "1", "100")