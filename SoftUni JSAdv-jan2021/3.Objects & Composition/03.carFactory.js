function car(obj) {
    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };
    let newObj = {};
    let wheel = obj.wheelsize;
    newObj.model = obj.model
    if (obj.power <= 90) {
        newObj.engine = smallEngine;
    } else if (obj.power > 90 && obj.power <= 120) {
        newObj.engine = normalEngine;
    } else {
        newObj.engine = monsterEngine;
    }
    newObj.carriage = {
        type: obj.carriage,
        color: obj.color
    }
    if (wheel % 2 == 0) {
        wheel -= 1
    }
    newObj.wheels = [wheel, wheel, wheel, wheel]

    return newObj;
}

console.log(car({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}
));