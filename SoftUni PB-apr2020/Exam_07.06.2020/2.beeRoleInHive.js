function solve(arg, arg1, arg2) {
    let int = Number(arg);
    let pow = Number(arg1);
    let gender = arg2;

    if (int >= 80 && pow >= 80 && gender === "female") {
        console.log("Queen Bee");
    } else if (int >= 80) {
        console.log("Repairing Bee");
    } else if (int >= 60) {
        console.log("Cleaning Bee");
    } else if (pow >= 80 && gender === "male") {
        console.log("Drone Bee");
    } else if(pow >= 60){
        console.log("Guard Bee");
    }else console.log("Worker Bee")
}

solve("90", "65", "male")