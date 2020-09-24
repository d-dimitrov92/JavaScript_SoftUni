function tradeCommissions(arg1, arg2) {
    let city = arg1;
    let sale = Number(arg2);
    let percentCommission = 0;

    switch (city) {
        case "Sofia": {
            if (sale >= 0 && sale <= 500) {
                percentCommission += 0.05;
                console.log((percentCommission * sale).toFixed(2));
            } else if (sale >= 500 && sale <= 1000) {
                percentCommission += 0.07;
                console.log((percentCommission * sale).toFixed(2));
            } else if (sale >= 1000 && sale <= 10000) {
                percentCommission += 0.08;
                console.log((percentCommission * sale).toFixed(2));
            } else if (sale > 10000) {
                percentCommission += 0.12;
                console.log((percentCommission * sale).toFixed(2));
            } else {
                console.log("error");
            }
        } break;
        case "Varna": {
            if (sale >= 0 && sale <= 500) {
                percentCommission += 0.045;
                console.log((percentCommission * sale).toFixed(2));
            } else if (sale >= 500 && sale <= 1000) {
                percentCommission += 0.075;
                console.log((percentCommission * sale).toFixed(2));
            } else if (sale >= 1000 && sale <= 10000) {
                percentCommission += 0.1;
                console.log((percentCommission * sale).toFixed(2));
            } else if (sale > 10000) {
                percentCommission += 0.13;
                console.log((percentCommission * sale).toFixed(2));
            } else {
                console.log("error");
            }
        } break;
        case "Plovdiv": {
            if (sale >= 0 && sale <= 500) {
                percentCommission += 0.055;
                console.log((percentCommission * sale).toFixed(2));
            } else if (sale >= 500 && sale <= 1000) {
                percentCommission += 0.08;
                console.log((percentCommission * sale).toFixed(2));
            } else if (sale >= 1000 && sale <= 10000) {
                percentCommission += 0.12;
                console.log((percentCommission * sale).toFixed(2));
            } else if (sale > 10000) {
                percentCommission += 0.145;
                console.log((percentCommission * sale).toFixed(2));
            } else {
                console.log("error");
            }
        } break;
        default: {
            console.log("error");
        } break;
    }
}

tradeCommissions("Sofia", "1500")