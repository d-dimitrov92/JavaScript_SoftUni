class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity == this.vehicles.length) {
            throw new Error("Not enough parking space.")
        }
        this.vehicles.push({
            carModel: carModel,
            carNumber: carNumber,
            payed: false
        });
        this.capacity--;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`

    }

    removeCar(carNumber) {
        let removingIndex = this.vehicles.findIndex(x => x.carNumber == carNumber)

        if (removingIndex < 0) {
            throw new Error("The car, you're looking for, is not found.")
        }
        if (this.vehicles[removingIndex].payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        this.vehicles.splice(removingIndex, 1);
        this.capacity++;
        return `${carNumber} left the parking lot.`

    }

    pay(carNumber) {
        let index = this.vehicles.findIndex(x => x.carNumber == carNumber);
        if (!this.vehicles.includes(this.vehicles[index])) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if (this.vehicles[index].payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        this.vehicles[index].payed = true
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        if (!carNumber) {
            let forPrint = [];
            forPrint.push(`The Parking Lot has ${this.capacity} empty spots left.`);
            let result = this.vehicles
            .sort((a, b) => { a.carModel.localeCompare(b.carModel); })
            .map((car) => `${car.carModel} == ${car.carNumber} - ${car.payed == true ? 'Has payed' : 'Not payed'}`).join('\n')
            forPrint.push(result)
            return forPrint.join('\n')
        } else {
            let index = this.vehicles.findIndex(x => x.carNumber == carNumber);
            return `${this.vehicles[index].carModel} == ${this.vehicles[index].carNumber} - ${this.vehicles[index].payed == true ? 'Has payed' : 'Not payed'}`
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics(''));

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));