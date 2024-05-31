import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SpecialtyService } from '../../../services/specialty.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Specialty } from '../../../entities/specialty';
import {  AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-especialidades',
    templateUrl: './especialidades.component.html',
    styleUrls: ['./especialidades.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        AdminSidebarComponent,
        AdminSidebarComponent,
        HeaderComponent
    ]
})
export class EspecialidadesComponent implements OnInit {

  specialty: any[] = [];
  specialty_clear: any[] = [];
  name: string = '';
  seleccionados: string[] = [];

  constructor(
    private specialtyService: SpecialtyService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.listSpecialty();
  }

  /*private listSpecialty(): void {
    this.specialtyService.listSpecialty().subscribe(data => {
      this.specialty = data;
      this.specialty_clear = [...this.specialty]; // Make a copy for filtering
    });
  }*/

  private listSpecialty() {
    this.specialtyService.listSpecialty().subscribe((data) => {
      this.specialty = data;
      this.specialty_clear = data;
    });
  }

  /*updateSpecialty(id: number): void {
    this.router.navigate(['update-specialty', id]);
  }*/


  updateSpecialty(id: number) {
    const navigationExtras: NavigationExtras = {
      state: {
        specialtyId: id,
      },
    };
    this.router.navigate(['/update-specialty'], navigationExtras);
  }

 

  getSpecialtyById(id: number): void {
    this.specialtyService.getSpecialtyById(id).subscribe(data => {
      this.specialty = [data];
    });
  }


  goToCreate() {
    //this.router.navigate(['/specialtys']);
    window.location.href = '/add-specialty';
  }



  seleccionarAccion(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const accion = selectElement.options[selectElement.selectedIndex].value;
    this.limpiar_filtros();
    switch (accion) {
      case 'ordenar_nombre':
        this.ordenar_nombre();
        break;
      case 'ordenar_nombre_des':
        this.ordenar_nombre_des();
        break;
      default:
        break;
    }
  }

  burcador_nombre(): void {
    if (this.name.trim() === '') {
      this.limpiar_filtros();
    }
    this.buscar_nombre(this.name);
  }

  ordenar_id(): void {
    this.specialty.sort((a, b) => a.id - b.id);
  }

  ordenar_nombre(){
    this.specialty.sort((a, b) => a.name.localeCompare(b.name));
  }
  ordenar_nombre_des(){
    this.specialty.sort((b, a) => a.name.localeCompare(b.name));
  }

  buscar_nombre(name: string): void {
    const nombres = this.name.toLowerCase().split(' ');
    this.specialty = this.specialty_clear.filter(s => {
      return nombres.every(name => s.name.toLowerCase().includes(name));
    });
    if (this.specialty.length === 0) {
      Swal.fire({
        title: "Opps...",
        text: "No se han encontrado clinicas con el nombre buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }

  limpiar_filtros(): void {
    this.specialty = [...this.specialty_clear];
    this.name = '';
  }
}
