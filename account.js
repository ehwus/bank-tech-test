const Transaction = require("./transaction");

class Account {
  constructor(transactionClass = Transaction) {
    this.balance = 0;
    this.transactionClass = transactionClass;
  }

  deposit(amount) {
    this.#errorCheckInput("deposit", amount);

    let formattedAmount = this.#roundToTwoPlaces(amount);
    this.balance += formattedAmount;
    this.#addTransaction(formattedAmount, "credit");
  }

  withdraw(amount) {
    this.#errorCheckInput("withdraw", amount);

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

  #errorCheckInput(type, amount) {
    this.#checkNumber(amount);

    if (type === "deposit" && amount < 0) {
      throw new Error("Deposits can only be positive!");
    } else if (type === "withdraw" && this.balance - amount < 0) {
      throw new Error("You have insufficient funds for this transaction.");
    }
  }

  #checkNumber(n) {
    if (isNaN(n)) throw new Error("Not a number, try again");
  }
}

module.exports = Account;
