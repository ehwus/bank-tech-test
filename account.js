class Account {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    if (amount < 0) throw new Error("Deposits can only be positive!");

    this.balance += this.#roundToTwoPlaces(amount);
  }

  withdraw(amount) {
    if (this.balance - amount < 0)
      throw new Error("You have insufficient funds for this transaction.");

    this.balance -= this.#roundToTwoPlaces(amount);
  }

  getStatement() {
      return 'No transaction history'
  }

  #roundToTwoPlaces(n) {
    return +n.toFixed(2);
  }
}

module.exports = Account;
