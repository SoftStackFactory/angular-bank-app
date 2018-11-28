import { Component } from '@angular/core';
import { BankService } from '../bank.service';


@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent {
  value: number;
  invalidInput: boolean = false

  constructor(private _bank: BankService) { }

  withdraw() {
    //show error message if not given a number larger than 0
    if (typeof this.value !== 'number' || this.value <= 0) {
      return this.invalidInput = true
    }
    this._bank.updateBalance(-this.value)
    this._bank.addTransaction('withdrawal', this.value)
    this.value = null; //empty input field
    this.invalidInput = false  //clear error message if one is being displayed
  }

  deposit() {
    //show error message if not given a number larger than 0
    if (typeof this.value !== 'number' || this.value <= 0) {
      return this.invalidInput = true
    }
    this._bank.updateBalance(this.value)
    this._bank.addTransaction('deposit', this.value)
    this.value = null;
    this.invalidInput = false;
  }

}
