import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../../../services/appointment.service';
import { PacienteService } from '../../../services/paciente.service';
import { Usuario } from '../../../entities/usuario';
import { Paciente } from '../../../entities/Patient';
import { Appointment } from '../../../entities/Appointment';
import Swal from 'sweetalert2';
import esLocale from '@fullcalendar/core/locales/es';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DoctorSidebarComponent } from "../../doctor/doctor-sidebar/doctor-sidebar.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";


@Component({
    selector: 'app-registrado-calendar',
    standalone: true,
    templateUrl: './registrado-calendar.component.html',
    styleUrl: './registrado-calendar.component.css',
    providers: [DatePipe],
    imports: [DoctorSidebarComponent, FullCalendarModule, HeaderComponent, RegistradoSidebarComponent]
})
export class RegistradoCalendarComponent implements OnInit {

  usuario:any;

  pacienteid:any;

  user: Usuario = new Usuario();


 paciente: Paciente=new Paciente();

 appointment: Appointment[]=[];

 eventDetails: any = {};
 showEventDetails: boolean = false; 

  constructor(private datePipe: DatePipe, private patientService:PacienteService,private router: Router, private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.usuario=sessionStorage.getItem("usernameid");
    this.getPatient();
  }

  getPatient(){
    this.patientService.getPatientByUser(this.usuario).subscribe(dato=>{
      this.paciente=dato;
      this.pacienteid=dato.id;
      this.getAppointmentByPatient();

    })
  }

  getAppointmentByPatient() {
    this.appointmentService.getAppointmentByPatient(this.pacienteid).subscribe(dato => {
      this.appointment = dato;
      // Mapear las citas a los eventos del calendario
      this.calendarOptions.events = this.appointment.map(app => ({
        title: `${app.appointment_shift.hour}`,
        start: this.datePipe.transform(app.date, 'yyyy-MM-dd'),
        extendedProps: {
          Fecha:  this.datePipe.transform(app.date, 'yyyy-MM-dd'),
          Nombre: app.patient.name,
          Estado: app.state,
          Hora: app.appointment_shift.hour
      }
      }));
    });
  }

  
  formatearFecha(fecha:Date){
    return this.datePipe.transform(fecha, 'yyyy-MM-dd') || '';
  }

calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
  locale: esLocale,
    plugins: [dayGridPlugin,timeGridPlugin,interactionPlugin],
    events: [],
    slotLabelFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },
    slotLabelInterval: '00:30',
    slotDuration: '00:30', 
    editable: true,
    dayMaxEvents: 1,
    selectable: true,
    eventClick: (info) => this.handleEventClick(info)

};

handleEventClick(info) { 
  const event = info.event;
    Swal.fire({
      title: 'Detalles de tu cita',
      html: `<p><strong>Paciente:</strong> ${info.event.extendedProps.Nombre}</p>` +
            `<p><strong>Fecha:</strong> ${info.event.extendedProps.Fecha}</p>` +
            `<p><strong>Hora:</strong> ${info.event.extendedProps.Hora}</p>` +
            `<p><strong>Estado:</strong> ${info.event.extendedProps.Estado}</p>`,
      confirmButtonText: 'Cerrar'
    });
}

closeEventDetails() {
  this.showEventDetails = false;
}


}
