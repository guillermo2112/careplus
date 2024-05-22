import { Routes } from '@angular/router';
import { NavbarComponent } from './components/paciente/navbar/navbar.component';
import { QuienesSomosComponent } from './components/paciente/quienes-somos/quienes-somos.component';
import { LoginComponent } from './components/shared/login/login.component';
import { EspecialidadesComponent } from './components/administradorTI/especialidades/especialidades.component';
import { ContactoComponent } from './components/paciente/contacto/contacto.component';
import { ClinicasComponent } from './components/paciente/clinicas/clinicas.component';
import { ClinicaVistaComponent } from './components/paciente/clinica-vista/clinica-vista.component';
import { DoctorVistaComponent } from './components/paciente/doctor-vista/doctor-vista.component';
import { UpdateSpecialtyComponent } from './components/administradorTI/update-specialty/update-specialty.component';
import { UpdateDoctorComponent } from './components/administradorTI/update-doctor/update-doctor.component';
import { UpdateHospitalComponent } from './components/administradorTI/update-hospital/update-hospital.component';
import { AddPacienteComponent } from './components/administradorTI/add-paciente/add-paciente.component';
import { AddSpecialtyComponent } from './components/administradorTI/add-specialty/add-specialty.component';
import { AddDoctorComponent } from './components/administradorTI/add-doctor/add-doctor.component';
import { DatosPacienteComponent } from './components/administradorTI/datos-paciente/datos-paciente.component';
import { ListaPacientesComponent } from './components/administradorTI/lista-pacientes/lista-pacientes.component';
import { AddHospitalComponent } from './components/administradorTI/add-hospital/add-hospital.component';
import { HomeComponent } from './components/paciente/home/home.component';

import { DoctorComponent } from './components/doctor/doctor.component';
import { HomeAdminComponent } from './components/administradorTI/home-admin/home-admin.component';

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
    {path: 'especialidadesPaciente', component: es},

    {path: 'update-specialty/:id', component: UpdateSpecialtyComponent},
    {path: 'add-specialty', component: AddSpecialtyComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'clinicas', component: ClinicasComponent},
    {path: 'clinica/:id', component: ClinicaVistaComponent},
    {path: 'add-hospital', component: AddHospitalComponent},

    {path: 'home-admin', component: HomeAdminComponent},
   
    {path: 'update-hospital/:id', component: UpdateHospitalComponent},
    {path: 'add_paciente', component: AddPacienteComponent},
    {path: 'paciente/:id', component: DatosPacienteComponent},
    {path: 'lista_pacientes', component: ListaPacientesComponent},
    {path: 'add-doctor', component: AddDoctorComponent},
];
