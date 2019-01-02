import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {

  constructor(private _bank: BankService) { }

  deposit(amount) {
    this._bank.updateBalance(amount)
    this._bank.addTransaction('deposit', amount)
  }

  withdraw(amount) {
    this._bank.updateBalance(-amount)
    this._bank.addTransaction('withdrawl', amount)
  }

}
