function cut(text) {
    let first = text.slice(0, text.length / 2);
    let second = text.slice(text.length / 2);
    let resultFirst = '';
    let resultSecond = '';
    for (let i = text.length / 2 - 1; i >= 0 / 2; i--) {
        resultFirst += first[i];
        resultSecond += second[i];
    }
    console.log(resultFirst);
    console.log(resultSecond);
}

cut('tluciffiDsIsihTgnizamAoSsIsihT');