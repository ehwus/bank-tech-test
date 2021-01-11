class Transaction {
  constructor(newBalance, transactionType, amount) {
      this.newBalance = newBalance;
      this.transactionType = transactionType;
      this.amount = amount;
  }

  static all = [];

  static add(newBalance, transactionType, amount) {
    Transaction.all.push(new Transaction(newBalance, transactionType, amount));
  }

  static printHistory() {
    return "There are no transactions to show";
  }
}

module.exports = Transaction;
