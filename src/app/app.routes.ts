import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TicketsComponent } from './tickets/tickets.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'tickets',
    component: TicketsComponent
  },




];
