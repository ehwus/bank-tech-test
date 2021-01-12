const Account = require("../account");

class FakeTransaction {
  static all = []

  constructor(newBalance, transactionType, amount) {
    this.newBalance = newBalance,
    this.transactionType = transactionType,
    this.amount = amount,
    this.all = []
  }

  static add(transaction) {
    FakeTransaction.all.push(transaction)
  }

  static printHistory() {
    return "printHistory() returned string";
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
      it("Calls the printHistory() method on given class", () => {
          expect(testAccount.getStatement()).toEqual('printHistory() returned string');
      });
  });
});
