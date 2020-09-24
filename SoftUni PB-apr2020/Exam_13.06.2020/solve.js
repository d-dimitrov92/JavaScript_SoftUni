function solve(arg1, arg2, arg3) {
    let diff = Number(arg1);
    let rotation = Number(arg2);
    let pages = Number(arg3);

    if (diff >= 80) {
        if (rotation >= 80) {
            console.log("Legacy");
        } else if (rotation <= 10) {
            console.log("Master");
        }
    } else if (diff <= 30 && diff > 10) {
        console.log("Easy");
    } else if (diff <= 10) {
        console.log("Elementary");
    }

    if (rotation >= 50 && rotation < 80) {
        if (pages >= 2 && pages < 8) {
            console.log("Hard");
        }
    } else {
        console.log("Regular")
    }
}

solve(80, 40, 3)