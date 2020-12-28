function solve(array) {
    let pattern = /^U\$[A-Z][a-z]{2,}U\$P@\$[A-Za-z]{5,}[0-9]+P@\$$/g;
    let userNamePattern = /[A-Z][a-z]{2,}/g;
    let passPattern = /[A-Za-z]{5,}[0-9]+/g;
    let n = array.shift();
    let registrations = 0;
    for (let i = 0; i < n; i++) {
        line = array.shift();
        let match = line.match(pattern);
        if(match != null){
            match = match.join('');
            let userName = match.match(userNamePattern);
            let password = match.match(passPattern);
            registrations++;
            console.log('Registration was successful');
            console.log(`Username: ${userName}, Password: ${password}`);
        } else {
            console.log('Invalid username or password');
        }
    }
    console.log(`Successful registrations: ${registrations}`);
}

solve([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
]);

console.log(' --- ');

solve([ '2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412' ]);