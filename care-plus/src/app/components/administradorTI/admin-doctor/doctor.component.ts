import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router, RouterModule } from '@angular/router';
import { Doctor } from '../../../entities/Doctor';
import { DoctorService } from '../../../services/doctor.service';
import {AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { Specialty } from '../../../entities/specialty';
import Swal from 'sweetalert2';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-admin-doctor',
    standalone: true,
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.css'],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        AdminSidebarComponent,
        HeaderComponent
    ]
})
export class AdminDoctorComponent implements OnInit {

  doctores: Doctor[] = [];
  itemsPerPage: number = 9;
  currentPage: number = 0;
  totalPages: number = 0;
  name:string = '';
  id:string = '';
  doctores_clear: Doctor[] = [];
  speciality :Specialty [] = [];

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listDoctor();
    this.list_speciality();
  }

  private listDoctor() {
    this.doctorService.listDoctor().subscribe(dato => {
      this.doctores = dato;
      this.totalPages = Math.ceil(this.doctores.length / this.itemsPerPage);
      this.doctores_clear = dato;
    });
  }

  prevPage(event: Event) {
    event.preventDefault();
    if (this.currentPage > 0) {
      this.setPage(event, this.currentPage - 1);
    }
  }

  nextPage(event: Event) {
    event.preventDefault();
    if (this.currentPage < this.totalPages - 1) {
      this.setPage(event, this.currentPage + 1);
    }
  }

  setPage(event: Event, pageIndex: number) {
    event.preventDefault();
    if (pageIndex >= 0 && pageIndex < this.totalPages) {
      this.currentPage = pageIndex;
    }
  }

  chunkArray(myArray: any[], chunk_size: number) {
    const results = [];
    for (let i = 0; i < myArray.length; i += chunk_size) {
      results.push(myArray.slice(i, i + chunk_size));
    }
    return results;
  }

  updateDoctor(id: number) {
    this.router.navigate(['update-doctor', id]);
  }

  goToCreate(){
    this.router.navigate(['add-doctor'])
  }

  burcador_nombre(): void {
    const nombres = this.name.toLowerCase().split(' ');
    this.doctores = this.doctores_clear.filter(s => {
      return nombres.every(name => s.name.toLowerCase().includes(name));
    });
    if (this.doctores.length === 0) {
      Swal.fire({
        title: "Opps...",
        text: "No se han encontrado doctores con el nombre buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }

  burcador_id(): void {
    const id = Number(this.id);

    if (isNaN(id)) {
      Swal.fire({
        title: "Error",
        text: "El ID ingresado no es válido",
        icon: "error"
      });
      return;
    }

    this.doctores = this.doctores_clear.filter(doctor => doctor.id === id);

    if (this.doctores.length === 0) {
      Swal.fire({
        title: "Mantenimiento",
        text: "No se han encontrado doctores con el id buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }
  
  

  private list_speciality() {
    this.doctorService.get_specialidades().subscribe(dato => {
      this.speciality = dato;
    });
  }

  seleccionarSpecialty(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const accion = selectElement.options[selectElement.selectedIndex].value;
    this.limpiar_filtros();
    this.buscar_specialty(accion);
  }

  buscar_specialty(espe:string){
    const especialidadID = parseInt(espe, 10); 

    this.doctores = this.doctores_clear.filter(doctor => {
      return doctor.specialty.id === especialidadID;
    });

    if (this.doctores.length === 0) {
      Swal.fire({
        title: "Opps...",
        text: "No se han encontrado medicos con la especialidad buscada",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }

  limpiar_filtros(): void {
    this.doctores = [...this.doctores_clear];
    this.name = '';
    this.id='';
  }

  
  navigateToUpdateDoctor(id:number) {
    const navigationExtras: NavigationExtras = {
      state: {
        doctorId: id
      }
    };
    this.router.navigate(['/update-doctor'], navigationExtras);
  }

}
