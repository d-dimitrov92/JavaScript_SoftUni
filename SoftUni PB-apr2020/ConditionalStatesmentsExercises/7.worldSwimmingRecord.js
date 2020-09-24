function worldSwimmingRecord(arg1, arg2, arg3) {
    let currentRecord = Number(arg1);
    let distance = Number(arg2);
    let swimSpeed = Number(arg3);

    let waterResistanceIndex = Math.floor(distance / 15)
    let addedTime = waterResistanceIndex * 12.5;
    let timeIvan = (swimSpeed * distance) + addedTime

    if(timeIvan < currentRecord) {
        console.log(`Yes, he succeeded! The new world record is ${timeIvan.toFixed(2)} seconds.`)
    } else {
        let diff = timeIvan - currentRecord;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }
}

worldSwimmingRecord(
    10464,
    1500,
    20,
    
)