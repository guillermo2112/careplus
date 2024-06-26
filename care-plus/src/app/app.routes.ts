import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

export const routes: Routes = [
    {path: 'navbar', component: NavbarComponent},
    {path: 'quienes_somos', component: QuienesSomosComponent},
    {path: 'iniciar_sesion', component: LoginComponent},
];

