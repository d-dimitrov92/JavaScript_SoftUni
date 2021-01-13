function radar(currentSpeed, area) {
    currentSpeed = Number(currentSpeed);
    switch (area) {
        case 'motorway':
            if (currentSpeed > 130) {
                speedDiff(currentSpeed, 130)
            } else {
                console.log(`Driving ${currentSpeed} km/h in a 130 zone`);
            }
            break;
        case 'interstate':
            if (currentSpeed > 90) {
                speedDiff(currentSpeed, 90)
            } else {
                console.log(`Driving ${currentSpeed} km/h in a 90 zone`);
            }
            break;
        case 'city':
            if (currentSpeed > 50) {
                speedDiff(currentSpeed, 50)
            } else {
                console.log(`Driving ${currentSpeed} km/h in a 50 zone`);
            }
            break;
        case 'residential':
            if (currentSpeed > 20) {
                speedDiff(currentSpeed, 20)
            } else {
                console.log(`Driving ${currentSpeed} km/h in a 20 zone`);
            }
            break;
    }
    function speedDiff(currentSpeed, maxSpeed) {
        let speedDiff = Math.abs(maxSpeed - currentSpeed);
        let status = '';
        if (speedDiff <= 20) {
            status = 'speeding';
        } else if (speedDiff <= 40 && speedDiff > 20) {
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }
        console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
    }
}



radar(40, 'city');
radar(21, 'residential');
radar(110, 'interstate');
radar(200, 'motorway');

// •	On the motorway the limit is 130 km/h
// •	On the interstate the limit is 90 km/h
// •	In the city the limit is 50 km/h 
// •	Within a residential area the limit is 20 km/h
