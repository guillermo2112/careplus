import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";
import { Specialty } from '../../../entities/specialty';
import { Provincias } from '../../../entities/Provincias';
import { Hospital } from '../../../entities/Hospital';
import { PacienteService } from '../../../services/paciente.service';
import { Router } from '@angular/router';
import { Doctor } from '../../../entities/Doctor';

@Component({
    selector: 'app-registrado-cita-profesionales',
    standalone: true,
    templateUrl: './registrado-cita-profesionales.component.html',
    styleUrl: './registrado-cita-profesionales.component.css',
    imports: [HeaderComponent, RegistradoSidebarComponent]
})
export class RegistradoCitaProfesionalesComponent implements OnInit {
    doctores: Doctor[] = [];
    selectedDoctor: Doctor;
    hospitales: Hospital[] = [];
    selectedHospital: Hospital;

    constructor(
        private patientService: PacienteService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getDoctors();
    }

    getDoctors(): void {
        this.patientService.getDoctors().subscribe(
            (data: Doctor[]) => {
                this.doctores = data;
            },
            error => {
                console.error('Error al obtener doctores', error);
            }
        );
    }

    onDoctorChange(event: any): void {
        const doctorId = event.target.value;
        this.selectedDoctor = this.doctores.find(doctores => doctores.id === +doctorId);

        this.patientService.getHospitalByDoctor(doctorId).subscribe(
            (data: Hospital[]) => {
                this.hospitales = data;
                this.selectedHospital = this.hospitales[0]; 
            },
            error => {
                console.error('Error al obtener el hospital del doctor', error);
            }
        );
    }
}