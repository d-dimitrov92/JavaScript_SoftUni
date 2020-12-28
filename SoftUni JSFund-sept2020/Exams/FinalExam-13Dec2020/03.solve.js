function solve(array) {
    let actions = {
        Add(list, username) {
            if(!list.hasOwnProperty(username)){
                list[username] = [];
            } else {
                console.log(`${username} is already registered`);
            }
        },
        Send(list, username, email){
            list[username].push(email);
        },
        Delete(list, username){
            if(list.hasOwnProperty(username)){
                delete list[username];
            } else {
                console.log(`${username} not found!`);
            }
        }
    };
    let list = {};
    let line;
    while ((line = array.shift()) != 'Statistics') {
        [command, username, email] = line.split('->');
        let action = actions[command];
        action(list, username, email);
    }
    let usersCount = Object.entries(list).length;
    let sorted = Object.entries(list).sort(sorting);
    function sorting(a, b){
        let countA = a[1].length;
        let countB = b[1].length;
        return countB - countA || a[0].localeCompare(b[0])
    }
    console.log(`Users count: ${usersCount}`);
    for (const user of sorted) {
        console.log(`${user[0]}`);
        for (const line of user[1]) {
            console.log(` - ${line}`);
        }
    }
}

solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
]);

console.log(' --- ');

solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Your loan is overdue',
    'Add->Mike',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Delete->Peter',
    "Send->George->I'm busy",
    'Send->Mike->Another random test mail',
    'Delete->George',
    'Statistics'
]);

console.log(' --- ');

solve([
    'Add->Annie',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Annie->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Annie->Another random test mail',
    'Delete->Annie',
    'Delete->George',
    'Statistics'
]);