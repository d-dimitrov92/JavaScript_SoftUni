function sorting(array) {
    let result = [];
    let length = array.length;
    let sorted = array.sort((a, b) => a - b);
    for (let i = 1; i <= length; i++) {
        if(i % 2 == 1){
            let temp = sorted.pop();
            result.push(temp);
        } else {
            let temp = sorted.shift();
            result.push(temp);
        }
    }
    return result.join(' ');
}

console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));

// трябва да се сортира масив, който ще ни бъде подаден
// първият елемент трябва да е най-голямото число
// вторият елемент трябва да е най-малкото число
// принтираме елементите разделени с интервал