function cook(startNum, oper1, oper2, oper3, oper4, oper5) {
    let num = Number(startNum);
    let operations = {
        chop(num) {
            num = num / 2;
            return num;
        },
        dice(num) {
            return Math.sqrt(num);
        },
        spice(num) {
            return num + 1;
        },
        bake(num) {
            return num * 3;
        },
        fillet(num) {
            let part = num * 0.2;
            return num - part;
        }
    }
    num = operations[oper1](num);
    console.log(num);
    num = operations[oper2](num);
    console.log(num);
    num = operations[oper3](num);
    console.log(num);
    num = operations[oper4](num);
    console.log(num);
    num = operations[oper5](num);
    console.log(num);
}

cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log(`  `);
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');