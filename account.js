const Transaction = require("./transaction");

class Account {
  constructor(transactionClass = Transaction) {
    this.balance = 0;
    this.transactionClass = transactionClass;
  }

  deposit(amount) {
    if (amount < 0) throw new Error("Deposits can only be positive!");

    let formattedAmount = this.#roundToTwoPlaces(amount);
    this.balance += formattedAmount;

    this.#addTransaction(formattedAmount, "credit");
  }

  withdraw(amount) {
    if (this.balance - amount < 0)
      throw new Error("You have insufficient funds for this transaction.");

    let formattedAmount = this.#roundToTwoPlaces(amount);
    this.balance -= formattedAmount;

    this.#addTransaction(formattedAmount, "debit");
  }

  getStatement() {
    return this.transactionClass.printHistory();
  }

  #roundToTwoPlaces(n) {
    return +n.toFixed(2);
  }

  #addTransaction(amount, type) {
    this.transactionClass.add(this.balance, type, amount);
  }
}

module.exports = Account;
