class Transaction {
  constructor(newBalance, transactionType, amount) {
    this.newBalance = newBalance;
    this.transactionType = transactionType;
    this.amount = amount;
    this.date = Transaction.#getCurrentDate();
  }

  static all = [];

  static add(newBalance, transactionType, amount) {
    Transaction.all.push(new Transaction(newBalance, transactionType, amount));
  }

  static printHistory() {
    return "There are no transactions to show";
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
}

module.exports = Transaction;
