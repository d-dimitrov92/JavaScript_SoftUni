function fruitShop(arg1, arg2, arg3) {
    let type = arg1;
    let day = arg2;
    let quantity = Number(arg3);
    let price = 0;

    switch (type) {
        case "banana": {
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                price = 2.5 * quantity;
                console.log(price.toFixed(2));
            } else if (day === "Saturday" || day === "Sunday") {
                price = 2.7 * quantity;
                console.log(price.toFixed(2));
            } else console.log("error");
        } break;
        case "apple": {
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                price = 1.2 * quantity;
                console.log(price.toFixed(2));
            } else if (day === "Saturday" || day === "Sunday") {
                price = 1.25 * quantity;
                console.log(price.toFixed(2));
            } else console.log("error");
        } break;
        case "orange": {
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                price = 0.85 * quantity;
                console.log(price.toFixed(2));
            } else if (day === "Saturday" || day === "Sunday") {
                price = 0.9 * quantity;
                console.log(price.toFixed(2));
            } else console.log("error");
        } break;
        case "grapefruit": {
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                price = 1.45 * quantity;
                console.log(price.toFixed(2));
            } else if (day === "Saturday" || day === "Sunday") {
                price = 1.6 * quantity;
                console.log(price.toFixed(2));
            } else console.log("error");
        } break;
        case "kiwi": {
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                price = 2.7 * quantity;
                console.log(price.toFixed(2));
            } else if (day === "Saturday" || day === "Sunday") {
                price = 3 * quantity;
                console.log(price.toFixed(2));
            } else console.log("error");
        } break;
        case "pineapple": {
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                price = 5.5 * quantity;
                console.log(price.toFixed(2));
            } else if (day === "Saturday" || day === "Sunday") {
                price = 5.6 * quantity;
                console.log(price.toFixed(2));
            } else console.log("error");
        } break;
        case "grapes": {
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                price = 3.85 * quantity;
                console.log(price.toFixed(2));
            } else if (day === "Saturday" || day === "Sunday") {
                price = 4.2 * quantity;
                console.log(price.toFixed(2));
            } else console.log("error");
        } break;
        default: {
            console.log("error");
        }
    }
}

fruitShop("tomato", "Monday", "0.5")


// banana	apple	orange	grapefruit	kiwi	pineapple	grapes   DELNICHNI
//  2.50	1.20	 0.85	  1.45	    2.70	    5.50	  3.85   ---------

//banana	apple	orange	grapefruit	kiwi	pineapple	grapes   WEEKEND
//  2.70	1.25	0.90	    1.60	3.00	5.60    	4.20    ---------









// if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
//         isWeekend = false;
//     } else if (day === "Saturday" || day === "Sunday") {
//         isWeekend = true;
//     } else if (!(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday" || day === "Sunday")){
//         console.log("error");
//         return;
//     }

//     switch(type) {
//         case "banana": {
//             if(!isWeekend){
//                 price = 2.5 * quantity;
//             } else if(isWeekend){
//                 price = 2.7 * quantity;
//             }
//         } break;
//         case "apple": {
//             if(!isWeekend){
//                 price = 1.20 * quantity;
//             } else if(isWeekend){
//                 price = 1.25 * quantity;
//             }
//         } break;
//         case "orange": {
//             if(!isWeekend){
//                 price = 0.85 * quantity;
//             } else if(isWeekend){
//                 price = 0.9 * quantity;
//             }
//         } break;
//         case "grapefruit": {
//             if(!isWeekend){
//                 price = 1.45 * quantity;
//             } else if(isWeekend){
//                 price = 1.60 * quantity;
//             }
//         } break;
//         case "kiwi": {
//             if(!isWeekend){
//                 price = 2.7 * quantity;
//             } else if(isWeekend){
//                 price = 3 * quantity;
//             }
//         } break;
//         case "pineapple": {
//             if(!isWeekend){
//                 price = 5.5 * quantity;
//             } else if(isWeekend){
//                 price = 5.6 * quantity;
//             }
//         } break;
//         case "grapes": {
//             if(!isWeekend){
//                 price = 3.85 * quantity;
//             } else if(isWeekend){
//                 price = 4.2 * quantity;
//             }
//         } break;
//         default: console.log("error"); break;
//     }
//     console.log(price.toFixed(2));
// }


