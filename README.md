# Bank 💵
This is my submission in response to the bank tech test, as part of the Makers Academy bootcamp. It provides the business logic for a basic banking app, which has been built using NodeJS and following the principles of test driven development. The only additional libraries used are Jasmine for running tests, and Istanbul for analysing coverage. I have ensured 100% test coverage for this project.

I started the process by writing user stories based off of the given brief, and wrote a class diagram off the back of this to have a plan for my the implementation. I then used TDD to get the functions of the class diagram built, meeting the MVP for each of the user stories that I drew up.

Once the MVP was working, I seperated the larger Account class into two - Accounts and Transactions. This was to follow the SRP, as the Account class was filling too many roles. While extracting this to a new class, I used mocking and dependency injection in  Jasmine to ensure that my code was following a modular pattern.

## Installation
Requirements: Node.js

 1. Clone this repository
 2. Open 'bank-test-tech' directory in your command line.
 3. Run `$ npm install` to install the dependencies.
 5. Run `$ npm test` to run the tests.
 6. Run `$ node -i -e "$(< account.js"` to use the classes in a REPL (see example usage below).

 ## Example Usage
 
    $ node -i -e "$(< account.js)"
    > let account = new Account;
    > account.deposit(1000);
    > account.deposit(2000);
    > account.withdraw(500);
    > console.log(account.getStatement());
	date || credit || debit || balance
	12/01/2021 || || 500.00 || 2500.00
	12/01/2021 || 2000.00 || || 3000.00
	12/01/2021 || 1000.00 || || 1000.00


## User Stories
    As a customer,
    So that I can spend my money,
    I'd like to be able to withdraw from my bank account.

    As a customer,
    So that I can keep my money safe,
    I'd like to deposit money into my account.
    
    As a customer,
    So that I don't accrue debt,
    I'd like to be warned when I try to withdraw more money than I have.

    As a customer,
    So I can manage my finances,
    I'd like to see my transaction history in a statement.

## Class Diagram
This is the original class diagram that I built the MVP off of, before extracting Transactions to be in their own class.

![A Class Diagram for the Account Class](/images/account-class-diagram.png)
    	
___
# Original Brief

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
