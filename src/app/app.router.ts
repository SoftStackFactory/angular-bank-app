import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'atm', pathMatch: 'full' }, //reroute to atm if no path is provided
  { path: 'atm', component: AtmComponent }, // display AtmComponent for the atm path
  { path: 'teller', component: TellerComponent }, // display TellerComponent for the teller path
  { path: 'contact', component: ContactComponent },  // display ContactComponent for the contact path
  { path: '**', redirectTo: 'atm', pathMatch: 'full' } // reroute to atm path for any path no listed above
];

export const router: ModuleWithProviders = RouterModule.forRoot(routes);
