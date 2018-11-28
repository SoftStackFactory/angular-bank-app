import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {
  value: number;  //Variable connect to input.  Stores value for withdrwal or deposit
  display: string; // Variable that is used to conditionally display content.
  invalidInput: boolean = false
  transaction;

  constructor(private _bank: BankService) { } // instantiating our service in our component

// Conected to the withdraw button this passes the input value into the updateBalance method from the service.
// note: we are passing the negative of the value to decrease the balance.
// Currently we are using console.log to ensure that the account balance is properly updated.
  withdraw() {
    //show error message if not given a number larger than 0
    if (typeof this.value !== 'number' || this.value <= 0) {
      return this.invalidInput = true
    }

    //object to hold information about the transaction
    this.transaction = {
      msg: `Congratulations, Your withdrawl was successful`,
      previousBalance: this._bank.account.balance,
      amount: this.value,
    }
    this._bank.updateBalance(-this.value)
    this._bank.addTransaction('withdrawal', this.value)
    this.display = 'success' //show sucessfull transaction information
    this.value = null; //empty input field
    this.invalidInput = false  //clear error message if one is being displayed
  }

// Conected to the deposit button this passes the input value into the updateBalance method from the service.
// Currently we are using console.log to ensure that the account balance is properly updated.
  deposit() {
    //show error message if not given a number larger than 0
    if (typeof this.value !== 'number' || this.value <= 0) {
      return this.invalidInput = true
    }
    //object to hold information about the transaction
    this.transaction = {
      msg: `Congratulations, Your deposit was successful`,
      previousBalance: this._bank.account.balance,
      amount: this.value,
    }
    this._bank.updateBalance(this.value)
    this._bank.addTransaction('deposit', this.value)
    this.display = 'success'
    this.value = null;
    this.invalidInput = false;
  }

}
