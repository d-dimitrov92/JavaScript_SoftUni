function solve(arg1, arg2, arg3) {
    let task = arg1;
    let points = Number(arg2);
    let course = arg3;
    totalPoints = 0;

    switch (course) {
        case "Basics": {
            if (task == "1") {
                totalPoints += points * 0.08;
                totalPoints -= totalPoints * 0.2
            } else if (task == "2" || task == "3"){
                totalPoints += points * 0.09;
            } else if( task == "4"){
                totalPoints += points * 0.1;
            }
        } break;
        case "Fundamentals": {
            if(task == "1" || task == "2"){
                totalPoints += points * 0.11;
            } else if(task == "3"){
                totalPoints += points * 0.12;
            } else if(task == "4"){
                totalPoints += points * 0.13;
            }

        } break;
        case "Advanced": {
            if(task == "1"||task == "2"){
                totalPoints += points * 0.14;
                totalPoints += totalPoints * 0.2;
            } else if(task == "3"){
                totalPoints += points * 0.15;
                totalPoints += totalPoints * 0.2;
            } else if(task == "4"){
                totalPoints += points * 0.16;
                totalPoints += totalPoints * 0.2;
            }
        } break;
    }
    console.log(`Total points: ${totalPoints.toFixed(2)}`)
}
solve("1", "100", "Basics"
)