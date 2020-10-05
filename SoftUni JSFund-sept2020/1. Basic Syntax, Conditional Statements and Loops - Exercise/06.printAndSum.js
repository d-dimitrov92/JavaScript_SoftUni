function sum(start, end) {
    let sum = 0;
    let numbers = '';
    for (let i = start; i <= end; i++) {
        numbers += i + ' ';
        sum += i
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

sum(5, 10);