function cook(budget, students, priceFlourPackage, priceEgg, priceApron) {
    let totalFlourPrice = students * priceFlourPackage;
    let freePacks = 0;
    let aprons = priceApron * Math.ceil(students * 1.2);
    let eggs = priceEgg * 10 * students;

    for (let i = 0; i <= students; i++) {
        if (i % 5 == 0 && i != 0) {
            freePacks++;
        }
    }
    let flour = priceFlourPackage * (students - freePacks);

    if (flour < 0) {
        flour = 0;
    }
    let totalMoneyNeed = aprons + eggs + flour;
    let diff = Math.abs(budget - totalMoneyNeed);
    if (budget >= totalMoneyNeed) {
        console.log(`Items purchased for ${totalMoneyNeed.toFixed(2)}$.`);
    } else {
        console.log(`${diff.toFixed(2)}$ more needed.`);
    }
}

//cook(1000, // budget
//     0,  // students
//     1.0,  // flour
//     0.10, // eggs
//     10); // apron// 

cook(100,
    25,
    4.0,
    1.0,
    6.0)
