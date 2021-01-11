const Transaction = require('../transaction');

let exampleDate = new Date(2020, 0, 1);

describe("Transaction", () => {
    beforeEach(() => {
        jasmine.clock().mockDate(exampleDate);
    });

    afterEach(() => {
        jasmine.clock().uninstall;
    });

    describe("add()", () => {
        it("adds a deposit transaction to list of all", () => {
            Transaction.add(50, 'credit', 25);
            expect(Transaction.all[0].newBalance).toEqual(50)
            expect(Transaction.all[0].transactionType).toEqual('credit')
            expect(Transaction.all[0].amount).toEqual(25)
        });

        it("adds the date properly to a transaction", () => {
            Transaction.add(50, 'credit', 25);
            expect(Transaction.all[0].date).toEqual('01/01/2020');
        });
    });

    describe("printHistory()", () => {
        it("Returns a message if there are no transactions", () => {
            expect(Transaction.printHistory()).toEqual('There are no transactions to show')
        });
    });
});