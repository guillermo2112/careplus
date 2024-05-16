import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ClinicasComponent } from './components/clinicas/clinicas.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { ClinicaVistaComponent } from './components/clinica-vista/clinica-vista.component';

export const routes: Routes = [
    {path: '', redirectTo:'home',pathMatch:'full'},
    {path: 'navbar', component: NavbarComponent},
    {path: 'home', component: HomeComponent},
    {path: 'quienes_somos', component: QuienesSomosComponent},
    {path: 'doctor', component: DoctorComponent},
    {path: 'inicio_sesion', component: LoginComponent},
    {path: 'especialidades', component: EspecialidadesComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'clinicas', component: ClinicasComponent},
    {path: 'clinica/:id', component: ClinicaVistaComponent},
];
