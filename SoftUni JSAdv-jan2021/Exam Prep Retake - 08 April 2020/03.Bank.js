class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }

    set bankName(value) {
        this._bankName = value;
    }
    get bankName() {
        return this._bankName
    }

    newCustomer(customer) {
        if (this.allCustomers.find(cust => cust.personalId == customer.personalId && cust.lastName == customer.lastName)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        let customer = this.allCustomers.find(cust => cust.personalId == personalId);
        if (!customer) {
            throw new Error('We have no customer with this ID!')
        }
        if (!customer.hasOwnProperty('totalMoney')) {
            customer.totalMoney = 0;
        }
        if (!customer.hasOwnProperty('transactions')) {
            customer.transactions = [];
        }
        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
        customer.totalMoney += Number(amount);

        return `${customer.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {
        let customer = this.allCustomers.find(cust => cust.personalId == personalId);
        if (!customer) {
            throw new Error('We have no customer with this ID!')
        }
        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        }
        customer.totalMoney -= amount;
        customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        let customer = this.allCustomers.find(cust => cust.personalId == personalId);
        let result = [`Bank name: ${this.bankName}`,
        `Customer name: ${customer.firstName} ${customer.lastName}`,
        `Customer ID: ${customer.personalId}`,
        `Total Money: ${customer.totalMoney}$`,
            `Transactions:`];
        if (!customer) {
            throw new Error('We have no customer with this ID!')
        }
        if (customer.transactions) {
            for (let i = customer.transactions.length - 1; i >= 0; i--) {
                result.push(`${i + 1}. ` + customer.transactions[i]);
            }
        }
        return result.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
