function game(array) {
    let sequence = array.shift().split(' ');;
    let input = array.shift();
    let moves = 1;
    while (input != 'end') {
        let indexes = input.split(' ');
        let a = indexes[0];
        let b = indexes[1];
        if (a == b
            || a >= sequence.length || a < 0
            || b >= sequence.length || b < 0) {
            console.log(`Invalid input! Adding additional elements to the board`);
            sequence.splice(sequence.length / 2, 0, `-${moves}a`, `-${moves}a`);
        } else if (sequence[a] == sequence[b]) {
            console.log(`Congrats! You have found matching elements - ${sequence[a]}!`);
            sequence = sequence.filter(x => x != sequence[a]);
            if (sequence.length == 0) {
                console.log(`You have won in ${moves} turns!`);
                break;
            }
        } else if (sequence[a] != sequence[b]) {
            console.log(`Try again!`);
        }
        moves++;
        input = array.shift();
    }
    if (sequence.length > 0) {
        console.log(`Sorry you lose :(`);
        console.log(`${sequence.join(' ')}`);
    }
}