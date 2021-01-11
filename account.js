class Account {
  constructor() {
    this.balance = 0;
    this.transactionHistory = [];
  }

  deposit(amount) {
    if (amount < 0) throw new Error("Deposits can only be positive!");

    let formattedAmount = this.#roundToTwoPlaces(amount)
    this.balance += formattedAmount;

    this.transactionHistory.push(
        {
            balance: this.balance,
            type: 'credit',
            amount: formattedAmount,
            date: this.#getCurrentDate()
        }
    )
  }

  withdraw(amount) {
    if (this.balance - amount < 0)
      throw new Error("You have insufficient funds for this transaction.");

    this.balance -= this.#roundToTwoPlaces(amount);
  }

  getStatement() {
      if (this.transactionHistory.length < 1) return 'No transaction history';

      let statement = 'date || credit || debit || balance\n';
      for (let transaction of this.transactionHistory) {
          console.log(transaction);
      }

      return statement;
  }

  #roundToTwoPlaces(n) {
    return +n.toFixed(2);
  }

  #getCurrentDate() {
      let today = new Date();
      let day = today.getDate();
      let month = today.getMonth() + 1;
      let year = today.getFullYear();

      if (day < 10) {
          day = '0' + day;
      }

      if (month < 10) {
          month = '0' + month;
      }

      return day + '/' + month + '/' + year;
  }
}

module.exports = Account;
