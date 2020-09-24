function building(input) {
    let floors = Number(input.shift());
    let roomsPerFloor = Number(input.shift());
    //let typeOfRoom = "";
    let currentFloor = "";

    for (let f = floors; f >= 1; f--) {
        for (let r = 0; r <= roomsPerFloor - 1; r++) {
            if (f === floors) {
                //typeOfRoom = "L";
                currentFloor += (`L${f}${r} `)
            } else if (f % 2 === 0) {
               // typeOfRoom = "O";
                currentFloor += (`O${f}${r} `)
            } else if (f % 2 === 1) {
                //typeOfRoom = "A";
                currentFloor += (`A${f}${r} `)
            }
            
        }
        console.log(`${currentFloor}`)
        currentFloor = "";
    }
}
building(['6', '4'])