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
import { DatosPacienteComponent } from './components/administradorTI/update-paciente/datos-paciente.component';
import { AddHospitalComponent } from './components/administradorTI/add-hospital/add-hospital.component';
import { HomeComponent } from './components/paciente/home/home.component';
import { AdminSidebarComponent } from './components/administradorTI/admin-sidebar/admin-sidebar.component';
import { EspecialidadesPacienteComponents } from './components/paciente/especialidadesPaciente/especialidadesPaciente.component';
import { AdminDoctorComponent } from './components/administradorTI/admin-doctor/admin-doctor.component';
import { AdminAppointmentshiftComponent } from './components/administradorTI/admin-appointmentshift/admin-appointmentshift.component';
import { AddCalendarComponent } from './components/administradorTI/add-calendar/add-calendar.component';
import { AdminCalendarComponent } from './components/administradorTI/admin-calendar/admin-calendar.component';
import { UpdateCalendarComponent } from './components/administradorTI/update-calendar/update-calendar.component';
import { AdminHomeComponent } from './components/administradorTI/admin-home/admin-home.component';
import { AddAppointmentshiftComponent } from './components/administradorTI/add-appointmentshift/add-appointmentshift.component';
import { AdminPacienteComponent } from './components/administradorTI/admin-paciente/admin-paciente.component';
import { DoctorSidebarComponent } from './components/doctor/doctor-sidebar/doctor-sidebar.component';
import { DoctorListaPacientesComponent } from './components/doctor/doctor-lista-pacientes/doctor-lista-pacientes.component';
import { UpdateAppointmentshiftComponent } from './components/administradorTI/update-appointmentshift/update-appointmentshift.component';
import { DoctorHomeComponent } from './components/doctor/doctor-home/doctor-home.component';
import { DoctorProfileComponent } from './components/doctor/doctor-profile/doctor-profile.component';
import { DoctorClinicalProfileComponent } from './components/doctor/doctor-clinical-profile/doctor-clinical-profile.component';
import { DoctorCitasComponent } from './components/doctor/doctor-citas/doctor-citas.component';
import { DoctorCalendariosComponent } from './components/doctor/doctor-calendarios/doctor-calendarios.component';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { RegistradoSidebarComponent } from './components/paciente-registrado/registrado-sidebar/registrado-sidebar.component';
import { RegistradoHomeComponent } from './components/paciente-registrado/registrado-home/registrado-home.component';
import { RegistradoProfileComponent } from './components/paciente-registrado/registrado-profile/registrado-profile.component';
import { DoctorPacienteComponent } from './components/paciente/doctorPaciente/doctorPaciente.component';
import { AdminClinicasComponent } from './components/administradorTI/admin-clinicas/admin-clinicas.component';
import { RegistradoCitaEspecialidadComponent } from './components/paciente-registrado/registrado-cita-especialidad/registrado-cita-especialidad.component';
import { RegistradoCitaProfesionalesComponent } from './components/paciente-registrado/registrado-cita-profesionales/registrado-cita-profesionales.component';
import { RegistradoCitaClinicasComponent } from './components/paciente-registrado/registrado-cita-clinicas/registrado-cita-clinicas.component';
import { RegistradoCitaContodoComponent } from './components/paciente-registrado/registrado-cita-contodo/registrado-cita-contodo.component';
import { RegistradoPedirCitaComponent } from './components/paciente-registrado/registrado-pedir-cita/registrado-pedir-cita.component';
import { LogoutComponent } from './components/shared/logout/logout.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { authGuard } from './services/auth.guard';
import { AdminIndicatorsComponent } from './components/administradorTI/admin-indicators/admin-indicators.component';


