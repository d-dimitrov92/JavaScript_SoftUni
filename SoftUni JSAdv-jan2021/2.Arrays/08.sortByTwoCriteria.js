function two(array) {
    let result = array
    .slice(0)
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join('\n');

    return result;
}

console.log(two(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
));