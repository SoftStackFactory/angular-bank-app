import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent {

  constructor(private _bank: BankService) { }

  withdraw(amount) {
    this._bank.updateBalance(-amount)
    this._bank.addTransaction('withdrawl', amount)
  }

  deposit(amount) {
    this._bank.updateBalance(amount)
    this._bank.addTransaction('deposit', amount)
  }

}
