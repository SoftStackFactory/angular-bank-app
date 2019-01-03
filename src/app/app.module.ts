import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //required to use [(ngModel)]

import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';

import { router } from './app.router';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { BankService } from './bank.service';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    TellerComponent,
    NavComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    router,
  ],
  providers: [BankService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
