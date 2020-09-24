function danceHall(arg1, arg2, arg3) {
    let l = Number(arg1) *100;
    let w = Number(arg2) *100;
    let a = Number(arg3) *100;
    let hallArea = l * w;
    let garderobArea = a * a;
    let peikaArea = hallArea / 10;

    let dancerArea = (40 + 7000);
    let freeSpace = hallArea - peikaArea - garderobArea;
    let dancers = freeSpace / dancerArea;

    console.log(Math.floor(dancers));
}

danceHall(
    "50",
    "25",
    "2",    
    );