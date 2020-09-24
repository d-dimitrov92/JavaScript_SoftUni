function hotelRoom(arg1, arg2) {
    let month = arg1;
    let nights = Number(arg2);
    let studioPrice = 0;
    let apartamentPrice = 0;
    let totalPriceStudio = 0;
    let totalPriceApartament = 0;

    if(month === "May" || month === "October") {
        studioPrice += 50;
        apartamentPrice += 65;
        if(nights > 7 && nights <= 14) {
            studioPrice = studioPrice * 0.95;
        } else if (nights > 14) {
            studioPrice = studioPrice * 0.7;
            apartamentPrice = apartamentPrice * 0.9;
        }
    } else if(month === "June" || month === "September") {
        studioPrice += 75.20;
        apartamentPrice += 68.7;
        if(nights > 14) {
            studioPrice = studioPrice * 0.8;
            apartamentPrice = apartamentPrice * 0.9
        }
    } else if(month === "July" || month === "August") {
        studioPrice += 76;
        apartamentPrice += 77;
        if(nights > 14) {
            apartamentPrice = apartamentPrice * 0.9;
        }
    }

    totalPriceStudio = nights * studioPrice;
    totalPriceApartament = nights * apartamentPrice;

    console.log(`Apartment: ${totalPriceApartament.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}

hotelRoom("June", "14")