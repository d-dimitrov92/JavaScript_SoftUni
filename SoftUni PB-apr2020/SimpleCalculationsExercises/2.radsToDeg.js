function radsToDegs (arg1) {
    let rads = Number(arg1);
    let degs = rads * 180/Math.PI;

    console.log (degs.toFixed(0));
}