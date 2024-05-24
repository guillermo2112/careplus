import { Component } from '@angular/core';
import { HomeAdminComponent } from "../home-admin/home-admin.component";
import { Calendar } from '../../../entities/calendar';
import { Doctor } from '../../../entities/doctor';
import { Hospital } from '../../../entities/Hospital';
import { Shift } from '../../../entities/shift';
import { CalendarService } from '../../../services/calendar.service';
import { DoctorService } from '../../../services/doctor.service';
import { HospitalService } from '../../../services/hospital.service';
import { ShiftService } from '../../../services/shift.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-update-calendar',
    standalone: true,
    templateUrl: './update-calendar.component.html',
    styleUrl: './update-calendar.component.css',
    imports: [HomeAdminComponent,FormsModule]
})
export class UpdateCalendarComponent {
onSubmit() {
  this.actualizarCalendario(this.calendar);
}

  calendar: Calendar = new Calendar();

  doctor: Doctor=new Doctor();

  hospital: Hospital=new Hospital();

  shift: Shift=new Shift();

  calendarId: number;

  constructor(
    private route: ActivatedRoute,
    private calendarService: CalendarService,
    private doctorService: DoctorService,
    private hospitalService:HospitalService,
    private shiftService: ShiftService,
    private router: Router
  ) {
  
  }
  ngOnInit(): void {
    this.calendarId = history.state.calendarId;
    this.calendar.doctor=this.doctor;
    this.calendar.hospital=this.hospital;
    this.calendar.shift=this.shift;  }


actualizarCalendario(calendar:Calendar){
  this.doctorService.getDoctorId(calendar.doctor.id).subscribe(doctor => {
    calendar.doctor = doctor;
    this.hospitalService.obtener_hospital_id(calendar.hospital.id).subscribe(hospital => {
      calendar.hospital = hospital;
      this.shiftService.obtener_shift_id(calendar.shift.id).subscribe(shift => {
        calendar.shift = shift;


  this.calendarService.updateCalendar(this.calendarId,calendar).subscribe(
   dato =>{
    console.log(dato);
    Swal.fire({
      title: "Success",
      text: "Calendario actualizada con éxito",
      icon: "success"
    }).then(() => {
      this.router.navigate(['/admin-calendar']);
    });
  })
});
});
});
}


}