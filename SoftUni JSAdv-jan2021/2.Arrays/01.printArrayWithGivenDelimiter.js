function print(array, delim) {
    const newArray = array.join(delim)
    return newArray;
}

console.log(print(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
));
console.log('-----');
console.log(print(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
));