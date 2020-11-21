function party(array) {
    let name = array.shift();
    let list = {
        'VIP': [],
        'regular': []
    };

    while (name !== 'PARTY') {
        if (isNaN(name[0])) {
            list['regular'].push(name);
        } else {
            list['VIP'].push(name);
        }
        name = array.shift()
    }
    array.forEach(name => {
        if (list['VIP'].includes(name)) {
            let i = list['VIP'].indexOf(name);
            list['VIP'].splice(i, 1)
        } else {
            let i = list['regular'].indexOf(name);
            list['regular'].splice(i, 1)
        }
    });
    console.log(list['VIP'].length + list['regular'].length);
    console.log(list['VIP'].join('\n') + '\n' + list['regular'].join('\n'));
}

party(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);