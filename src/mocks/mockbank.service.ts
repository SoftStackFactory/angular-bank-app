import { BankService } from "../app/bank.service";

export class mockBankService extends BankService {
  account: any = {
    fname: 'Rick',
    lname: 'Ross',
    age: 0,
    address: {
      street: '1234 street st',
      city: 'city',
      state: 'state',
      zip: 12345,
      country: 'canada'
    },
    balance: 0.00,
    currency: 'usd',
    transactions: [
      {
        date: '01-01-01',
        type: 'withdrawal',
        amount: 200.00,
        currency: 'usd'
      },
      {
        date: '02-02-02',
        type: 'deposit',
        amount: 100.00,
        currency: 'usd'
      },
      {
        date: '03-03-03',
        type: 'withdrawal',
        amount: 2.00,
        currency: 'usd'
      }
    ]
  };

  updateBalance(amount) {
    this.account.balance += amount;
  }

  addTransaction(type, amount) {
    this.account.transactions.push({
      date: Date.now(),
      type: type,
      amount: amount,
      currency: 'usd',
    })
  }

}