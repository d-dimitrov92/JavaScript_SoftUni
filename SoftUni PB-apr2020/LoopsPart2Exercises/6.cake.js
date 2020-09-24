function cake(input) {
    let w = Number(input.shift());
    let l = Number(input.shift());
    let totalPieces = w * l;
    let command = input.shift();
    let pieceCount = Number(command);
    let eaten = pieceCount;
    let isDone = false;

    while (totalPieces >= eaten) {
        command = input.shift();
        if (command === "STOP") {
            isDone = true;
            console.log(`${totalPieces - eaten} pieces are left.`);
            break;
        }
        pieceCount = Number(command);
        eaten += pieceCount;
    }
    if(!isDone){
        console.log(`No more cake left! You need ${eaten - totalPieces} pieces more.`)
    }
}
cake([ '10', '2', '2', '4', '6', 'STOP' ])