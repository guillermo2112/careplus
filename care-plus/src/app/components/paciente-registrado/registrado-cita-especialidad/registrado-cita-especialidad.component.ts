import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";
import { SpecialtyService } from '../../../services/specialty.service';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Specialty } from '../../../entities/specialty';
import { FormsModule } from '@angular/forms';
import { HospitalService } from '../../../services/hospital.service';
import { Provincias } from '../../../entities/Provincias';
import { Hospital } from '../../../entities/Hospital';
import { PacienteService } from '../../../services/paciente.service';

@Component({
  selector: 'app-registrado-cita-especialidad',
  standalone: true,
  templateUrl: './registrado-cita-especialidad.component.html',
  styleUrls: ['./registrado-cita-especialidad.component.css'],
  imports: [HeaderComponent, RegistradoSidebarComponent, FormsModule, RouterModule]
})
export class RegistradoCitaEspecialidadComponent implements OnInit {
  specialty: Specialty = new Specialty();
  specialties: Specialty[] = [];
  selectedSpecialty: Specialty;
  provincias: Provincias[] = [];
  selectedProvince: Provincias;
  hospitales: Hospital[] = [];
  selectedHospital: Hospital;
  
  constructor(
    private patientService: PacienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSpecialties();
  }

  getSpecialties(): void {
    this.patientService.getSpecialties().subscribe(
      (data: Specialty[]) => {
        this.specialties = data;
        if (this.specialties.length === 1) {
          this.selectedSpecialty = this.specialties[0];
          this.onSpecialtyChange({ target: { value: this.selectedSpecialty.id } });
        }
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
    const selectedProvinceId = event.target.value;
    this.selectedProvince = this.provincias.find(provincia => provincia.id === +selectedProvinceId);

    if (this.selectedProvince && this.selectedSpecialty) {
      this.patientService.getHospitalsByProvinceAndSpecialty(this.selectedProvince.id, this.selectedSpecialty.id).subscribe(
        (data: Hospital[]) => {
          this.hospitales = data;
          if (this.hospitales.length === 1) {
            this.selectedHospital = this.hospitales[0];
          }
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
  }

  
}

