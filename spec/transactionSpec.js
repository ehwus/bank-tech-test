const Transaction = require("../src/transaction");

let exampleDate = new Date(2020, 0, 1);

describe("Transaction", () => {
  beforeEach(() => {
    jasmine.clock().mockDate(exampleDate);
    Transaction.all = [];
  });

  afterEach(() => {
    jasmine.clock().uninstall;
  });

  describe("add()", () => {
    it("adds a deposit transaction to list of all", () => {
      Transaction.add(50, "credit", 25);
      expect(Transaction.all[0].newBalance).toEqual(50);
      expect(Transaction.all[0].transactionType).toEqual("credit");
      expect(Transaction.all[0].amount).toEqual(25);
    });

    it("adds the date properly to a transaction", () => {
      Transaction.add(50, "credit", 25);
      expect(Transaction.all[0].date).toEqual("01/01/2020");
    });
  });

  describe("printHistory()", () => {
    it("Returns a message if there are no transactions", () => {
      expect(Transaction.printHistory()).toEqual(
        "There are no transactions to show"
      );
    });

    it("Correctly prints a history with one credit transaction", () => {
      Transaction.add(15, "credit", 15);
      expect(Transaction.printHistory()).toEqual(
        "date || credit || debit || balance\r\n01/01/2020 || 15.00 || || 15.00"
      );
    });

    it("Correctly prints out a history with two different types of transaction", () => {
      Transaction.add(50, "credit", 50);
      Transaction.add(35, "debit", 15);
      expect(Transaction.printHistory()).toEqual(
        `date || credit || debit || balance\r\n01/01/2020 || || 15.00 || 35.00\r\n01/01/2020 || 50.00 || || 50.00`
      );
    });
  });
});
