function invalidNumber(arg) {
    let num = Number(arg);

    if (!((num >= 100 && num <= 200) || num === 0)) {
        console.log("invalid")
    }
}

invalidNumber("220")