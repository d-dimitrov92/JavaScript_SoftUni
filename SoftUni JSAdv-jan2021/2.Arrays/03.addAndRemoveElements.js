function solve(array) {
    let n = 0;
    let result = [];
    for (const item of array) {
        switch (item) {
            case 'add':
                n += 1;
                result.push(n);
                break;
            case 'remove':
                if(result.length > 0){
                   result.pop();
                }
                n += 1;
                break;
        }
    }
    return result.length != 0 ? result.join('\n') : 'Empty'
}

console.log(solve(['add',
    'add',
    'add',
    'add']
));

console.log('-----');

console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']

));