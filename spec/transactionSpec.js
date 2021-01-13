const Transaction = require("../src/transaction");
const TRANSACTION_TYPES = require("../src/transactionTypes");

let exampleDate = new Date(2020, 0, 1);

describe("Transaction", () => {
  beforeEach(() => {
    jasmine.clock().mockDate(exampleDate);
    Transaction.all = [];
    spyOn(console, 'log');
  });

  afterEach(() => {
    jasmine.clock().uninstall;
  });

  describe("printHistory()", () => {
    it("Returns a message if there are no transactions", () => {
      expect(Transaction.printHistory()).toEqual(
        "There are no transactions to show"
      );
    });

    it("Correctly prints a history with one credit transaction", () => {
      Transaction.add(15, TRANSACTION_TYPES["CREDIT"], 15);
      expect(Transaction.printHistory()).toEqual(
        "date || credit || debit || balance\r\n01/01/2020 || 15.00 || || 15.00"
      );
    });

    it("Correctly prints out a history with two different types of transaction", () => {
      Transaction.add(50, TRANSACTION_TYPES["CREDIT"], 50);
      Transaction.add(35, TRANSACTION_TYPES["DEBIT"], 15);
      expect(Transaction.printHistory()).toEqual(
        `date || credit || debit || balance\r\n01/01/2020 || || 15.00 || 35.00\r\n01/01/2020 || 50.00 || || 50.00`
      );
    });
  });
});
