const Account = require('../account');
const Transaction = require('../transaction')

let exampleDate = new Date(2020, 0, 1);

describe("Integrations", () => {
    beforeEach(() => {
        Transaction.all = [];
        testAccount = new Account;
        jasmine.clock().mockDate(exampleDate);
    });

    afterEach(() => {
        jasmine.clock().uninstall;
    });

    it("Successfully gives an empty statement", () => {
        expect(testAccount.getStatement()).toEqual('There are no transactions to show');
    });

    it("Successfully adds a credit item to Transaction array", () => {
        let expectedTransaction = new Transaction(15, 'credit', 15);
        testAccount.deposit(15);
        expect(Transaction.all[0]).toEqual(expectedTransaction)
    });

    it("Successfully adds a debit item to a Transaction array", () => {
        let expectedTransaction = new Transaction(10, 'debit', 5);
        testAccount.deposit(15);
        testAccount.withdraw(5);
        expect(Transaction.all[1]).toEqual(expectedTransaction);
    });

    it("Successfully gives a statement of one credit transaction", () => {
        testAccount.deposit(15);
        expect(testAccount.getStatement()).toEqual(
            "date || credit || debit || balance\n01/01/2020 || 15.00 || || 15.00"
        );
    });
});