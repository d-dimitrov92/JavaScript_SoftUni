function lift(array) {
    let [que, wagons] = array;
    que = Number(que);
    wagons = wagons.split(" ").map(Number);
    let reduced = wagons.reduce((p, c) => p + c, 0)
    let maxCap = (wagons.length * 4) - reduced;
    console.log(reduced);
    if (maxCap > que) {
        for (let i = 0; i < wagons.length; i++) {
            if (que < 4) {
                wagons[i] += que;
                break;
            }
            que -= 4 - wagons[i];
            wagons[i] += 4 - wagons[i];
        }
        console.log(`The lift has empty spots!`);
        console.log(`${wagons.join(' ')}`);
    } else if (maxCap == que) {
        for (let i = 0; i < wagons.length; i++) {
            que -= 4 - wagons[i];
            wagons[i] += 4 - wagons[i];
        }
        console.log(wagons.join(' '));
    } else {
        for (let i = 0; i <= wagons.length; i++) {
            let lastWagon = wagons.length - 1;
            if (wagons[lastWagon] == 4) {
                console.log(`There isn't enough space! ${que} people in a queue!`);
                console.log(`${wagons.join(' ')}`);
                break;
            }
            que -= 4 - wagons[i];
            wagons[i] += 4 - wagons[i];
        }
    }
}

lift([
    "5",
    "0 0 0 0"
]);
// като вход получаваме масив, който съдържа 2 елемента
// --първия елемент - туристи на опашка
// --втори елемент - кабинките на лифта в текущото си състояние
// във всяка кабинка трябва да има максимум 4 туриста
// ако кабинката се напълни препращаме туристите в следващата кабинка
// ако са останали сводони места трябва да отпечатаме: "The lift has empty spots!
//                                                     {wagons separated by ' '}"
// ако са свършили местата на лифта отпечатваме:  "There isn't enough space! {people} people in a queue!
//                                                {wagons separated by ' '}"
//ако лифта е пълен и няма опашка отпечатваме само кабинките