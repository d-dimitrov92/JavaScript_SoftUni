function solve(array) {
    let n = array.shift();
    let heroes = {};
    let actions = {
        CastSpell(heroes, heroName, mpNeeded, spellName) {
            mpNeeded = Number(mpNeeded);
            if (heroes[heroName].mp >= mpNeeded) {
                let manaLeft = heroes[heroName].mp - mpNeeded;
                heroes[heroName].mp = manaLeft;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${manaLeft} MP!`);
            } else console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        },
        TakeDamage(heroes, heroName, damageTaken, attacker) {
            damageTaken = Number(damageTaken);
            if (heroes[heroName].hp > damageTaken) {
                let currentHp = heroes[heroName].hp - damageTaken;
                heroes[heroName].hp = currentHp;
                console.log(`${heroName} was hit for ${damageTaken} HP by ${attacker} and now has ${currentHp} HP left!`);
            } else {
                delete heroes[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }
        },
        Recharge(heroes, heroName, amount) {
            amount = Number(amount);
            let neededMp = 200 - heroes[heroName].mp;
            if (amount > neededMp) {
                heroes[heroName].mp = 200;
                console.log(`${heroName} recharged for ${neededMp} MP!`);
            } else {
                let currentMp = heroes[heroName].mp + amount;
                heroes[heroName].mp = Math.min(currentMp, 200);
                console.log(`${heroName} recharged for ${amount} MP!`);
            }
        },
        Heal(heroes, heroName, amount) {
            amount = Number(amount);
            let neededHp = 100 - heroes[heroName].hp;
            if (amount > neededHp) {
                heroes[heroName].hp = 100;
                console.log(`${heroName} healed for ${neededHp} HP!`);
            } else {
                let currentHp = heroes[heroName].hp + amount;
                heroes[heroName].hp = Math.min(currentHp, 100);
                console.log(`${heroName} healed for ${amount} HP!`);
            }
        }
    };
    for (let i = 0; i < n; i++) {
        [heroName, hp, mp] = array.shift().split(' ');
        heroes[heroName] = { hp: Number(hp), mp: Number(mp) };
    }
    let line;
    while ((line = array.shift()) != 'End') {
        [actionName, heroName, ...params] = line.split(' - ');
        let action = actions[actionName];
        if (heroes.hasOwnProperty(heroName)) {
            action(heroes, heroName, ...params);
        }
    }
    let sorted = Object.entries(heroes).sort(sorting);
    for (const hero of sorted) {
        console.log(`${hero[0]}`);
        console.log(`  HP: ${hero[1].hp}`);
        console.log(`  MP: ${hero[1].mp}`);
    }

    function sorting(a, b) {
        return b[1].hp - a[1].hp || a[0].localeCompare(b[0])
    }
}

solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);

console.log(' --- ');

solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);

// CastSpell – {hero name} – {MP needed} – {spell name} 
// TakeDamage – {hero name} – {damage} – {attacker}
// Recharge – {hero name} – {amount}
// Heal – {hero name} – {amount}
