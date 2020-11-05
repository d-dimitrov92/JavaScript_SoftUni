function inv(array) {
    let items = array.shift().split(', ');
    let command = array.shift();

    function collect(array, itemsArray) {
        let item = array.split(' - ')[1];
        if (itemsArray.includes(item)) {
            return;
        }
        itemsArray.push(item);
        return itemsArray;
    }
    function drop(array, itemsArray) {
        let item = array.split(' - ')[1];
        if (itemsArray.includes(item)) {
            let index = itemsArray.indexOf(item);
            itemsArray.splice(index, 1);
        }
        return itemsArray;
    }
    function combine(array, itemsArray) {
        let toCombine = array.split(' - ');
        let itemsToCombine = toCombine[1].split(':');
        let [oldItem, newItem] = itemsToCombine;
        if (itemsArray.includes(oldItem)) {
            let index = itemsArray.indexOf(oldItem);
            itemsArray.splice(index + 1, 0, newItem);
        }
        return itemsArray;
    }
    function renew(array, itemsArray) {
        let target = array.split(' - ')[1];
        if (itemsArray.includes(target)) {
            let index = itemsArray.indexOf(target)
            let temp = itemsArray.splice(index, 1).join('');
            itemsArray.push(temp);
        }
        return itemsArray;
    }

    while (command != 'Craft!') {
        let action = command.split(' - ')[0];
        if (action == 'Collect') {
            collect(command, items);
        } else if (action == 'Drop') {
            drop(command, items);
        } else if (action == 'Combine Items') {
            combine(command, items);
        } else if (action == 'Renew') {
            renew(command, items);
        }

        command = array.shift();
    }
    console.log(items.join(', '));
}

inv([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Combine Items - Bow:Sword',
    'Combine Items - Bow:hui',
    'Renew - Iron',
    'Craft!'
  ]
);