export const routes: Routes = [
    {path: '', redirectTo:'home',pathMatch:'full'},

    {path: 'inicio_sesion', component: LoginComponent},


    // ADMIN
    {path: 'admin-clinicas', component: AdminClinicasComponent ,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'add-hospital', component: AddHospitalComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'admin-sidebar', component: AdminSidebarComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'admin-doctor', component: AdminDoctorComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'admin-appointmentshift', component: AdminAppointmentshiftComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'add-appointmentshift', component: AddAppointmentshiftComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'update-appointmentshift', component: UpdateAppointmentshiftComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'admin-calendar', component: AdminCalendarComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'admin-home', component: AdminHomeComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'admin-paciente', component: AdminPacienteComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'update-doctor', component: UpdateDoctorComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'update-specialty', component: UpdateSpecialtyComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'add-specialty', component: AddSpecialtyComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'add-calendar', component: AddCalendarComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'update-calendar', component: UpdateCalendarComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'update-hospital', component: UpdateHospitalComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'add_paciente', component: AddPacienteComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'update-paciente', component: DatosPacienteComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'lista_pacientes', component: DoctorListaPacientesComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' } },
    {path: 'add-doctor', component: AddDoctorComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},
    {path: 'admin-indicators', component: AdminIndicatorsComponent,canActivate: [authGuard],data: { role: 'ROLE_ADMIN' }},





    //VISTA
    {path: 'navbar', component: NavbarComponent},
    {path: 'home', component: HomeComponent},
    {path: 'quienes_somos', component: QuienesSomosComponent},
    {path: 'doctorPaciente', component: DoctorPacienteComponent},
    {path: 'doctor-vista/:id', component: DoctorVistaComponent},
    {path: 'especialidades', component: EspecialidadesComponent},
    {path: 'admin-especialidades', component: EspecialidadesComponent},
    {path: 'especialidadesPaciente', component: EspecialidadesPacienteComponents},
    {path: 'contacto', component: ContactoComponent},
    {path: 'clinicas', component: ClinicasComponent},
    {path: 'clinica/:id', component: ClinicaVistaComponent},
    

  
   
   

    // DOCTOR
    {path: 'doctor-sidebar', component: DoctorSidebarComponent,canActivate: [authGuard],data: { role: 'ROLE_DOCTOR' }},
    {path: 'doctor-home', component: DoctorHomeComponent,canActivate: [authGuard],data: { role: 'ROLE_DOCTOR' }},
    {path: 'doctor-lista-pacientes', component: DoctorListaPacientesComponent},
    {path: 'doctor-profile', component: DoctorProfileComponent,canActivate: [authGuard],data: { role: 'ROLE_DOCTOR' }},
    {path: 'doctor-clinical-profile/:id', component: DoctorClinicalProfileComponent,canActivate: [authGuard],data: { role: 'ROLE_DOCTOR' }},
    {path: 'doctor-citas', component: DoctorCitasComponent,canActivate: [authGuard],data: { role: 'ROLE_DOCTOR' }},
    {path: 'doctor-calendarios', component: DoctorCalendariosComponent,canActivate: [authGuard],data: { role: 'ROLE_DOCTOR' }},


    // CALENDARIO
    {path: 'full-calendar', component: FullCalendarModule},


    //PACIENTE REGISTRADO
    {path: 'registrado-sidebar', component: RegistradoSidebarComponent,canActivate: [authGuard],data: { role: 'ROLE_PATIENT' }},
    {path: 'registrado-home', component: RegistradoHomeComponent,canActivate: [authGuard],data: { role: 'ROLE_PATIENT' }},
    {path: 'registrado-profile', component: RegistradoProfileComponent,canActivate: [authGuard],data: { role: 'ROLE_PATIENT' }},
    {path: 'registrado-pedir-cita', component: RegistradoPedirCitaComponent,canActivate: [authGuard],data: { role: 'ROLE_PATIENT' }},
    {path: 'registrado-cita-especialidad', component: RegistradoCitaEspecialidadComponent,canActivate: [authGuard],data: { role: 'ROLE_PATIENT' }},
    {path: 'registrado-cita-profesionales', component: RegistradoCitaProfesionalesComponent,canActivate: [authGuard],data: { role: 'ROLE_PATIENT' }},
    {path: 'registrado-cita-clinicas', component: RegistradoCitaClinicasComponent,canActivate: [authGuard],data: { role: 'ROLE_PATIENT' }},
    {path: 'registrado-cita-contodo', component: RegistradoCitaContodoComponent,canActivate: [authGuard],data: { role: 'ROLE_PATIENT' }},



    //imagenes
    {path: 'ima', component: ImageUploadComponent},
    
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },

];
