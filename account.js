class Account {
    constructor() {
        this.balance = 0;
    }

    deposit(amount) {
        if (amount < 0) throw new Error('Deposits can only be positive!');

        this.balance += +amount.toFixed(2);
    }
}

module.exports = Account;