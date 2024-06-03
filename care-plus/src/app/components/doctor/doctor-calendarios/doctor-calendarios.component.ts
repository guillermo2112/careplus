import { Component, OnInit } from '@angular/core';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HeaderComponent } from "../../shared/header/header.component";
import { CalendarService } from '../../../services/calendar.service';
import { Router } from '@angular/router';
import { AppointmentService } from '../../../services/appointment.service';
import { DoctorService } from '../../../services/doctor.service';
import { Doctor } from '../../../entities/Doctor';
import { Usuario } from '../../../entities/usuario';
import { Calendar } from '../../../entities/calendar';
import { Appointment } from '../../../entities/Appointment';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import esLocale from '@fullcalendar/core/locales/es';
import timeGridPlugin from '@fullcalendar/timegrid'; // Import the timeGrid plugin



@Component({
    selector: 'app-doctor-calendarios',
    standalone: true,
    templateUrl: './doctor-calendarios.component.html',
    styleUrl: './doctor-calendarios.component.css',
    imports: [DoctorSidebarComponent, FullCalendarModule, HeaderComponent],
    providers: [ DatePipe]
})
export class DoctorCalendariosComponent implements OnInit{

  usuario:any;

  user: Usuario = new Usuario();

  doctor: Doctor = {
    id: 0,
    specialty: {
        id: 0,
        name: ''
    },
    address: '',
    birthdate: '',
    dni: '',
    license_num: '',
    name: '',
    phone: '',
    user: this.user,
    gender: ''
};


  calendar: Calendar[]=[];

  appointment: Appointment[]=[];

  eventDetails: any = {};
showEventDetails: boolean = false;

  ngOnInit(): void {
    this.usuario=sessionStorage.getItem("usernameid");
    this.getDoctor();
    // this.getCalendarByDoctor();
    this. getAppointmentByDoctorYCalendar();
  }

  constructor(private datePipe: DatePipe, private doctorService: DoctorService, private calendarService: CalendarService,  private router: Router, private appointmentService: AppointmentService) { }

  getDoctor(){
    this.doctorService.getDoctorByUser(this.usuario).subscribe(dato=>{
      this.doctor=dato;
    })
  }
  // getCalendarByDoctor(){
  //   this.calendarService.getCalendarByDoctor(2).subscribe(dato=>{
  //     this.calendar=dato;
  //   })
  // }

  getAppointmentByDoctorYCalendar() {
    this.appointmentService.getAppointmentByDoctor(2).subscribe(dato => {
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
    dayMaxEvents: 1, // Limit to 1 event per day
    selectable: true,
    eventClick: (info) => this.handleEventClick(info)

};

openEventDetails(){
  this.showEventDetails=true;
  this.eventDetails=this.appointment[1];
}

handleEventClick(info) { 
  const event = info.event;
    Swal.fire({
      title: 'Detalles de la cita',
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
