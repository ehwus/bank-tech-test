const Transaction = require('../transaction');

describe("Transaction", () => {
    describe("printHistory()", () => {
        it("Returns a message if there are no transactions", () => {
            expect(Transaction.printHistory()).toEqual('There are no transactions to show')
        });
    });
});