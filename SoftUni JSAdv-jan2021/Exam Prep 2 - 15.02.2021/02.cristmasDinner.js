class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number")
        }
        this._budget = value;
    }
    get budget() {
        return this._budget
    }

    shopping([type, price]) {
        if (price > this.budget) {
            throw new Error("Not enough money to buy this product")
        }
        this.budget -= price;
        this.products.push(type);
        return `You have successfully bought ${type}!`;
    }

    recipes({ recipeName, productsList }) {
        for (const product of productsList) {
            if (!this.products.includes(product)) {
                throw new Error("We do not have this product")
            }
        }
        this.dishes.push({ recipeName, productsList });
        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        let dishNames = [];
        let guestNames = Object.keys(this.guests);
        for (const item of this.dishes) {
            dishNames.push(item.recipeName);
        }
        if (!dishNames.includes(dish)) {
            throw new Error("We do not have this dish");
        }
        if (guestNames.includes(name)) {
            throw new Error("This guest has already been invited")
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = [];

        Object.entries(this.guests).forEach(([guestName, dish]) => {
            result.push(`${guestName} will eat ${dish}, which consists of ${this.dishes.find(d => d.recipeName == dish).productsList.join(', ')}`)
        });

        return result.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

// for (const guest in this.guests) {
//     let produsctsForPrint = [];
//     let personalDish = this.guests[guest]
//     for (const dish of this.dishes) {
//         if(dish.recipeName === personalDish){
//             produsctsForPrint.push(dish.productsList)
//         }
//     }
//     let produsctsForPrint1 = [...produsctsForPrint].join(', ');
//     result.push(`${guest} will eat ${personalDish}, which consists of ${produsctsForPrint1}`);
// }