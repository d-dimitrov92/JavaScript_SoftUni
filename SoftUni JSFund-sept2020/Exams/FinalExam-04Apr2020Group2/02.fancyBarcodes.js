function solve(array) {
    let n = array.shift();
    let pattern = /^@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+$/g;
    let groupPattern = /[0-9]/g;
    for (let i = 0; i < n; i++) {
        let line = array.shift();
        let match = line.match(pattern);
        if (match != null) {
            match = match.join('');
            let groupMatch = match.match(groupPattern);
            let group = '00';
            if(groupMatch != null){
                group = groupMatch.join('');
                console.log(`Product group: ${group}`);
            } else {
                console.log(`Product group: ${group}`);
            }
        } else {
            console.log('Invalid barcode');
        }
    }
}

solve(['3', '@#FreshFisH@#', '@###Bre054545454a0D@###', '@##Che46sE@##']);

console.log('---');
solve([
    '6',
    '@###Val1d1teM@###dd',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
]);