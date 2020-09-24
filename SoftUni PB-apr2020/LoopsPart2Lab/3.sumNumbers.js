function sumNumbers(input) {
    let sum = 0;
    let command = input.shift();

    while (command != "Stop") {
        sum += Number(command);
        command = input.shift();
    }
    console.log(sum)
}
