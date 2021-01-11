const Account = require("../account");

let exampleDate = new Date(2020, 0, 1);

describe("Account", () => {
  it("Opens with a balance of 0", () => {
    let testAccount = new Account();
    expect(testAccount.balance).toEqual(0);
  });

  describe("deposit()", () => {
    it("Updates balance after a deposit", () => {
      let testAccount = new Account();
      testAccount.deposit(10);
      expect(testAccount.balance).toEqual(10);
    });

    it("Throws an error if deposit is negative", () => {
      let testAccount = new Account();
      expect(() => {
        testAccount.deposit(-10);
      }).toThrowError("Deposits can only be positive!");
    });

    it("Rounds to the nearest two decimal places", () => {
        let testAccount = new Account();
        testAccount.deposit(10.111111);
        expect(testAccount.balance).toEqual(10.11)
    });
  });

  describe('withdraw()', () => {
      it("Updates balance after a withdrawal", () => {
        let testAccount = new Account();
        testAccount.deposit(15);
        testAccount.withdraw(5);
        expect(testAccount.balance).toEqual(10);
      });

      it("Throws an error if withdrawal would make balance negative", () => {
        let testAccount = new Account();
        expect(() => {
            testAccount.withdraw(100);
        }).toThrowError("You have insufficient funds for this transaction.")
      });

      it("Rounds withdrawal to the nearest two decimal places", () => {
        let testAccount = new Account();
        testAccount.deposit(15);
        testAccount.withdraw(1.5555555555)
        expect(testAccount.balance).toEqual(13.44)
      });
  });

  describe('getStatement()', () => {
      beforeEach(() => {
          jasmine.clock().mockDate(exampleDate);
      });

      afterEach(() => {
          jasmine.clock().uninstall;
      })

      it("Returns a message if there is no statement history", () => {
          let testAccount = new Account;
          expect(testAccount.getStatement()).toEqual('No transaction history');
      });

      it("Correctly returns one deposit transaction", () => {
        let testAccount = new Account;
        testAccount.deposit(15);
        expect(testAccount.getStatement()).toEqual(
            `date || credit || debit || balance\n01/01/2020 || || 15.00 || 15.00`
        );
      });

      it("Correctly returns two different transactions", () => {
        let testAccount = new Account;
        testAccount.deposit(15);
        testAccount.withdraw(5);
        let expectedStatement = `date || credit || debit || balance\n01/01/2020 || || 15.00 || 15.00`;
        expectedStatement += `\n01/01/2020 || 5.00 || || 10.00`;
        expect(testAccount.getStatement()).toEqual(expectedStatement);
      })
  })
});
