function sum(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let magicNumber = Number(input.shift());
    let combinations = 0;
    let isMagic = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combinations++;
            if(i + j === magicNumber){
                isMagic = true;
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
                break;
            }
        }
        if(isMagic){
            break;
        }
    }
    if(!isMagic){
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}
sum(['1', '10', '5'])