import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';

export const routes: Routes = [
  { path: '', redirectTo: 'atm', pathMatch: 'full' },
];

export const router: ModuleWithProviders = RouterModule.forRoot(routes);
