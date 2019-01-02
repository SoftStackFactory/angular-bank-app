import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';

import { router } from './app.router';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    TellerComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
