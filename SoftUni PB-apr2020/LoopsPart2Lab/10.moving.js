function moving(input) {
    let wight = Number(input.shift());
    let lenght = Number(input.shift());
    let height = Number(input.shift());
    let boxes = input.shift();
    let volume = wight * lenght * height;
    let totalUsed = 0;

    while(boxes != "Done"){
        totalUsed += Number(boxes);
        let diff = Math.abs(volume - totalUsed);
        if(volume < totalUsed){
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            return;
        }
        boxes = input.shift();
    }
    let free = volume - totalUsed;
    console.log(`${free} Cubic meters left.`)
}

moving([ '10', '1', '2', '4', '6', 'Done' ])