class Bank{
	constructor(bankName){
		this.bankName = bankName;
		this.accounts = {};
		//takes in the name of the bank.
		//makes an object to store all accounts into
	}
	
	makeAccount(accountNumber){
		
		if(this.checkForAccount(accountNumber)) {
			return false;
		} else {
			let newAccount = new Account();
			this.accounts[accountNumber] = newAccount;
			return newAccount;
		}
		//makes an account
		//takes in the account number of an account
		//checks if the account number already exists in the account storage object in the constructor
			//if already exists, returns false
		//otherwise makes an new Account object, storing it into the storage object in the constructor
		//returns the Account object that was constructed
	}
	checkForAccount(accountNumber){
		if (this.accounts[accountNumber]) {
			return true;
		} else {
			return false;
		}
		//checks if an account exists or not
		//takes in the account number of an account
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
	}
	removeAccount(accountNumber){
		if (!this.accounts[accountNumber]) {
			return `account ${accountNumber} does not exist`;
		} else if (this.accounts[accountNumber].totalCash > 0) {
			return `account is not empty`;
		} else {
			delete this.accounts[accountNumber];
			return `account ${accountNumber} deleted`;
		}
		//removes an account
		//takes in an account number
		//if the account doesn't exist, returns
			//"account <accountNumber> does not exist" where accountNumber is the account number
		//if the account is not empty, returns
			//'account is not empty'
		//otherwise deletes the account from the constructor storage
		//returns 
			'account <accountNumber> deleted'

	}
	deposit(accountNumber, depositAmount){
		if(!this.accounts[accountNumber]) {
			return `account does not exist`;
		} else {
			this.accounts[accountNumber].add(depositAmount);
			return `account ${accountNumber} now has ${this.accounts[accountNumber].totalCash}`;
		}
		//deposits money into an account
		//takes in an account number and a numeric amount
		//if the account doesn't exist, returns
			//'account does not exist'
		//otherwise uses the account's add method and adds to the account
			//returns
			//"account <accountNumber> now has <new account amount>
	}
	withdraw(accountNumber, amount){
		if (this.accounts[accountNumber]) {
			var amountRemoved = this.accounts[accountNumber].remove(amount);
			return `removed ${amountRemoved} from account ${accountNumber}. It now has ${this.accounts[accountNumber].totalCash}`;
		} else {
			return `account does not exist`;
		}
		//removes money from an account
		//takes in an account number and an amount
		//checks if the account exists, if not
			//return 'account does not exist'
		//uses the Account's remove method to withdraw funds from the account
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
	}
}
