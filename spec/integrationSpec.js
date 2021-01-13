const Account = require("../src/account");
const Transaction = require("../src/transaction");

let exampleDate = new Date(2020, 0, 1);

describe("Integrations", () => {
  beforeEach(() => {
    Transaction.all = [];
    testAccount = new Account();
    jasmine.clock().mockDate(exampleDate);
    spyOn(console, 'log');
  });

  afterEach(() => {
    jasmine.clock().uninstall;
  });

  it("Successfully gives an empty statement", () => {
    expect(testAccount.getStatement()).toEqual(
      "There are no transactions to show"
    );
  });

  it("Successfully gives a statement of one credit transaction", () => {
    testAccount.deposit(15);
    expect(testAccount.getStatement()).toEqual(
      "date || credit || debit || balance\r\n01/01/2020 || 15.00 || || 15.00"
    );
  });

  it("Successfully formats the example given in the brief", () => {
    jasmine.clock().mockDate(new Date(2012, 0, 10));
    testAccount.deposit(1000);
    jasmine.clock().mockDate(new Date(2012, 0, 13));
    testAccount.deposit(2000);
    jasmine.clock().mockDate(new Date(2012, 0, 14));
    testAccount.withdraw(500);
    expect(testAccount.getStatement()).toEqual(
      `date || credit || debit || balance\r\n14/01/2012 || || 500.00 || 2500.00\r\n13/01/2012 || 2000.00 || || 3000.00\r\n10/01/2012 || 1000.00 || || 1000.00`
    );
  });
});
