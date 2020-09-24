function timePlus15Min(arg1, arg2) {
    let hours = Number(arg1);
    let minutes = Number(arg2);
    let addedMinutes = minutes + 15;
    
    if(addedMinutes >= 60) {
        hours += 1;
        minutes = Math.abs(60 - addedMinutes);
    } else {
        minutes = addedMinutes;
    }
    if(hours > 23){
        hours = 0;
    }
    if(minutes < 10){
        console.log(`${hours}:0${minutes}`)
    } else console.log(`${hours}:${minutes}`)
}

timePlus15Min(
    0,
    01
    )