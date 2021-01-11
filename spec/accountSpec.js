const Account = require('../account');

describe('Account', () => {
    it('Opens with a balance of 0', () => {
        let testAccount = new Account;
        expect(testAccount.balance).toEqual(0);
    });

    describe('deposit()', () => {
        it('Updates balance after a deposit', () => {
            let testAccount = new Account;
            testAccount.deposit(10);
            expect(testAccount.balance).toEqual(10);
        });
    })
})