import { TestBed, inject } from '@angular/core/testing';

import { BankService } from './bank.service';

describe('BankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankService]
    });
  });

  it('should be created', inject([BankService], (service: BankService) => {
    expect(service).toBeTruthy();
  }));

  it('should update account balance when updatebalance method is called', inject([BankService], (service: BankService) => {
    service.updateBalance(5)
    expect(service.account.balance).toEqual(5.01)
  }));

  it('should update the list of transactions when a transaction is complete', inject([BankService], (service: BankService) => {
    let numOfTransactions = service.account.transactions.length;
    service.addTransaction('deposit', 1)
    let numOfNewTransactions = service.account.transactions.length - numOfTransactions;
    expect(numOfNewTransactions).toEqual(1);
  }))
});
