function inv(array) {
    let heroes = [];
    for (const line of array) {
        let currentHero = {};
        let [name, level, items] = line.split(' / ');
        items = items.split(', ').sort((a, b) => a.localeCompare(b))
        currentHero.Hero = name;
        currentHero.level = level;
        currentHero.items = items;
        
        heroes.push(currentHero);
    }

    heroes
    .sort((a, b) => a.level - b.level)
    .forEach( hero => {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    })
}

inv([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);