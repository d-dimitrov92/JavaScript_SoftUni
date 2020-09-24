function walking(input) {
    let index = 0;
    let steps = input[index];
    let totalSteps = 0;
    let isGoalReached = false;
    let isGoingHome = false;

    while (!isGoingHome) {
        if (steps === "Going home") {
            isGoingHome = true;
            let stepsToHome = Number(input[index + 1]);
            totalSteps += stepsToHome;
        } else {
            totalSteps += Number(steps);
            index++;
            steps = input[index];
        }
        if (totalSteps >= 10000) {
            isGoalReached = true;
            break;
        }
    }
    if (isGoalReached) {
        console.log("Goal reached! Good job!")
    } else {
        let neededSteps = 10000 - totalSteps;
        console.log(`${neededSteps} more steps to reach goal.`)
    }
}
walking(['1500', '300', '2500', '3000', 'Going home','200'])







// let command = input.shift();
    // if (command === "Going home") {
    //     isGoingHome = true;
    // }
    // let steps = Number(command);
    // let totalSteps = steps;
    // let isReady = false;
    // let isGoingHome = false;

    // while(totalSteps >= 10000 ){
    //     command = input.shift();
    //     if (command === "Going home") {
    //         break;
    //     }
    //     steps = Number(command);
    //     totalSteps += steps;
    // }

    // command = input.shift();
    // steps = Number(command);
    // totalSteps += steps;
    // if (totalSteps >= 10000) {
    //     isReady = true;
    //     console.log("Goal reached! Good job!");
    // }
    // let diff = Math.abs(10000 - totalSteps);
    // if (!isReady) {
    //     console.log(`${diff} more steps to reach goal.`)
    // }



    // while (command !== "Going home" || isGoingHome == true) {
    //     command = input.shift();
    //     if (command === "Going home") {
    //         break;
    //     }
    //     steps = Number(command);
    //     totalSteps += steps;
    //     if (totalSteps >= 10000) {
    //         isReady = true;
    //         console.log("Goal reached! Good job!");
    //         break;
    //     }
    // }