function solve(arg1, arg2) {
    let numberOfStudents = Number(arg1);
    let seasons = Number(arg2);
    let afterFirstExam = 0;
    let afterSecondExam = 0;
    let toNextSeason = 0;
    let totalForNextSeason = 0;
    let newSeasonStudents = numberOfStudents;

    for (let i = 1; i <= seasons; i++) {
        afterFirstExam = Math.ceil(newSeasonStudents * 0.9);
        afterSecondExam = Math.ceil(afterFirstExam * 0.9);
        toNextSeason = Math.ceil(afterSecondExam * 0.8);
        
        if(i % 3 !== 0){
            totalForNextSeason = Math.ceil (toNextSeason * 0.05) + toNextSeason;
        } else {
            totalForNextSeason = Math.ceil (toNextSeason * 0.15) + toNextSeason;
        }
        newSeasonStudents = totalForNextSeason;
    }
    console.log(`Students: ${totalForNextSeason}`)
}
solve ("100", "6")