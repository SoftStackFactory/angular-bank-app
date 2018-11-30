import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _bank: BankService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._bank.sendForm()
  }

}
