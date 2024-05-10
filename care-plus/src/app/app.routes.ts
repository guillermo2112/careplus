import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    {path: '', redirectTo:'home',pathMatch:'full'},
    {path: 'navbar', component: NavbarComponent},
    {path: 'home', component: HomeComponent},
    {path: 'quienes_somos', component: QuienesSomosComponent},
    {path: 'inicio_sesion', component: LoginComponent},
    {path: 'especialidades', component: EspecialidadesComponent},
    {path: 'contacto', component: ContactoComponent},
];
