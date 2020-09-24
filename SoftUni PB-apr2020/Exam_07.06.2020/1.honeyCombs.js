function solve(input, input1) {
    let bees = Number(input);
    let flowers = Number(input1);

    let totalHoney = bees * flowers * 0.21;
    let combsCompleted = Math.floor(totalHoney / 100);
    let honeyLeft = totalHoney - combsCompleted*100

    console.log(`${combsCompleted} honeycombs filled.`)
    console.log(`${honeyLeft.toFixed(2)} grams of honey left.`)
}

solve(11, 120)