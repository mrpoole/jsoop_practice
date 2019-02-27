
class Calculator{
	constructor(){
		this.number = null;
		this.numberArray = [];
		this.operator = null;
		//takes in nothing
		//make storage for the operator and the numbers
	}
	loadOperator(operator){
		if(operator === '+'|| operator === '-' || operator === '*' || operator === '/') {
			this.operator = operator;
			return true;
		} else {
			return false;
		}
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
	}
	loadNumber(typedNumber){
		if(typeof typedNumber === "number" && this.number < 2) {
			this.number++;
			this.numberArray.push(typedNumber);
			return this.number;
		} else {
			return false;
		}
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate(){
		this.firstNum = this.numberArray.slice(0,1);
		this.secondNum = this.numberArray.slice(1,2);
		
		if(this.operator === "+") {
			this.result = parseFloat(this.firstNum) + parseFloat(this.secondNum);
		} else if(this.operator === '-') {
			this.result = this.firstNum - this.secondNum;
		} else if(this.operator === '*') {
			this.result = this.firstNum * this.secondNum;
		} else if(this.operator === '/') {
			this.result = this.firstNum / this.secondNum;
		}
		this.numberArray = [];
		this.number = null;
		console.log(this.firstNum, this.operator, this.secondNum);
		return this.result;
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
	}
}