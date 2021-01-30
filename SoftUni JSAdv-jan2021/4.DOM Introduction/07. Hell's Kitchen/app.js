function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let restaurants = {};
   let bestRestaurantP = document.querySelector('#bestRestaurant>p');
   let workersP = document.querySelector('#workers>p');
   let input = document.querySelector('#inputs textarea');
   function onClick() {
      const array = JSON.parse(input.value);
      for (const item of array) {
         const tokens = item.split(' - ');
         const restaurantName = tokens[0];
         let workersArr = tokens[1].split(', ');
         let workers = [];

         for (const worker of workersArr) {
            const tokens = worker.split(' ');
            const salary = Number(tokens[1]);
            workers.push({ name: tokens[0], salary })
         }
         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }

         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
         let bestSalary = workers[0].salary;
         let averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[restaurantName] = {
            workers,
            averageSalary,
            bestSalary
         }
      }
      let bestRestaurantSalary = 0;
      let best = undefined;
      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantSalary) {
            best = {
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary
            }
            bestRestaurantSalary = restaurants[name].averageSalary;
         }
      }
      bestRestaurantP.textContent =
         `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`

      let workersResult = [];

      best.workers.forEach(worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      });
      workersP.textContent = workersResult.join(' ')
   }
}

// restaurants = {
//    restaurantName:{
//       workers,
//       bestSalary,
//       averageSalary
//    }
// }