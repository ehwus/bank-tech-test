const Account = require("../account");

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
  })
});
