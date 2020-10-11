function maxSeq(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let currentSeq = [array[i]];
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                currentSeq.push(array[j]);
            } else break;
        }
        if (currentSeq.length > result.length) {
            result = currentSeq;
        }
    }
    console.log(result.join(' '));
}

maxSeq([0, 1, 1, 5, 2, 2, 6, 3, 3]);