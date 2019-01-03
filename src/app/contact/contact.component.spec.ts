import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { FormsModule } from '@angular/forms';
import { routes } from '../app.router';
import { AtmComponent } from '../atm/atm.component';
import { BankService } from '../bank.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TellerComponent } from '../teller/teller.component';


describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent, AtmComponent, TellerComponent ],
      imports: [ FormsModule, RouterTestingModule.withRoutes(routes)],
      providers: [BankService],
      schemas: [ NO_ERRORS_SCHEMA ],
    })

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
