function solve(arr, str) {
    if (str == 'asc') {
        asc(arr);
    } else {
        desc(arr);
    }

    function asc(arr) {
        return arr.sort((a, b) => a - b)
    }
    function desc(arr) {
        return arr.sort((a, b) => b - a)
    }
    return arr;
}