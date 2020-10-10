function commonElements(arr1, arr2){
    let result = '';
    for (let i = 0; i < arr1.length; i++) {
            
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]){
                result += arr2[j] + '\n';
            }
        }
    }
    console.log(result);
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']

);