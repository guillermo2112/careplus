import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../../services/hospital.service';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import Swal from 'sweetalert2';
import {AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import { Provincias } from '../../../entities/Provincias';
import { HeaderComponent } from "../../shared/header/header.component";
import { Hospital } from '../../../entities/Hospital';

@Component({
    selector: 'app-admin-clinicas',
    standalone: true,
    templateUrl: './admin-clinicas.component.html',
    styleUrl: './admin-clinicas.component.css',
    imports: [
        CommonModule,
        FormsModule,
        AdminSidebarComponent,
        AdminSidebarComponent,
        HeaderComponent
    ]
})
export class AdminClinicasComponent implements OnInit{
  

  constructor(
    private hospital_service:HospitalService,
    private router:Router
  ){}

  hospital:any[] = [];
  province:any[] = [];
  hospital_clear:any[] = [];
  nombre:string = '';
  provincias: Provincias []= [];
  seleccionados:string[]=[];
  currentPage: number = 0;
  itemsPerPage: number = 9;

  ngOnInit(): void {
    this.obtener_hospital();
    this.list_provincias();
  }

  list_provincias(){
    this.hospital_service.obtener_provincias().subscribe(dato => {
      this.provincias = dato;
    });
  }
  
  chunkArray(myArray: any[], chunk_size: number): any[] {
    const results = [];
    for (let i = 0; i < myArray.length; i += chunk_size) {
      results.push(myArray.slice(i, i + chunk_size));
    }
    return results;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  setPage(page: number | string): void {
    if (page !== '...' && +page > -1 && +page <= this.totalPages) {
      this.currentPage = +page;
    }
  }

  getPages(): (number | string)[] {
    const totalVisiblePages = 5;
    const pages: (number | string)[] = [];
    if (this.totalPages <= totalVisiblePages + 1) {
      for (let i = 0; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 3) {
        for (let i = 0; i <= totalVisiblePages; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(this.totalPages);
      } else if (this.currentPage >= this.totalPages - 2) {
        pages.push(0);
        pages.push('...');
        for (let i = this.totalPages - totalVisiblePages + 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(0);
        pages.push('...');
        for (let i = this.currentPage - 1; i <= this.currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(this.totalPages);
      }
    }
    return pages;
  }

  get totalPages(): number {
    return Math.ceil(this.hospital.length / this.itemsPerPage - 1);
  }

  get paginatedHospitals(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.hospital.slice(start, end);
  }

  provinciasAll(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedProvince = selectElement.options[selectElement.selectedIndex].text;
    this.buscar_provincia(selectedProvince);
  }

  burcador_nombre(){
    if(this.nombre.trim() === ''){
      this.limpiar_filtros();
    }
    this.buscar_nombre(this.nombre);
  }

  buscador_provincia(){
    if(this.nombre.trim() === ''){
      this.limpiar_filtros();
    }
    this.buscar_provincia(this.nombre);
  }

  ordenar_provincia(){ 
    this.hospital.sort((a, b) => a.province.id - b.province.id);
  }

  ordenar_id(){
    this.hospital.sort((a, b) => a.id - b.id);
  }

  ordenar_disponibles(){
    this.hospital.sort((a, b) => a.onDutty.localeCompare(b.onDutty));
  }

  ordenar_nombre(){
    this.hospital.sort((a, b) => a.name.localeCompare(b.name));
  }

  buscar_disponibles(){
    this.hospital = this.hospital.filter(hospital => hospital.onDutty === 'ACTIVE');
  }

  buscar_nombre(nombre:string){
    //this.hospital = this.hospital.filter(hospital => hospital.name.toLowerCase().startsWith(nombre.toLowerCase()));
    const nombres = this.nombre.toLowerCase().split(' ');
    this.hospital = this.hospital.filter(hospital => {
      return nombres.every(nombre => hospital.name.toLowerCase().includes(nombre))});
    if (this.hospital.length === 0) {
      Swal.fire({
        title: "Opps...",
        text:"No se han encontrado clinicas con el nombre buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }

  buscar_provincia(provincia:string){
    this.limpiar_filtros();
    this.hospital = this.hospital.filter(hospital => hospital.province.name.toLowerCase().startsWith(provincia.toLowerCase()));
    if (this.hospital.length === 0) {
      Swal.fire({
        title: "Opps...",
        text:"No se han encontrado clinicas con la provincia buscada",
        icon: "error"
      });
      this.limpiar_filtros();
    }
  }

  limpiar_filtros(){
    this.hospital = this.hospital_clear.slice();
    this.nombre='';
  }

  detalles_hospital(id:number){
    this.router.navigate(['clinica',id]);
  }

  private obtener_hospital(){
    this.hospital_service.obtener_hospitales().subscribe(dato => {
      this.hospital = dato.sort((a, b) => a.id - b.id); // Ordena los hospitales por id
      this.hospital_clear = this.hospital.slice();
    });
  }
  

  seleccionarAccion(event: Event):void {
    const selectElement = event.target as HTMLSelectElement;
    const accion = selectElement.options[selectElement.selectedIndex].value;
    this.limpiar_filtros();
    switch (accion) {
      case 'ordenar_provincia':
        this.ordenar_provincia();
        break;
      case 'ordenar_id':
        this.ordenar_id();
        break;
      case 'ordenar_nombre':
        this.ordenar_nombre();
        break;
      case 'ordenar_disponibles':
        this.ordenar_disponibles();
        break;
      case 'buscar_disponibles':
        this.buscar_disponibles();
        break;
      default:

        break;
    }
  }
  value:any;
  

/*
updateHospital(id: number): void {
  this.router.navigate(['update-hospital', id]);
}*/

updateHospital(id: number) {
  const navigationExtras: NavigationExtras = {
    state: {
      hospitalId: id,
    },
  };
  this.router.navigate(['update-hospital'], navigationExtras);
}



getHospitalById(id: number): void {
  this.hospital_service.obtener_hospital_id(id).subscribe(data => {
    this.hospital = [data];
  });
}


goToCreate() {
  window.location.href = '/add-hospital';
}

suspenderHospital() {
  // const onDutty = '';  // Nombre del campo a actualizar
  // const newValue = 'nuevoValor';  // Nuevo valor del campo

  // this.dataService.updateField(id, fieldName, newValue).subscribe(
  //   response => {
  //     console.log('Campo actualizado con éxito', response);
  //   },
  //   error => {
  //     console.error('Error al actualizar el campo', error);
  //   }
}
}
