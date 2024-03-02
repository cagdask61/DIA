import { Routes } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component') }
];
export default APP_ROUTES;