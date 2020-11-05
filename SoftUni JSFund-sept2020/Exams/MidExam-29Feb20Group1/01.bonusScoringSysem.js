function bonus(array) {
    let students = Number(array.shift());
    let lectures = Number(array.shift());
    let initialBonus = Number(array.shift());
    let sortedStudents = array.map(Number).sort((a, b) => b - a);
    let bestStudent = sortedStudents[0];
    let maxBonus = 0
    for (let i = 0; i < array.length; i++) {
        let totalBonus = array[i] / lectures * (5 + initialBonus);
        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
        }
    }
    if (bestStudent == undefined) {
        bestStudent = 0;
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${bestStudent} lectures.`);
}

bonus([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'

]);