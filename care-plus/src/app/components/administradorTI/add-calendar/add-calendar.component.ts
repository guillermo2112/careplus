import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
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
import moment from 'moment-timezone';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-add-calendar',
  standalone: true,
  templateUrl: './add-calendar.component.html',
  styleUrl: './add-calendar.component.css',
  imports: [FormsModule, AdminSidebarComponent,NgSelectModule],
})
export class AddCalendarComponent implements OnInit, AfterViewInit {
  onSubmit() {
    this.guardarCalendario(this.calendar);
  }

  calendar: Calendar = new Calendar();

  doctor: Doctor = new Doctor();

  hospital: Hospital = new Hospital();

  shift: Shift = new Shift();

  date: Date = new Date();

  fecha = moment.tz('Europe/Madrid').format();

  fechadef = new Date(this.fecha);

  //Recuperar el formulario
  @ViewChild('formulario', { static: true })
  formularioRef!: ElementRef<HTMLFormElement>;
  formulario!: HTMLFormElement;
  //Recuperar el boton
  updateButton = document.getElementById('updateButton') as HTMLButtonElement;

  //Numero shifts
  turnos: Shift[] = [];

  //Numero hospitales
  hospitales: Hospital[] = [];

  //Numero  doctores
  doctores: Doctor[] = [];

  constructor(
    private calendarService: CalendarService,
    private doctorService: DoctorService,
    private hospitalService: HospitalService,
    private shiftService: ShiftService,
    private router: Router
  ) {}
  ngAfterViewInit(): void {
    if (this.formularioRef) {
      this.formulario = this.formularioRef.nativeElement;
    } else {
      console.error('El formulario no está inicializado');
    }
  }
  ngOnInit(): void {
    this.calendar.doctor = this.doctor;
    this.calendar.hospital = this.hospital;
    this.calendar.shift = this.shift;
    this.cantidadesIds();
  }

  guardarCalendario(calendar: Calendar) {
    this.doctorService.getDoctorId(calendar.doctor.id).subscribe((doctor) => {
      calendar.doctor = doctor;
      this.hospitalService
        .obtener_hospital_id(calendar.hospital.id)
        .subscribe((hospital) => {
          calendar.hospital = hospital;
          this.shiftService
            .obtener_shift_id(calendar.shift.id)
            .subscribe((shift) => {
              calendar.shift = shift;
              calendar.date = this.fechadef;
              calendar.date_update = this.fechadef;
              this.calendarService.addCalendar(calendar).subscribe((data) => {
                Swal.fire({
                  title: 'Enhorabuena!',
                  text: 'Doctor creado con éxito.',
                  icon: 'success',
                });
                this.router.navigate(['/admin-calendar']);
              });
            });
        });
    });
  }
    //validacion
    validar() {
      for (let i = 0; i < this.formulario.elements.length; i++) {
        this.formulario.elements[i].classList.remove('errorInput');
  
        // Limpia los errores previos
  
        document
          .querySelectorAll('.errorSpan')
          .forEach((e) => (e.innerHTML = ''));
      }
      return (
        this.validarfechas() &&
        this.validarDoctor() &&
        this.validarHospital() &&
        this.validarShift()
      );
    }
  
    cantidadesIds() {
      this.shiftService.listar_shift().subscribe((dato) => {
        this.turnos = dato;
      });
  
      this.hospitalService.obtener_hospitales().subscribe((dato) => {
        this.hospitales = dato;
      });
  
      this.doctorService.listDoctor().subscribe((dato) => {
        this.doctores = dato;
      });
    }
  
    //Validacionprueba
  
    validarprueba(input: any, span: any) {
      span.innerHTML = '';
  
      // Remueve la clase de error si todo es válido
      span.classList.remove('errorInput');
      return true;
    }
  
    //VALIDACION SHIFT
    validarShift() {
      const inputShift = document.getElementById('shift_id') as HTMLInputElement;
      const spanShift = document.getElementById('id_shift_error') as HTMLElement;
  
      if (this.validarprueba(inputShift, spanShift)) {

        spanShift.classList.remove('errorInput');
        return true;
      } else {
        return false;
      }
    }
  
    //VALIDACION HOSPITAL
    validarHospital() {
      const inputHospital = document.getElementById(
        'hospital_id'
      ) as HTMLInputElement;
      const spanHospital = document.getElementById(
        'id_hospital_error'
      ) as HTMLElement;
  
      if (this.validarprueba(inputHospital, spanHospital)) {
  
        spanHospital.classList.remove('errorInput');
        return true;
      } else {
        return false;
      }
    }
  
    //VALIDACION DOCTORES
    validarDoctor() {
      const inputDoctor = document.getElementById(
        'doctor_id'
      ) as HTMLInputElement;
      const spanDoctor = document.getElementById(
        'id_doctor_error'
      ) as HTMLElement;
  
      if (this.validarprueba(inputDoctor, spanDoctor)) {
        spanDoctor.classList.remove('errorInput');
        return true;
      } else {
        return false;
      }
    }
    validarfechas() {
      const startDateInput = this.formulario.querySelector(
        '#start_date'
      ) as HTMLInputElement;
      const endDateInput = this.formulario.querySelector(
        '#end_date'
      ) as HTMLInputElement;
      const startDateError = document.getElementById(
        'id_start_date_error'
      ) as HTMLElement;
      const endDateError = document.getElementById(
        'id_end_date_error'
      ) as HTMLElement;
  
      const startDate = new Date(startDateInput.value);
      const endDate = new Date(endDateInput.value);
  
      if (!startDateInput.value) {
        startDateError.innerHTML = 'La fecha de inicio es obligatoria.';
        startDateInput.classList.add('errorInput');
        return false;
      } else if (startDateInput.type !== 'date') {
        startDateError.innerHTML = 'El campo debe ser de tipo fecha.';
        startDateInput.classList.add('errorInput');
        return false;
      } else if (!endDateInput.value) {
        endDateError.innerHTML = 'La fecha de fin es obligatoria.';
        endDateInput.classList.add('errorInput');
        return false;
      } else if (endDateInput.type !== 'date') {
        startDateError.innerHTML = 'El campo debe ser de tipo fecha.';
        startDateInput.classList.add('errorInput');
        return false;
      }
  
      // Validar que start_date sea antes que end_date
      else if (
        startDateInput.value &&
        endDateInput.value &&
        startDate >= endDate
      ) {
        endDateError.innerHTML =
          'La fecha de fin debe ser posterior a la fecha de inicio.';
        endDateInput.classList.add('errorInput');
        return false;
      }
  
      return true;
    }
}
