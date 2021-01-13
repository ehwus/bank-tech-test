const Transaction = require("./transaction");
const TRANSACTION_TYPES = require("./transactionTypes");

class Account {
  constructor(transactionClass = Transaction) {
    this.balance = 0;
    this.transactionClass = transactionClass;
  }

  deposit(amount) {
    this.#errorCheckInput(TRANSACTION_TYPES["CREDIT"], amount);

    let formattedAmount = this.#roundToTwoPlaces(amount);
    this.balance += formattedAmount;
    this.#addTransaction(formattedAmount, TRANSACTION_TYPES["CREDIT"]);
  }

  withdraw(amount) {
    this.#errorCheckInput(TRANSACTION_TYPES["DEBIT"], amount);

    let formattedAmount = this.#roundToTwoPlaces(amount);
    this.balance -= formattedAmount;
    this.#addTransaction(formattedAmount, TRANSACTION_TYPES["DEBIT"]);
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

  #errorCheckInput(type, amount) {
    this.#checkIfNumber(amount);

    if (type === TRANSACTION_TYPES["CREDIT"]) {
      this.#checkNumberPositive(amount);
    } else if (type === TRANSACTION_TYPES["DEBIT"]) {
      this.#checkEnoughFunds(amount);
    }
  }

  #checkIfNumber(n) {
    if (isNaN(n)) throw new Error("Not a number, try again");
  }

  #checkNumberPositive(n) {
    if (n < 0) throw new Error("Deposits can only be positive!");
  }

  #checkEnoughFunds(n) {
    if (this.balance - n < 0)
      throw new Error("You have insufficient funds for this transaction.");
  }
}

module.exports = Account;
