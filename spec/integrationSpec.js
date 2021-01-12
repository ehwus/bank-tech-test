const Account = require('../account');

describe("Integrations", () => {
    beforeEach(() => {
        testAccount = new Account;
    });

    it("Successfully gives an empty statement", () => {
        expect(testAccount.getStatement()).toEqual('There are no transactions to show');
    });
});