function solve(arg1, arg2) {
    let numberOfStudents = Number(arg1);
    let excersices = Number(arg2);

    let results = Math.ceil(2.8 * excersices) * numberOfStudents;
    let a =Math.floor( excersices/3);
    let more = numberOfStudents * a;
    results = results + more;
    let memory = Math.ceil(results / 10) * 5;
    console.log(`${memory} KB needed`);
    console.log(`${results} submissions`)
}
solve(11, 7)