function speed(array) {
    let cars = {};
    let carsCount = array.shift();
    for (let i = 0; i < carsCount; i++) {
        let line = array.shift();
        [carName, mileage, fuel] = line.split('|');
        cars[carName] = { mileage: Number(mileage), fuel: Number(fuel) };
    }
    let actions = {
        Drive(cars, car, dist, fuelConsumed) {
            dist = Number(dist);
            fuelConsumed = Number(fuelConsumed);
            if (cars[car].fuel < fuelConsumed) {
                console.log("Not enough fuel to make that ride");
            } else {
                cars[car].mileage += dist;
                cars[car].fuel -= fuelConsumed;
                console.log(`${car} driven for ${dist} kilometers. ${fuelConsumed} liters of fuel consumed.`);
            }
            if (cars[car].mileage >= 100000) {
                delete cars[car];
                console.log(`Time to sell the ${car}!`);
            }
        },
        Refuel(cars, car, fuel) {
            let totalFuel = Number(cars[car].fuel) + Number(fuel);
            if (totalFuel > 75) {
                let toFull = 75 - cars[car].fuel;
                cars[car].fuel = 75;
                console.log(`${car} refueled with ${toFull} liters`);
            } else {
                cars[car].fuel += Number(fuel);
                console.log(`${car} refueled with ${fuel} liters`);
            }
        },
        Revert(cars, car, kilometers) {
            cars[car].mileage -= kilometers;
            if (cars[car].mileage >= 10000) {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            } else {
                cars[car].mileage = 10000;
            }
        }
    };

    let line;
    while ((line = array.shift()) != 'Stop') {
        [command, car, ...params] = line.split(' : ');
        let action = actions[command];
        action(cars, car, ...params);
    }
    let elements = Object.entries(cars).sort(sortingCars);
    for (const element of elements) {
        console.log(`${element[0]} -> Mileage: ${element[1].mileage} kms, Fuel in the tank: ${element[1].fuel} lt.`);
    }

    function sortingCars([carNameA, carFuncA], [carNameB, carFuncB]) {
        return carFuncB.mileage - carFuncA.mileage || carNameA.localeCompare(carNameB);
    }
}

speed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);