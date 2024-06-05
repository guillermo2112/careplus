import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";
import { Router, RouterModule } from '@angular/router';
import { Specialty } from '../../../entities/specialty';
import { Provincias } from '../../../entities/Provincias';
import { Hospital } from '../../../entities/Hospital';
import { FormsModule } from '@angular/forms';
import { PacienteService } from '../../../services/paciente.service';
import { Doctor } from '../../../entities/Doctor';
import { AppointmentDTO } from '../../../entities/AppointmentDTO';

import { Calendar } from '@fullcalendar/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fecha } from '../../../entities/Fecha';
import { DatePipe } from '@angular/common';


@Component({
    selector: 'app-registrado-cita-clinicas',
    standalone: true,
    templateUrl: './registrado-cita-clinicas.component.html',
    styleUrl: './registrado-cita-clinicas.component.css',
    imports: [HeaderComponent, RegistradoSidebarComponent, FormsModule, RouterModule]
})
export class RegistradoCitaClinicasComponent implements OnInit {
  provincias: Provincias[] = [];
  selectedProvince: Provincias;
  hospitales: Hospital[] = [];
  selectedHospital: Hospital;
  specialties: Specialty[] = [];
  selectedSpecialty: Specialty;
  doctores: Doctor[] = [];
  selectedDoctor: Doctor;


appointmentForm: FormGroup;

selectedDate: string;
date: Date;


 hospitalSelected: number=0;
 fechaSelected: String ="";
 doctorSelected: number=0;

newDate : String = "";
fecha: Fecha = new Fecha();
listFechas: AppointmentDTO[] = [];
 
  constructor(
    private patientService: PacienteService,
    private router: Router,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.getProvinces();
  }

  getProvinces(): void {
    this.patientService.getProvinces().subscribe(
      (data: Provincias[]) => {
        this.provincias = data;
        if (this.provincias.length === 1) {
          this.selectedProvince = this.provincias[0];
          this.onProvinceChange({ target: { value: this.selectedProvince.id } });
        }
      },
      error => {
        console.error('Error al obtener provincias', error);
      }
    );
  }

  onProvinceChange(event: any): void {
    const provinceId = +event.target.value;
    this.selectedProvince = this.provincias.find(provincia => provincia.id === provinceId);

    // this.provinceSelected =  this.selectedProvince.id;

    if (this.selectedProvince) {
      this.patientService.getHospitalByProvince(provinceId).subscribe(
        (data: Hospital[]) => {
          this.hospitales = data;
          if (this.hospitales.length === 1) {
            this.selectedHospital = this.hospitales[0];
            this.onHospitalChange({ target: { value: this.selectedHospital.id } });
          }
        },
        error => {
          console.error('Error al obtener hospitales', error);
        } 
      );
    }
  }

  onHospitalChange(event: any): void {
    const hospitalId = +event.target.value;
    this.selectedHospital = this.hospitales.find(hospital => hospital.id === hospitalId);

    this.hospitalSelected = this.selectedHospital.id;

    if (this.selectedHospital) {
      this.patientService.getSpecialtiesByHospital(this.selectedHospital.id).subscribe(
        (data: Specialty[]) => {
          this.specialties = data;
          if (this.specialties.length === 1) {
            this.selectedSpecialty = this.specialties[0];
            this.onSpecialtyChange({ target: { value: this.selectedSpecialty.id } });
          }
        },
        error => {
          console.error('Error al obtener las especialidades', error);
        }
      );
    }
  }

  onSpecialtyChange(event: any): void {
    const specialtyId = +event.target.value;
    this.selectedSpecialty = this.specialties.find(specialty => specialty.id === specialtyId);

    if (this.selectedHospital && this.selectedSpecialty) {
      this.patientService.getDoctorByHospitalAndSpecialty(this.selectedHospital.id, this.selectedSpecialty.id).subscribe(
        (data: Doctor[]) => {
          this.doctores = data;
          if (this.doctores.length === 1) {
            this.selectedDoctor = this.doctores[0];
          }
        },
        error => {
          console.error('Error al obtener doctores', error);
        }
      );
    }
  }

  onDoctorChange(event: any): void {
    const selectedDoctorId = +event.target.value;
    this.selectedDoctor = this.doctores.find(doctor => doctor.id === selectedDoctorId);
  
    this.doctorSelected = this.selectedDoctor.id;
  }

 


  onDateChange(newDate) {
    this.newDate = newDate;
    console.log('Selected date:', newDate);

  }

  
  obtenerHorasDisponibles() {
    this.patientService.getHoraCita(this.fecha).subscribe(
      (horasDisponibles: AppointmentDTO[]) => {
        this.listFechas = horasDisponibles
      },
      (error) => {
        console.error('Error al obtener las horas disponibles:', error);
      }
    );

  }


}