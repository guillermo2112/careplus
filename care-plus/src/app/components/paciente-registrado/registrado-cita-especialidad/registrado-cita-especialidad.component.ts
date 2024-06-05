import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";
import { Router, RouterModule } from '@angular/router';
import { Specialty } from '../../../entities/specialty';
import { FormsModule } from '@angular/forms';
import { Provincias } from '../../../entities/Provincias';
import { Hospital } from '../../../entities/Hospital';
import { PacienteService } from '../../../services/paciente.service';
import { Doctor } from '../../../entities/Doctor';
import { AppointmentService } from '../../../services/appointment.service';
import { Usuario } from '../../../entities/usuario';
import { Paciente } from '../../../entities/Patient';


@Component({
  selector: 'app-registrado-cita-especialidad',
  standalone: true,
  templateUrl: './registrado-cita-especialidad.component.html',
  styleUrls: ['./registrado-cita-especialidad.component.css'],
  imports: [HeaderComponent, RegistradoSidebarComponent, FormsModule, RouterModule]
})
export class RegistradoCitaEspecialidadComponent implements OnInit {
  specialties: Specialty[] = [];
  selectedSpecialty: Specialty;
  provincias: Provincias[] = [];
  selectedProvince: Provincias;
  hospitales: Hospital[] = [];
  selectedHospital: Hospital;
  doctores: Doctor[] = [];
  selectedDoctor: Doctor;
  usuario:any;
  user: Usuario = new Usuario();
  
selectedDate: string;
date: Date;

    paciente: Paciente = {
        id: 0,
        name: '',
        dni: '',
        birthdate: '',
        address: '',
        phone: '',
        emergency_phone: '',
        user: this.user, 
        gender: ''
    };
  

  constructor(
    private patientService: PacienteService,
    private appointmentService: AppointmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSpecialties();
    this.usuario=sessionStorage.getItem("usernameid");
    // this.getPatient(this.usuario);
  }

  getSpecialties(): void {
    this.patientService.getSpecialties().subscribe(
      (data: Specialty[]) => {
        this.specialties = data;
      },
      error => {
        console.error('Error al hacer el fetch', error);
      }
    );
  }

  onSpecialtyChange(event: any): void {
    const specialtyId = event.target.value;
    this.selectedSpecialty = this.specialties.find(specialty => specialty.id === +specialtyId);
    this.patientService.getProvincesBySpecialty(specialtyId).subscribe(
      (data: Provincias[]) => {
        this.provincias = data;
      },
      error => {
        console.error('Error al obtener provincias', error);
      }
    );
  }

  onProvinceChange(event: any): void {
    const selectedProvinceId = event.target.value;
    this.selectedProvince = this.provincias.find(provincia => provincia.id === +selectedProvinceId);

    if (this.selectedProvince) {
      this.patientService.getHospitalByProvince(this.selectedProvince.id).subscribe(
        (data: Hospital[]) => {
          this.hospitales = data;
        },
        error => {
          console.error('Error al obtener hospitales', error);
        }
      );
    }
  }

  onHospitalChange(event: any): void {
    const selectedHospitalId = event.target.value;
    this.selectedHospital = this.hospitales.find(hospital => hospital.id === +selectedHospitalId);
    
    if (this.selectedHospital && this.selectedSpecialty) {
      this.patientService.getDoctorByHospitalAndSpecialty(this.selectedHospital.id, this.selectedSpecialty.id).subscribe(
        (data: Doctor[]) => {
          this.doctores = data;
        },
        error => {
          console.error('Error al obtener doctores', error);
        }
      );
    }
  }
  
  

  onDoctorChange(event: any): void {
    const selectedDoctorId = event.target.value;
    this.selectedDoctor = this.doctores.find(doctor => doctor.id === +selectedDoctorId);
  }

  getPatient(id:number){
    this.patientService.getPatientByUser(id).subscribe(
        data=>{
            this.paciente=data;

    })
  }
  onDateChange(newDate: string) {
    console.log('Selected date:', newDate);

  }
  

}