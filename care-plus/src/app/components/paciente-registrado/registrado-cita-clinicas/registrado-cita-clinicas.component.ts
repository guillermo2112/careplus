import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";
import { Router, RouterModule } from '@angular/router';
import { Specialty } from '../../../entities/specialty';
import { Provincias } from '../../../entities/Provincias';
import { Hospital } from '../../../entities/Hospital';
import { SpecialtyService } from '../../../services/specialty.service';
import { HospitalService } from '../../../services/hospital.service';
import { FormsModule } from '@angular/forms';
import { PacienteService } from '../../../services/paciente.service';


@Component({
    selector: 'app-registrado-cita-clinicas',
    standalone: true,
    templateUrl: './registrado-cita-clinicas.component.html',
    styleUrl: './registrado-cita-clinicas.component.css',
    imports: [HeaderComponent, RegistradoSidebarComponent, FormsModule, RouterModule]
})
export class RegistradoCitaClinicasComponent implements OnInit {
  provincias: Provincias[] = [];
  selectedProvince: Provincias | undefined;
  hospitales: Hospital[] = [];
  selectedHospital: Hospital | undefined;
  specialties: Specialty[] = [];
  selectedSpecialty: Specialty | undefined;

  constructor(
    private patientService: PacienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProvinces();
  }

  getProvinces(): void {
    this.patientService.getProvinces().subscribe(
      (data: Provincias[]) => {
        this.provincias = data;
        if (this.provincias.length === 1) {
          this.selectedProvince = this.provincias[0];
          this.onProvinceChange(this.selectedProvince.id);
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

    if (this.selectedProvince) {
      this.patientService.getHospitalByProvince(provinceId).subscribe(
        (data: Hospital[]) => {
          this.hospitales = data;
          if (this.hospitales.length === 1) {
            this.selectedHospital = this.hospitales[0];
            this.onHospitalChange(this.selectedHospital.id);
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

    if (this.selectedHospital) {
      this.patientService.getSpecialtiesByHospital(this.selectedHospital.id).subscribe(
        (data: Specialty[]) => {
          this.specialties = data;
          if (this.specialties.length === 1) {
            this.selectedSpecialty = this.specialties[0];
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
  }
}