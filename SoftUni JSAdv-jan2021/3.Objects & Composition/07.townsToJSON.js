function towns(array) {
    let result = [];
    let towns = [];
    let lats = [];
    let longs = [];
    for (const line of array) {
        [town, lat, long] = line. split(' | ');
        town = town.slice(2);
        long = long.slice(0, -2);
        towns.push(town);
        lats.push(Number(lat).toFixed(2));
        longs.push(Number(long).toFixed(2));
    }
    for (let i = 1; i < towns.length; i++) {
        let townPos = {
            "Town": towns[i],
            "Latitude": Number(lats[i]),
            "Longitude": Number(longs[i])
        }
        result.push(townPos);
    }

    return JSON.stringify(result);
}

console.log(towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));