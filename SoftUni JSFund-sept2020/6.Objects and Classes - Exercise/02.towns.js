function towns(array){
    
    for (let i = 0; i < array.length; i++) {
        let townsObj = {};
        let splitted = array[i].split(' | ');
        townsObj.town = splitted[0];
        townsObj.latitude = Number(splitted[1]).toFixed(2);
        townsObj.longitude = Number(splitted[2]).toFixed(2);
        console.log(townsObj);
    }
}