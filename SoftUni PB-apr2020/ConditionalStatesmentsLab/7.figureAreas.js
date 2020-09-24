function areas(arg1,arg2,arg3) {
    let shape = arg1;
    let result = 0;
    
    let b = Number(arg3);

    if(shape === "square"){
        let a = Number(arg2);
        result = a * a;
    } else if(shape === "rectangle") {
        let a = Number(arg2);
        let b = Number(arg3);
        result = a * b;
    } else if(shape === "circle") {
        let r = Number(arg2);
        result = Math.PI * r * r;
    } else if(shape === "triangle") {
        let a = Number(arg2);
        let b = Number(arg3);
        result = a * b / 2;
    }
    console.log(result.toFixed(3));
}

areas ("square", 5)