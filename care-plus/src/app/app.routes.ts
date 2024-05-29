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

export const routes: Routes = [
    {path: '', redirectTo:'home',pathMatch:'full'},

    // ADMIN
    {path: 'admin-clinicas', component: AdminClinicasComponent},
    {path: 'add-hospital', component: AddHospitalComponent},
    {path: 'admin-sidebar', component: AdminSidebarComponent},
    {path: 'admin-doctor', component: AdminDoctorComponent},
    {path: 'admin-appointmentshift', component: AdminAppointmentshiftComponent},
    {path: 'add-appointmentshift', component: AddAppointmentshiftComponent},
    {path: 'update-appointmentshift', component: UpdateAppointmentshiftComponent},
    {path: 'admin-calendar', component: AdminCalendarComponent},
    {path: 'admin-home', component: AdminHomeComponent},
    {path: 'admin-paciente', component: AdminPacienteComponent},



    {path: 'navbar', component: NavbarComponent},
    {path: 'home', component: HomeComponent},
    {path: 'quienes_somos', component: QuienesSomosComponent},
    {path: 'doctorPaciente', component: DoctorPacienteComponent},
    {path: 'doctor-vista/:id', component: DoctorVistaComponent},
    {path: 'update-doctor', component: UpdateDoctorComponent},
    {path: 'inicio_sesion', component: LoginComponent},
    {path: 'especialidades', component: EspecialidadesComponent},
    {path: 'admin-especialidades', component: EspecialidadesComponent},
    {path: 'especialidadesPaciente', component: EspecialidadesPacienteComponents},

    {path: 'update-specialty', component: UpdateSpecialtyComponent},
    {path: 'add-specialty', component: AddSpecialtyComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'clinicas', component: ClinicasComponent},
    {path: 'clinica/:id', component: ClinicaVistaComponent},
    

    {path: 'add-calendar', component: AddCalendarComponent},
    {path: 'update-calendar', component: UpdateCalendarComponent},
   
    {path: 'update-hospital', component: UpdateHospitalComponent},
    {path: 'add_paciente', component: AddPacienteComponent},
    {path: 'update-paciente', component: DatosPacienteComponent},
    {path: 'lista_pacientes', component: DoctorListaPacientesComponent},
    {path: 'add-doctor', component: AddDoctorComponent},
    




    // DOCTOR
    {path: 'doctor-sidebar', component: DoctorSidebarComponent},
    {path: 'doctor-home', component: DoctorHomeComponent},
    {path: 'doctor-lista-pacientes', component: DoctorListaPacientesComponent},
    {path: 'doctor-profile', component: DoctorProfileComponent},
    {path: 'doctor-clinical-profile/:id', component: DoctorClinicalProfileComponent},
    {path: 'doctor-citas', component: DoctorCitasComponent},
    {path: 'doctor-calendarios', component: DoctorCalendariosComponent},


    // CALENDARIO
    {path: 'full-calendar', component: FullCalendarModule},


    //PACIENTE REGISTRADO
    {path: 'registrado-sidebar', component: RegistradoSidebarComponent},
    {path: 'home-paciente', component: RegistradoHomeComponent},
    {path: 'home-profile', component: RegistradoProfileComponent},
    {path: 'pedir-cita', component: RegistradoPedirCitaComponent},
    {path: 'cita-especialidad', component: RegistradoCitaEspecialidadComponent},
    {path: 'cita-profesionales', component: RegistradoCitaProfesionalesComponent},
    {path: 'cita-clinicas', component: RegistradoCitaClinicasComponent},
    {path: 'cita-contodo', component: RegistradoCitaContodoComponent},



    //imagenes
    //{path: 'ima', component: ImageUploadComponent},
    
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },

];
