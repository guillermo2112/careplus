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
        //   this.hospital_clear = dato;
          
        });
      }
      

    list_provincias(){
        this.hospital_service.obtener_provincias().subscribe(dato => {
          this.provincias = dato;
        });
      }

      provinciasAll(event: Event): void {
        const selectElement = event.target as HTMLSelectElement;
        const selectedProvince = selectElement.options[selectElement.selectedIndex].text;
        this.buscar_provincia(selectedProvince);
      }
      buscar_provincia(provincia:string){
        // this.limpiar_filtros();
        this.hospital = this.hospital.filter(hospital => hospital.province.name.toLowerCase().startsWith(provincia.toLowerCase()));
        if (this.hospital.length === 0) {
          Swal.fire({
            title: "Opps...",
            text:"No se han encontrado clinicas con la provincia buscada",
            icon: "error"
          });
        //   this.limpiar_filtros();
        }
      }
}