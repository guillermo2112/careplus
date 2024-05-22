import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { ContactoComponent } from './components/paciente/contacto/contacto.component';
import { ClinicasComponent } from './components/clinicas/clinicas.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { ClinicaVistaComponent } from './components/clinica-vista/clinica-vista.component';
import { DoctorVistaComponent } from './components/doctor-vista/doctor-vista.component';
import { UpdateSpecialtyComponent } from './components/administradorTI/update-specialty/update-specialty.component';
import { UpdateDoctorComponent } from './components/administradorTI/update-doctor/update-doctor.component';
import { UpdateHospitalComponent } from './components/administradorTI/update-hospital/update-hospital.component';
import { AddPacienteComponent } from './components/administradorTI/add-paciente/add-paciente.component';
import { AddSpecialtyComponent } from './components/administradorTI/add-specialty/add-specialty.component';
import { AddDoctorComponent } from './components/administradorTI/add-doctor/add-doctor.component';
import { DatosPacienteComponent } from './components/administradorTI/datos-paciente/datos-paciente.component';
import { ListaPacientesComponent } from './components/administradorTI/lista-pacientes/lista-pacientes.component';
import { AddHospitalComponent } from './components/administradorTI/add-hospital/add-hospital.component';

export const routes: Routes = [
    {path: '', redirectTo:'home',pathMatch:'full'},
    {path: 'navbar', component: NavbarComponent},
    {path: 'home', component: HomeComponent},
    {path: 'quienes_somos', component: QuienesSomosComponent},
    {path: 'doctor', component: DoctorComponent},
    {path: 'doctor-vista/:id', component: DoctorVistaComponent},
    {path: 'update-doctor/:id', component: UpdateDoctorComponent},
    {path: 'inicio_sesion', component: LoginComponent},
    {path: 'especialidades', component: EspecialidadesComponent},
    {path: 'update-specialty/:id', component: UpdateSpecialtyComponent},
    {path: 'add-specialty', component: AddSpecialtyComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'clinicas', component: ClinicasComponent},
    {path: 'clinica/:id', component: ClinicaVistaComponent},
    {path: 'add-hospital', component: AddHospitalComponent},
   
    {path: 'update-hospital/:id', component: UpdateHospitalComponent},
    {path: 'add_paciente', component: AddPacienteComponent},
    {path: 'paciente/:id', component: DatosPacienteComponent},
    {path: 'lista_pacientes', component: ListaPacientesComponent},
    {path: 'add-doctor', component: AddDoctorComponent},
];
