function projects(arg1, arg2) {
    let name = arg1;
    let projectNum = arg2;
    let hours = projectNum * 3;

    console.log(`The architect ${name} will need ${hours} hours to complete ${projectNum} project/s.`)
}

projects("gosho", "2");