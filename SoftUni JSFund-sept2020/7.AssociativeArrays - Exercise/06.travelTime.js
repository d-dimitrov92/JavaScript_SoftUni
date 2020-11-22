function travelTime(array) {

    let info = new Map();

    for (let i in array) {
        let infoCur = array[i].split(' > ');
        let [country, town, costs] = [infoCur[0], infoCur[1], Number(infoCur[2])];

        if (!info.has(country)) {
            info.set(country, {
                [town]: costs
            });
        } else {
            let townInfo = info.get(country);
            if (!townInfo.hasOwnProperty(town)) {
                townInfo[town] = costs;
            } else {
                if (costs <= townInfo[town]) {
                    townInfo[town] = costs
                }
            }
        }
    }
    let entries = Array.from(info.entries());
    entries.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    for (let i in entries) {
        let result = entries[i][0] + ' -> ';
        let entriesTown = Object.entries(entries[i][1]);
        entriesTown.sort((a, b) => {
            return a[1] - b[1];
        })
        for (let i in entriesTown) {
            result += entriesTown[i][0] + ' -> ' + entriesTown[i][1] + ' ';
        }
        console.log(result);
    }

}


travelTime([
    "Bulgaria > Sofia > 200",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 500"
]);

// function travel(array) {
//     let list = {};
//     for (const line of array) {
//         [country, city, cost] = line.split(' > ');
//         cost = Number(cost);
//         if (!list.hasOwnProperty(country)) {
//             list[country] = {};
//         }
//         if (!list[country].hasOwnProperty(city)) {
//             list[country][city] = cost;
//         } else if (list[country][city] > cost) {
//             list[country][city] = cost;
//         }
//     }
//     console.log(list);
//     for (let [key, value] of Object.entries(list)) {
//         let arrays = Object.entries(value);
//         for (const item of arrays) {
//             let [city, cost] = Array.from(item);
//             console.log(key[cost]);
//         }
//     }
// }