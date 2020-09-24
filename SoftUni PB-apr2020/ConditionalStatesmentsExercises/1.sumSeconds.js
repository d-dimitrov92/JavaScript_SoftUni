function sumSeconds(arg1, arg2, arg3) {
    firstTime = Number(arg1);
    secondTime = Number(arg2);
    thirsTime = Number(arg3);

    let allSeconds = firstTime + secondTime + thirsTime
    let minutes = Math.floor(allSeconds / 60);
    let seconds = allSeconds % 60;

    if(seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}
sumSeconds(
    14,
    12,
    10,
    )