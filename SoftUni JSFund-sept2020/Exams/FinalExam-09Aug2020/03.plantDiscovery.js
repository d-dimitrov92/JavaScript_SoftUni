function plant(array) {
    let n = array.shift();
    let plants = {};
    for (let i = 0; i < n; i++) {
        [plantName, rarity] = array.shift().split('<->');
        plants[plantName] = { rarity: Number(rarity), rating: [] };
    }
    let actions = {
        Rate(plants, plant, newRating) {
            newRating = Number(newRating);
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating.push(newRating);
            } else console.log('error')
        },
        Update(plants, plant, newRarity) {
            newRarity = Number(newRarity);
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rarity = newRarity;
            } else console.log('error')
        },
        Reset(plants, plant) {
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating = [];
            } else ('error')
        }
    };

    let line;
    while ((line = array.shift()) != 'Exhibition') {
        [command, text] = line.split(': ');
        [plantName, number] = text.split(' - ');
        // if (actions.hasOwnProperty(command)) {
        // } //else console.log('error');
        let action = actions[command];
        action(plants, plantName, number);
    }

    for (const plant in plants) {
        let average = 0;
        if (plants[plant].rating.length > 0) {
            let result = 0;
            for (const rat of plants[plant].rating) {
                result += rat;
            }
            average = result / plants[plant].rating.length;
            plants[plant].rating = average;
        } else plants[plant].rating = 0;
    }

    let sorted = Object.entries(plants).sort(sorting);

    function sorting(a, b) {
        return b[1].rarity - a[1].rarity || b[1].rating - a[1].rating
    }
    console.log('Plants for the exhibition:');
    for (const line of sorted) {
        console.log(`- ${line[0]}; Rarity: ${line[1].rarity}; Rating: ${line[1].rating.toFixed(2)}`)
    }
}


plant([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]);

console.log('----');

plant([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
]);

// function plantDiscovery(input) {
//     let n = Number(input[0]);
//     let plantsList = {};
 
//     for (let i = 1; i <= n; i++) {
//         let [plant, rarity] = input[i].split('<->');
//         rarity = Number(rarity);
 
//         plantsList[plant] = {
//             'Rarity': rarity,
//             'Rating': [],
//         };
//     }
 
//     for (let i = n + 1; i < input.length; i++) {
//         if (input[i] == 'Exhibition') {
//             break;
//         }
 
//         let line = input[i].split(' ');
//         let [command, ...info] = line;
 
//         if (command == 'Rate:') {
//             let plant = info[0];
//             let rating = Number(info[2]);
 
//             if (plantsList.hasOwnProperty(plant)) {
//                 plantsList[plant]['Rating'].push(rating);
//             } else {
//                 console.log('error');
//             }
//         } else if (command == 'Update:') {
//             let plant = info[0];
//             let newRarity = Number(info[2]);
 
//             if (plantsList.hasOwnProperty(plant)) {
//                 plantsList[plant]['Rarity'] = newRarity;
//             } else {
//                 console.log('error');
//             }
//         } else if (command == 'Reset:') {
//             let plant = info[0];
 
//             if (plantsList.hasOwnProperty(plant)) {
//                 plantsList[plant]['Rating'] = [];
//             } else {
//                 console.log('error');
//             }
//         }
//     }
    
//     console.log('Plants for the exhibition:');
    
//     Object.keys(plantsList)
//     .sort((a, b) => {
//         let firstResult = averageCalculate(plantsList[a]['Rating']);
//         let secondResult = averageCalculate(plantsList[b]['Rating']);
 
//         if (plantsList[a]['Rarity'] - plantsList[b]['Rarity'] != 0) {
//             return plantsList[b]['Rarity'] - plantsList[a]['Rarity'];
//         } else {
//             return secondResult - firstResult;
//         }
//     }).forEach(plant => {
//         let rating = averageCalculate(plantsList[plant]['Rating']);
//         console.log(`- ${plant}; Rarity: ${plantsList[plant]['Rarity']}; Rating: ${rating.toFixed(2)}`);
//     });
    
    
//     function averageCalculate(arr) {
//         if (arr.length > 0) {
//             return arr.reduce((a, b) => a + b) / arr.length;
//         } else {
//             return 0;
//         }
//     }
// }