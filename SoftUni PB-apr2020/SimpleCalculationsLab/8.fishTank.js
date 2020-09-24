function fishTank(arg1, arg2, arg3, arg4) {
    let l = Number(arg1);
    let w = Number(arg2);
    let h = Number(arg3);
    let percent = Number(arg4)/100;
    let tankVolume = l * w * h;
    let tankLiters = tankVolume * 0.001;
    let itemsVolume = tankVolume * percent;
    let itemsLiters = itemsVolume * 0.001;
    let totalWater = tankLiters - itemsLiters;

    console.log (totalWater.toFixed(3));
}

fishTank (
    "105",
    "77",
    "89",
    "18.5",    
    )