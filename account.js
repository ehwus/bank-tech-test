class Account {
  constructor() {
    this.balance = 0;
    this.transactionHistory = [];
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
    if (this.transactionHistory.length < 1) return "No transaction history";

    let statement = "date || credit || debit || balance";

    for (let transaction of this.transactionHistory) {
      statement += `\n${this.#getCurrentDate()} `;

      if (transaction.type === "credit") {
        statement += `|| || `;
        statement += this.#formatAmountForTransaction(transaction.amount);
        statement += ` || `;
        statement += this.#formatAmountForTransaction(transaction.balance);
      } else {
        statement += `|| `;
        statement += this.#formatAmountForTransaction(transaction.amount);
        statement += ` || || `;
        statement += this.#formatAmountForTransaction(transaction.balance);
      }
    }

    return statement;
  }

  #roundToTwoPlaces(n) {
    return +n.toFixed(2);
  }

  #formatAmountForTransaction(n) {
    return Number.parseFloat(n).toFixed(2);
  }

  #getCurrentDate() {
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

  #addTransaction(amount, type) {
    this.transactionHistory.push({
      balance: this.balance,
      type: type,
      amount: amount,
      date: this.#getCurrentDate(),
    });
  }
}

module.exports = Account;
