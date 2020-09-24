function scholarship(arg1, arg2, arg3) {
    let income = Number(arg1);
    let averageScore = Number(arg2);
    let minimalSallary = Number(arg3);
    let socialScholarship = 0;;
    let excellentScholarship = 0;

    if(averageScore >= 4.50) {
        if(income < minimalSallary) {
            socialScholarship += minimalSallary * 0.35
        }
        if(averageScore >=5.50) {
            excellentScholarship += averageScore * 25;
        }
    }
    
    if(socialScholarship < excellentScholarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
    } else if(socialScholarship > excellentScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else {
        console.log("You cannot get a scholarship!");
    }
}

scholarship(
    480.00,
    4.60,
    450.00,
);