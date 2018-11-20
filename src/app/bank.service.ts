import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  account: any = {
    fname: 'first name',
    lname: 'last name',
    age: 0,
    address: {
      street: '1234 street st',
      city: 'city',
      state: 'state',
      zip: 12345,
      country: 'canada'
    },
    balance: 0.01,
    currency: 'usd',
    transactions: []
  };

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


}
