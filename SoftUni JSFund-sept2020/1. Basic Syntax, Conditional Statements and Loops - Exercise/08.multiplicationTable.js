function table(num){
    for (let i = 1; i <= 10; i++) {
        let product = num * i;
        console.log(`${num} X ${i} = ${product}`);
    }
}

table(2)