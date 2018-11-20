import { Component } from '@angular/core';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {
  value: number;  //Variable connect to input.  Stores value for withdrwal or deposit

  constructor() { }

}
