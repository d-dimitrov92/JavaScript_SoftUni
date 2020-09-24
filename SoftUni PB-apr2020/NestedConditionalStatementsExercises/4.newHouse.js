function newHouse(arg1, arg2, arg3) {
    let flowerType = arg1;
    let numberOfFlowers = Number(arg2);
    let budget = Number(arg3);
    let neededMoney = 0;

    switch(flowerType) {
        case "Roses": {
            neededMoney += numberOfFlowers * 5;
            if(numberOfFlowers >= 80) {
                neededMoney = neededMoney * 0.9;
            }
        } break;
        case "Dahlias": {
            neededMoney += numberOfFlowers * 3.8;
            if(numberOfFlowers >= 90){
                neededMoney = neededMoney * 0.85;
            }
        } break;
        case "Tulips": {
            neededMoney += numberOfFlowers * 2.8;
            if(numberOfFlowers >= 80){
                neededMoney = neededMoney * 0.85;
            }
        } break;
        case "Narcissus": {
            neededMoney += numberOfFlowers * 3;
            if(numberOfFlowers < 120){
                neededMoney = neededMoney * 1.15;
            }
        } break;
        case "Gladiolus": {
            neededMoney += numberOfFlowers * 2.5;
            if(numberOfFlowers < 80){
                neededMoney = neededMoney * 1.2;
            }
        } break;
    }
    
    if(budget >= neededMoney) {
        let change = budget - neededMoney;
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowerType} and ${change.toFixed(2)} leva left.`)
    } else {
        let more = neededMoney - budget;
        console.log(`Not enough money, you need ${more.toFixed(2)} leva more.`)
    }
}

newHouse(
"Gladiolus",
"64",
"160",
)

//"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"