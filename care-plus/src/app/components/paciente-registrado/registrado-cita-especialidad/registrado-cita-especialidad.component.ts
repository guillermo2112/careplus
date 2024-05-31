import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";
import { SpecialtyService } from '../../../services/specialty.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Specialty } from '../../../entities/specialty';
import { FormsModule } from '@angular/forms';
import { HospitalService } from '../../../services/hospital.service';
import { Provincias } from '../../../entities/Provincias';
import { Hospital } from '../../../entities/Hospital';

@Component({
  selector: 'app-registrado-cita-especialidad',
  standalone: true,
  templateUrl: './registrado-cita-especialidad.component.html',
  styleUrls: ['./registrado-cita-especialidad.component.css'],
  imports: [HeaderComponent, RegistradoSidebarComponent, FormsModule]
})
export class RegistradoCitaEspecialidadComponent implements OnInit {
    specialty: Specialty = new Specialty();
    specialties: Specialty[] = [];
    selectedSpecialty: Specialty;
    province:any[] = [];
    provincias: Provincias []= [];
    hospital:any[] = [];
    hospitales: Hospital[] = []; 
    selectedProvince: Provincias; 
    selectedHospital: Hospital;
  
    constructor(
      private specialtyService: SpecialtyService,
      private hospital_service:HospitalService,
      private router: Router
    ) {}
  
    ngOnInit(): void {
        this.list_provincias();
        this.obtener_hospital();

        this.specialtyService.listSpecialty().subscribe(
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
      console.log('Especialidad seleccionada:', this.selectedSpecialty);
    }

    private obtener_hospital(){
        this.hospital_service.obtener_hospitales().subscribe(dato => {
          this.hospital = dato;
        });
    }
      
    list_provincias(){
        this.hospital_service.obtener_provincias().subscribe(dato => {
          this.provincias = dato;
        });
    }

    provinciasAll(event: Event): void {
        const selectElement = event.target as HTMLSelectElement;
        const selectedProvinceId = selectElement.value;
        this.selectedProvince = this.provincias.find(provincia => provincia.id === +selectedProvinceId);
        // this.hospitalesAll(this.selectedProvince);
    }

    hospitalesAll(event: Event): void {
        const selectElement = event.target as HTMLSelectElement;
        const selectedHospitalId = selectElement.value;
        this.selectedHospital = this.hospitales.find(hospital => hospital.id === +selectedHospitalId);
        // this.hospitalesPorProvincia(this.selectedProvince.id);
    }
}
