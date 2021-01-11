const Account = require("../account");

class FakeTransaction {
  constructor(balance, type, amount, date) {
    this.balance = balance,
    this.type = type,
    this.amount = amount
  }
};

describe("Account", () => {
  beforeEach(() => {
    testAccount = new Account(FakeTransaction);
  });
  it("Opens with a balance of 0", () => {
    expect(testAccount.balance).toEqual(0);
  });

  describe("deposit()", () => {
    it("Updates balance after a deposit", () => {
      testAccount.deposit(10);
      expect(testAccount.balance).toEqual(10);
    });

    it("Throws an error if deposit is negative", () => {
      expect(() => {
        testAccount.deposit(-10);
      }).toThrowError("Deposits can only be positive!");
    });

    it("Rounds to the nearest two decimal places", () => {
        testAccount.deposit(10.111111);
        expect(testAccount.balance).toEqual(10.11)
    });
  });

  describe('withdraw()', () => {
      it("Updates balance after a withdrawal", () => {
        testAccount.deposit(15);
        testAccount.withdraw(5);
        expect(testAccount.balance).toEqual(10);
      });

      it("Throws an error if withdrawal would make balance negative", () => {
        expect(() => {
            testAccount.withdraw(100);
        }).toThrowError("You have insufficient funds for this transaction.")
      });

      it("Rounds withdrawal to the nearest two decimal places", () => {
        testAccount.deposit(15);
        testAccount.withdraw(1.5555555555)
        expect(testAccount.balance).toEqual(13.44)
      });
  });

  describe('getStatement()', () => {
      it("Returns a message if there is no statement history", () => {
          expect(testAccount.getStatement()).toEqual('No transaction history');
      });

      xit("Correctly returns one deposit transaction", () => {
        let testAccount = new Account;
        testAccount.deposit(15);
        expect(testAccount.getStatement()).toEqual(
            `date || credit || debit || balance\n01/01/2020 || || 15.00 || 15.00`
        );
      });

      xit("Correctly returns two different transactions", () => {
        let testAccount = new Account;
        testAccount.deposit(15);
        testAccount.withdraw(5);
        let expectedStatement = `date || credit || debit || balance\n01/01/2020 || || 15.00 || 15.00`;
        expectedStatement += `\n01/01/2020 || 5.00 || || 10.00`;
        expect(testAccount.getStatement()).toEqual(expectedStatement);
      })
  })
});
