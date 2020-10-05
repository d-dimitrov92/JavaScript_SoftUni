function vacation(peopleGroup, typeOfGroup, dayOfWeek){
    let price = 0;
    let total = 0;
    let discount = 1;
    if(typeOfGroup == "Students"){
        if(peopleGroup >= 30){
            discount -= 0.15;
        }
        if (dayOfWeek == "Friday"){
            price = 8.45;
            total = peopleGroup * price * discount;
        } else if (dayOfWeek == "Saturday"){
            price = 9.80;
            total = peopleGroup * price * discount;
        } else if (dayOfWeek == "Sunday"){
            price = 10.46;
            total = peopleGroup * price * discount;
        }
    } else if(typeOfGroup == "Business"){
        if (peopleGroup >= 100){
            peopleGroup -= 10;
        }
        if(dayOfWeek == "Friday"){
            price = 10.90;
            total = price * peopleGroup;
        } else if(dayOfWeek == "Saturday"){
            price = 15.60;
            total = price * peopleGroup;
        } else if(dayOfWeek == "Sunday"){
            price = 16;
            total = price * peopleGroup;
        }
    } else if(typeOfGroup == "Regular"){
        if(peopleGroup >= 10 && peopleGroup <= 20){
            discount -= 0.05;
        }
        if(dayOfWeek == "Friday"){
            price = 15;
            total = peopleGroup * price * discount;
        } else if(dayOfWeek == "Saturday"){
            price = 20;
            total = peopleGroup * price * discount;
        } else if(dayOfWeek == "Sunday"){
            price = 22.5;
            total = peopleGroup * price * discount;
        }
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday"
    
    )