function matrix(n){
    let result = '';
    for (let i = 1; i <= n; i++) {
        let line = '';
        for (let j = 1; j <= n; j++) {
            line += n + ' ';
        }
        result += line + '\n';
    }
    return result;
}

console.log(matrix(7));
