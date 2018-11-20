import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';

export const router: Routes = [
  { path: '', redirectTo: 'atm', pathMatch: 'full' }, //reroute to atm if no path is provided
  { path: 'atm', component: AtmComponent }, // display AtmComponent for the atm path
  { path: 'teller', component: TellerComponent }, // display TellerComponent for the teller path
  { path: '**', redirectTo: 'atm', pathMatch: 'full' } // reroute to atm path for any path no listed above
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
