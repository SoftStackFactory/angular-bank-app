import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellerComponent } from './teller.component';
import { BankService } from '../bank.service';
import { mockBankService } from '../../mocks/mockbank.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TellerComponent', () => {
  let component: TellerComponent;
  let fixture: ComponentFixture<TellerComponent>;
  let componentService: BankService


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellerComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })

  //uses mockBankService in place of regular service
    TestBed.overrideComponent( 
      TellerComponent,
      {set: {providers: [{provide: BankService, useClass: mockBankService }]}}
    )

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellerComponent);
    component = fixture.componentInstance;
    componentService = fixture.debugElement.injector.get(BankService);
    fixture.detectChanges();
  });
  //default test to check if component builds
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('teller.deposit', () => {
    // set value property on component, calls the withdraw funciton, checks mockservice balance to ensure balance is updated
    it('should have a deposit function that updates the balance on the service', () => {
      component.value = 10
      component.deposit()
      expect(componentService.account.balance).toEqual(10);
    })
  })

  describe('teller.withdraw', () => {
    // set value property on component, calls the deposit funciton, checks mockservice balance to ensure balance is updated
    it('should have a withdraw funtcion that updates the balance on the service', () => {
      component.value = 5
      component.withdraw()
      expect(componentService.account.balance).toEqual(-5);
    })
  })
  
  describe('teller.transactions', () => {
  // set value property on component, calls the withdraw funciton, looks for increase in transaction array on service,
  //calls deposit and again checks transaction lenght
    it('should record transaction history on the service', () => {
      let numOfTransactions = componentService.account.transactions.length;
      component.value = 1
      component.deposit();
      let numNewTransactions = componentService.account.transactions.length - numOfTransactions;
      expect(numNewTransactions).toEqual(1);
      component.value = 1
      component.withdraw();
      numNewTransactions = componentService.account.transactions.length - numOfTransactions;
      expect(numNewTransactions).toEqual(2)
    }); 
  })

})