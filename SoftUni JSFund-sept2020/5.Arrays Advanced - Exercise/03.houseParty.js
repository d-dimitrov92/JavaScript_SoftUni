function party(array) {
    let goToParty = [];

    for (let i = 0; i < array.length; i++) {
        let name = array[i].split(' ')[0];
        if (!array[i].includes('not')) {
            if(!goToParty.includes(name)){
                goToParty.push(name);
            } else {
                console.log(name + ' is already in the list!');
            }
        } else {
            if(goToParty.includes(name)){
                goToParty.pop(name);
            } else {
                console.log(name + ' is not in the list!');
            }
        }
    }
    console.log(goToParty.join('\n'));
}

party(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);


// трябва да вземем името след това командата дали идва или не идва
// името - ако не е в листа, да се добави към него
// ако името е в лиса да се отпечата, че е там
// ако получим команда, че не идва на партито - да се махне от списъка
// ако не е в списъка да се принтира, че не е в списъка