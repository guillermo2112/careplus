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
  selectedProvince: Provincias;
  hospitales: Hospital[] = [];
  selectedHospital: Hospital;
  specialties: Specialty[] = [];
  selectedSpecialty: Specialty;

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
      },
      error => {
        console.error('Error al obtener provincias', error);
      }
    );
  }

  onProvinceChange(event: any): void {
    const provinceId = event.target.value;
    this.selectedProvince = this.provincias.find(provincia => provincia.id === +provinceId);

    this.patientService.getHospitalByProvince(provinceId).subscribe(
      (data: Hospital[]) => {
        this.hospitales = data;
      },
      error => {
        console.error('Error al obtener hospitales', error);
      }
    );
  }

  onHospitalChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const hospitalId = selectElement.value;
    this.selectedHospital = this.hospitales.find(hospitales => hospitales.id === +hospitalId);

    if (this.selectedHospital) {
      this.patientService.getSpecialtiesByHospital(this.selectedHospital.id).subscribe(
        (data: Specialty[]) => {
          this.specialties = data;
        },
        error => {
          console.error('Error al obtener las especialidades', error);
        }
      );
    }
  }

  onSpecialtyChange(event: Event): void {
    const specialtyId = (event.target as HTMLSelectElement).value;
    this.selectedSpecialty = this.specialties.find(specialty => specialty.id === +specialtyId);
  }
}