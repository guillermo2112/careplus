import { Component, OnInit } from '@angular/core';
import { HomeAdminComponent } from "../home-admin/home-admin.component";
import { Calendar } from '../../../entities/calendar';
import { CalendarService } from '../../../services/calendar.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Hospital } from '../../../entities/Hospital';
import { Shift } from '../../../entities/shift';
import { FormsModule } from '@angular/forms';
import { DoctorService } from '../../../services/doctor.service';
import { HospitalService } from '../../../services/hospital.service';
import { ShiftService } from '../../../services/shift.service';
import { Doctor } from '../../../entities/Doctor';

@Component({
    selector: 'app-add-calendar',
    standalone: true,
    templateUrl: './add-calendar.component.html',
    styleUrl: './add-calendar.component.css',
    imports: [HomeAdminComponent,FormsModule]
})
export class AddCalendarComponent implements OnInit{
onSubmit() {
this.guardarCalendario(this.calendar);
}

  calendar: Calendar = new Calendar();

  doctor: Doctor=new Doctor();

  hospital: Hospital=new Hospital();

  shift: Shift=new Shift();

  constructor(
    private calendarService: CalendarService,
    private doctorService: DoctorService,
    private hospitalService:HospitalService,
    private shiftService: ShiftService,
    private router: Router
  ) {
  
  }
  ngOnInit(): void {
    this.calendar.doctor=this.doctor;
    this.calendar.hospital=this.hospital;
    this.calendar.shift=this.shift;  
  }

    guardarCalendario(calendar: Calendar) {
      this.doctorService.getDoctorId(calendar.doctor.id).subscribe(doctor => {
        calendar.doctor = doctor;
        this.hospitalService.obtener_hospital_id(calendar.hospital.id).subscribe(hospital => {
          calendar.hospital = hospital;
          this.shiftService.obtener_shift_id(calendar.shift.id).subscribe(shift => {
            calendar.shift = shift;
            
            this.calendarService.addCalendar(calendar).subscribe(data => {
              Swal.fire({
                title: "Enhorabuena!",
                text: "Doctor creado con éxito.",
                icon: "success"
              });
              this.router.navigate(['/admin-calendar']);
            });
          });
        });
      });
    }



}
