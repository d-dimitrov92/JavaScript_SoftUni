function walk(steps, footprintLength, speedKmH) {
    let speed = speedKmH * 1000 / 3600;
    let distance = steps * footprintLength;
    let breaks = Math.floor(distance / 500) * 60;
    let time = distance / speed + breaks;

    let hours = Math.floor(time / 60 / 60).toFixed(0).padStart(2, '0');
    let minutes = Math.floor((time - hours * 3600) / 60).toFixed(0).padStart(2, '0');
    let seconds = (time - hours * 3600 - minutes * 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}

walk(4000, 0.60, 5);

// every 500 meters --> 1 minute break