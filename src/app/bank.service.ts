import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  account: any = {
    fname: 'Horatio',
    lname: 'Vanderbuilt',
    age: 58,
    address: {
      street: '1234 street st',
      city: 'San Diego',
      state: 'Ca',
      zip: 12345,
      country: 'U.S.A'
    },
    balance: 0.01,
    currency: 'usd',
    transactions: []
  };

  formInput: any = {  }

  constructor() { }
// Function that can be called from our component to update the account balance.
// It takes paramater so we can pass the input value to the service.
  updateBalance(amount) {
    this.account.balance += amount
  }
//Funciton to add new transaction objects to the account transaction history.
  addTransaction(type, amount) {
    this.account.transactions.push({
      date: Date.now(),
      type: type,
      amount: amount,
      currency: 'usd',
    })
  }

  sendForm(){
   alert( `
    Thank you for reaching out.  We have received the below message.
    Name: ${this.formInput.name},
    Email: ${this.formInput.email},
    Message: ${this.formInput.msg}
    `
   )

   this.formInput = {}
  }


}
