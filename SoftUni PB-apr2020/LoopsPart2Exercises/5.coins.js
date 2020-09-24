function coins(input) {
    let change = Number(input.shift());
    let rest = change * 100;
    let coins = 0;
    let isEnded = false;

    while (rest > 0) {
        if (rest >= 200) {
            coins += Math.floor(rest / 200);
            rest = rest % 200;
        } else if (rest >= 100 && rest < 200) {
            coins += Math.floor(rest / 100);
            rest = rest % 100;
        } else if (rest >= 50 && rest < 100) {
            coins += Math.floor(rest / 50);
            rest = rest % 50;
        } else if (rest >= 20 && rest < 50) {
            coins += Math.floor(rest / 20);
            rest = rest % 20;
        } else if (rest >= 10 && rest < 20) {
            coins += Math.floor(rest / 10);
            rest = rest % 10;
        } else if (rest >= 5 && rest < 10) {
            coins += Math.floor(rest / 5);
            rest = rest % 5;
        } else if (rest >= 2 && rest < 5) {
            coins += Math.floor(rest / 2);
            rest = rest % 2;
        } else if (rest < 5) {
            coins += Math.floor(rest / 1);
            rest = rest - rest;
        }
    }
    console.log(coins);
}
coins(["0.41"]);



// console.log(rest, coins);
// isEnded = true;