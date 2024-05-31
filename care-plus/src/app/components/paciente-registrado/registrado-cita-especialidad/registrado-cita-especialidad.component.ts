import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";
import { SpecialtyService } from '../../../services/specialty.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Specialty } from '../../../entities/specialty';

@Component({
    selector: 'app-registrado-cita-especialidad',
    standalone: true,
    templateUrl: './registrado-cita-especialidad.component.html',
    styleUrl: './registrado-cita-especialidad.component.css',
    imports: [HeaderComponent, RegistradoSidebarComponent]
})
export class RegistradoCitaEspecialidadComponent implements OnInit{

    constructor(
        private specialtyService:SpecialtyService,
        private router:Router
      ){}


 specialty:Specialty[] = [];
 id:number;
 
    ngOnInit(): void {
        this.getHospitalById(this.id);
    }


   

    // listSpecialty(){
    //     this.specialtyService.getSpecialty().subscribe(dato => {
    //       this.specialty= dato;
    //     });
    //   }

      getHospitalById(id: number): void {
        this.specialtyService.getSpecialtyById(id).subscribe(data => {
          this.specialty = [data];
        });
      }
      


    specialtiesAll(event: Event): void {
        const selectElement = event.target as HTMLSelectElement;
        const selectedProvince = selectElement.options[selectElement.selectedIndex].text;
        this.buscar_provincia(selectedProvince);
      }
      buscar_provincia(specialty:string){
        this.limpiar_filtros();
        // this.specialty = this.specialty.filter(specialty => specialty.name.toLowerCase().startsWith(specialty.toLowerCase()));
        if (this.specialty.length === 0) {
          Swal.fire({
            title: "Opps...",
            text:"No se han encontrado clinicas con la provincia buscada",
            icon: "error"
          });
          this.limpiar_filtros();
        }
      }
    
      limpiar_filtros(){
        // this.specialty = this.hospital_clear.slice();
        // this.nombre='';
      }
    }