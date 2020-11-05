function mu(array) {
    let rooms = array.split('|');
    let health = 100;
    let bitcoins = 0;
    let currentHealth = health;
    let counter = 0;
    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(' ');
        let action = room[0];
        let number = Number(room[1]);
        counter++;
        if (action == 'potion') {
            let overHealed = number - (currentHealth + number) % 100;
            currentHealth = Math.min(currentHealth += number, 100);
            currentHealth >= 100 ? console.log(`You healed for ${overHealed} hp.`)
                                : console.log(`You healed for ${number} hp.`)
            console.log(`Current health: ${currentHealth} hp.`);
        } else if (action == 'chest') {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            currentHealth -= number;
            if (currentHealth <= 0) {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${counter}`);
                break;
            }
            console.log(`You slayed ${action}.`);
        }
    }
    if (currentHealth > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${currentHealth}`);
    }
}

mu('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');