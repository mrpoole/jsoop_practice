

class Account{
	constructor(){
		this.totalCash = 0;
		//store the amount of money in the account
	}
	add(amount){
		if(typeof amount === "number" && amount > 0) {
			this.totalCash = this.totalCash + amount;
		} else {
			return false;
		}
		return this.totalCash;
		//add money to the amount stored in the account
		//takes in an amount
		//checks if it is actually a number greater than 0
			//if not, return false
		//adds it to the existing amount
		//returns the new amount in the account
	}
	
	remove(amount){
		if(typeof amount === "number" && amount > 0) {
			if(amount > this.totalCash) {
				var amountWithdrawn = this.totalCash;
				this.totalCash = 0;
				return amountWithdrawn;
			} else if (amount < this.totalCash) {
				this.totalCash -= amount;
				return amount;
			}
		} else {
			return false;
		};
		
		//removes funds from an account
		//checks if amount is actually a number greater than 0
			//if not, return false
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.totalCash;
		//returns the amount in the account
	}
}