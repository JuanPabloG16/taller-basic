import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'fibonacci',
    loadComponent: () => import('./fibonacci/fibonacci.page').then( m => m.FibonacciPage)
  },
  {
    path: 'factorial',
    loadComponent: () => import('./factorial/factorial.page').then( m => m.FactorialPage)
  },
  {
    path: 'primos',
    loadComponent: () => import('./primos/primos.page').then( m => m.PrimosPage)
  },
  {
    path: 'par',
    loadComponent: () => import('./par/par.page').then( m => m.ParPage)
  },
  {
    path: 'union',
    loadComponent: () => import('./union/union.page').then( m => m.UnionPage)
  },
];
