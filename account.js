class Account {
    constructor() {
        this.balance = 0;
    }

    deposit(amount) {
        if (amount < 0) throw new Error('Deposits can only be positive!');

        this.balance += +amount.toFixed(2);
    }

    withdraw(amount) {
        if (this.balance - amount < 0) throw new Error('You have insufficient funds for this transaction.')

        this.balance -= amount;
    }
}

module.exports = Account;