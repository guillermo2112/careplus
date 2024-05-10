import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: 'navbar', component: NavbarComponent},
    {path: 'quienes_somos', component: QuienesSomosComponent},
    {path: 'inicio_sesion', component: LoginComponent},
];
