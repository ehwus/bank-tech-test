class Transaction {
  static all = [];

  static add(newBalance, transactionType, amount) {
    Transaction.all.push(new Transaction(newBalance, transactionType, amount));
  }

  static printHistory() {
    if (Transaction.all.length < 1) return "There are no transactions to show";

    let statement = "date || credit || debit || balance";
    for (let transaction of Transaction.all) {
      statement += transaction.#printSelf();
    }

    return statement;
  }

  static #getCurrentDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    if (day < 10) {
      day = "0" + day;
    }

    if (month < 10) {
      month = "0" + month;
    }

    return day + "/" + month + "/" + year;
  }

  constructor(newBalance, transactionType, amount) {
    this.newBalance = newBalance;
    this.transactionType = transactionType;
    this.amount = amount;
    this.date = Transaction.#getCurrentDate();
  }

  #printSelf() {
    if (this.transactionType === "credit") {
      return `\n${this.date} || || ${this.#formatMoney(
        this.amount
      )} || ${this.#formatMoney(this.newBalance)}`;
    }
  }

  #formatMoney(n) {
    return Number.parseFloat(n).toFixed(2);
  }
}

module.exports = Transaction;