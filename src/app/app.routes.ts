import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio').then(m => m.Inicio)
  },
  {
    path: 'reservas',
    loadComponent: () => import('./pages/reservas/reservas').then(m => m.Reservas)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto').then(m => m.Contacto)
  }
];

