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

  constructor(private _bank: BankService) { } // instantiating our service in our component

// Conected to the withdraw button this passes the input value into the updateBalance method from the service.
// note: we are passing the negative of the value to decrease the balance.
// Currently we are using console.log to ensure that the account balance is properly updated.
  withdraw() {
    console.log('before', this._bank.account.balance)
    this._bank.updateBalance(-this.value)
    console.log('after', this._bank.account.balance)
    this.value = null;
  }

// Conected to the deposit button this passes the input value into the updateBalance method from the service.
// Currently we are using console.log to ensure that the account balance is properly updated.
  deposit() {
    console.log('before', this._bank.account.balance)
    this._bank.updateBalance(this.value)
    console.log('after', this._bank.account.balance)
    this.value = null;
  }

}
