function petShop(arg1, arg2) {
    let dogCount = Number(arg1);
    let animalCount = Number(arg2);
    let dogFood = dogCount * 2.5;
    let otherFood = animalCount * 4;
    let total = dogFood + otherFood;

    console.log(`${total.toFixed(2)} lv.`)
}

petShop("13", "9");