const Account = require('../account');

describe('Account', () => {
    it('Opens with a balance of 0', () => {
        console.log(Account)
        let testAccount = new Account;
        console.log(testAccount)
        expect(testAccount.balance).toEqual(0);
    })
})