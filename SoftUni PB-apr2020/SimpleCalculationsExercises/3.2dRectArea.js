function rectArea(argx1, argy1, argx2, argy2) {
    let x1 = Number(argx1);
    let y1 = Number(argy1);
    let x2 = Number(argx2);
    let y2 = Number(argy2);

    let sideA = Math.abs(x1-x2);
    let sideB = Math.abs(y1-y2);

    let area = sideA * sideB;
    let perim = (sideA + sideB)*2;

    console.log(area.toFixed(2));
    console.log(perim.toFixed(2));
}

rectArea(
    "60",
    "20",
    "10",
    "50",
    );