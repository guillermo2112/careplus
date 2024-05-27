import { Routes } from '@angular/router';
import { NavbarComponent } from './components/paciente/navbar/navbar.component';
import { QuienesSomosComponent } from './components/paciente/quienes-somos/quienes-somos.component';
import { LoginComponent } from './components/shared/login/login.component';
import { EspecialidadesComponent } from './components/administradorTI/admin-especialidades/especialidades.component';
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
import { DatosPacienteComponent } from './components/administradorTI/update-pacientes/datos-paciente.component';
import { ListaPacientesComponent } from './components/administradorTI/lista-pacientes/lista-pacientes.component';
import { AddHospitalComponent } from './components/administradorTI/add-hospital/add-hospital.component';
import { HomeComponent } from './components/paciente/home/home.component';

import { DoctorComponent } from './components/doctor/doctor.component';
import { AdminSidebarComponent } from './components/administradorTI/admin-sidebar/admin-sidebar.component';
import { EspecialidadesPacienteComponents } from './components/paciente/especialidadesPaciente/especialidadesPaciente.component';
import { AdminDoctorComponent } from './components/administradorTI/admin-doctor/doctor.component';
import { ClinicasAdminComponent } from './components/administradorTI/admin-clinicas/clinicas-admin.component';
import { AdminAppointmentshiftComponent } from './components/administradorTI/admin-appointmentshift/admin-appointmentshift.component';
import { HomeDoctorComponent } from './components/doctor/home-doctor/home-doctor.component';
import { AddCalendarComponent } from './components/administradorTI/add-calendar/add-calendar.component';
import { AdminCalendarComponent } from './components/administradorTI/admin-calendar/admin-calendar.component';
import { UpdateCalendarComponent } from './components/administradorTI/update-calendar/update-calendar.component';
import { AdminHomeComponent } from './components/administradorTI/admin-home/admin-home.component';
import { AddAppointmentshiftComponent } from './components/administradorTI/add-appointmentshift/add-appointmentshift.component';
import { AdminPacienteComponent } from './components/administradorTI/admin-paciente/admin-paciente.component';
import { DoctorSidebarComponent } from './components/doctor/doctor-sidebar/doctor-sidebar.component';
import { DoctorListaPacientesComponent } from './components/doctor/doctor-lista-pacientes/doctor-lista-pacientes.component';
import { UpdateAppointmentshiftComponent } from './components/administradorTI/update-appointmentshift/update-appointmentshift.component';

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
    {path: 'admin-especialidades', component: EspecialidadesComponent},
    {path: 'especialidadesPaciente', component: EspecialidadesPacienteComponents},

    {path: 'update-specialty/:id', component: UpdateSpecialtyComponent},
    {path: 'add-specialty', component: AddSpecialtyComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'clinicas', component: ClinicasComponent},
    {path: 'clinicas-admin', component: ClinicasAdminComponent},
    {path: 'clinica/:id', component: ClinicaVistaComponent},
    {path: 'add-hospital', component: AddHospitalComponent},

    {path: 'admin-sidebar', component: AdminSidebarComponent},
   
    


    {path: 'admin-doctor', component: AdminDoctorComponent},
    {path: 'admin-appointmentshift', component: AdminAppointmentshiftComponent},
    {path: 'add-appointmentshift', component: AddAppointmentshiftComponent},
    {path: 'update-appointmentshift', component: UpdateAppointmentshiftComponent},

    {path: 'admin-calendar', component: AdminCalendarComponent},
    {path: 'admin-home', component: AdminHomeComponent},

    {path: 'add-calendar', component: AddCalendarComponent},
    {path: 'update-calendar', component: UpdateCalendarComponent},
   
    {path: 'update-hospital/:id', component: UpdateHospitalComponent},
    {path: 'add_paciente', component: AddPacienteComponent},
    {path: 'paciente/:id', component: DatosPacienteComponent},
    {path: 'lista_pacientes', component: ListaPacientesComponent},
    {path: 'add-doctor', component: AddDoctorComponent},




    {path: 'admin-paciente', component: AdminPacienteComponent},

    // DOCTOR
    {path: 'doctor-sidebar', component: DoctorSidebarComponent},
    {path: 'home-doctor', component: HomeDoctorComponent},
    {path: 'doctor-lista-pacientes', component: DoctorListaPacientesComponent},


];
