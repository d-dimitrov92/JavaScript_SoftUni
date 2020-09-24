function solve(arg1, arg2) {
    let startingPopulation = Number(arg1);
    let years = Number(arg2);
    let yearCounter = 1;
    let newPopulation = startingPopulation;
    let newBees = 0;
    let deadBees = 0;
    let migratedBees = 0;

    for (let i = 1; i <= years; i++) {
        newPopulation += Math.floor(newPopulation / 10) * 2;
        if (i % 5 == 0) {
            migratedBees += Math.floor(newPopulation / 50) * 5;
            newPopulation -= migratedBees;
        }
        deadBees += Math.floor(newPopulation / 20) * 2;
        newPopulation -= deadBees;
        
        newBees = 0;
        deadBees = 0;
        migratedBees = 0;
    }

    console.log(`Beehive population: ${newPopulation}`);
}


solve("1000", "23")



    //     while (yearCounter < years) {
    //         yearCounter++;
    //         newBees += Math.floor(newPopulation / 10) * 2;
    //         newPopulation += newBees;
    //         if (yearCounter % 5 == 0) {
    //             migratedBees += Math.floor(newPopulation / 50) * 5;
    //         }
    //         deadBees += Math.floor(newPopulation / 20) * 2;
    //         newPopulation -= deadBees - migratedBees;
    //         if(yearCounter == years){
    //             newPopulation -= deadBees - migratedBees;
    //         }

    //         newBees = 0;
    //         deadBees = 0;
    //         migratedBees = 0;
    //     }

    //     newPopulation = newPopulation - deadBees;

    //     console.log(`Beehive population: ${newPopulation}`)

    // }
