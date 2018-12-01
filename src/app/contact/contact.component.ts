import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _bank: BankService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    //If form is valid send to be alerted
    if (form.valid) {
      this._bank.sendForm()
      //reset form including submitted status and validators
      form.resetForm()
      this._router.navigate(['/atm'])
   }
   
  }

}
