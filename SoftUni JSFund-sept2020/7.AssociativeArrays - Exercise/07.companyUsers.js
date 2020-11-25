function users(array) {
    // обработка на входа
    // не може в команията да има еднакви ИД-та (Set())
    // подреждане на компаниите
    let list = {};
    let result = '';
    for (const line of array) {
        [company, id] = line.split(' -> ');
        if(!list.hasOwnProperty(company)){
            list[company] = [];
        }
        list[company].push(id);
    }
    let keys = Object.keys(list);
    keys.sort((a,b) => a.localeCompare(b));
    for (const key in list) {
        let uniqueIds = new Set(list[key]);
        list[key]= Array.from(uniqueIds);
    }
    
    keys.forEach( key => {
        let idResult = '';
        list[key].forEach( id =>  idResult += `-- ${id}\n`);
        result += key + '\n' +idResult;
    });
    console.log(result);
}

users([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);