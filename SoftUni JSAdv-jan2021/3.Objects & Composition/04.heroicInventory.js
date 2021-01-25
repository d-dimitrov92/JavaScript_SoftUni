function inv(input) {
    let result = [];
    for (const item of input) {
        [name, level, items] = item.split(' / ');
        let obj = {
            name: name,
            level: Number(level),
            items: items ? items.split(', '): []
        }
        result.push(obj)
    }

    return JSON.stringify(result);
}

console.log(inv(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));