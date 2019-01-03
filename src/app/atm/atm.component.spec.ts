import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AtmComponent } from './atm.component';
import { BankService } from '../bank.service';
import { mockBankService } from '../../mocks/mockbank.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AtmComponent', () => {
  let component: AtmComponent;
  let fixture: ComponentFixture<AtmComponent>;
  let componentService: BankService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })

    TestBed.overrideComponent(
      AtmComponent,
      {set: {providers: [{provide: BankService, useClass: mockBankService }]}}
    )

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmComponent);
    component = fixture.componentInstance;
    componentService = fixture.debugElement.injector.get(BankService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a deposit function that updates the balance on the service', () => {
    component.value = 10
    component.deposit()
    expect(componentService.account.balance).toEqual(10);
  })

  it('should have a withdraw funtcion that updates the balance on the service', () => {
    component.value = 5
    component.withdraw()
    expect(componentService.account.balance).toEqual(-5);
  })

  it('should record transaction history on the service', () => {
    let numOfTransactions = componentService.account.transactions.length;
    component.value = 1;
    component.deposit();
    let numNewTransactions = componentService.account.transactions.length - numOfTransactions;
    expect(numNewTransactions).toEqual(1);
    component.value = 1;
    component.withdraw();
    numNewTransactions = componentService.account.transactions.length - numOfTransactions;
    expect(numNewTransactions).toEqual(2)
  })

});
